import "reflect-metadata";
import mongoose from "mongoose";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { mergeResolvers, mergeTypeDefs, mergeSchemas } from "graphql-toolkit";
import { PORT, MONGO_HOST, DB_NAME } from "./modules/common/consts";
import UserResolver from "./modules/user/UserResolver";
import { authChecker } from "./modules/user/authChecker";
import { setUpAccounts } from "./modules/user/accounts";
import { TypegooseMiddleware } from "./middleware/typegoose";

(async () => {
  const mongooseConnection = await mongoose.connect(
    `mongodb+srv://${MONGO_HOST || "localhost"}/${DB_NAME}`,
    { useNewUrlParser: true }
  );
  const { accountsGraphQL, accountsServer } = setUpAccounts(
    mongooseConnection.connection
  );

  const typeGraphqlSchema = await buildSchema({
    resolvers: [UserResolver],
    globalMiddlewares: [TypegooseMiddleware],
    // scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    validate: false,
    emitSchemaFile: true,
    authChecker
  });

  const schema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([accountsGraphQL.typeDefs]),
    resolvers: mergeResolvers([accountsGraphQL.resolvers]),
    schemaDirectives: {
      ...accountsGraphQL.schemaDirectives
    }
  });

  const server = new ApolloServer({
    schema: mergeSchemas({
      schemas: [schema, typeGraphqlSchema]
    }),
    context: accountsGraphQL.context,
    formatError: error => {
      console.error(error);
      return error;
    },
    playground: true
  });

  const app = express();
  app.use(express.static("../client/dist"));
  server.applyMiddleware({ app });

  await app.listen({ port: PORT });
  console.log(`🚀 Server ready at localhost:${PORT}`);
})();
