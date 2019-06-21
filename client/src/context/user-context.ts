import { accountsGraphQL, accountsPassword } from "@/utils/apollo";
import { ProfileInput } from "@/generated/graphql";

export interface User {}

interface UserState {
  user?: User;
  loggingIn: boolean;
}

export class UserProvider {
  private state: UserState = {} as UserState;

  private setUserState(state: UserState) {
    this.state = state;
  }

  async getUser() {
    let user: any = null;

    try {
      user = await accountsGraphQL.getUser();
      console.log("!!!user", user);
    } catch (error) {
      console.error("There was an error logging in.", error);
    } finally {
      this.setUserState({
        user: user && { ...user, _id: user.id },
        loggingIn: false
      });
    }
  }

  async logIn(email: string, password: string) {
    await accountsPassword.login({ password, user: { email } });
    await this.getUser();
  }

  async signUp(args: {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    password: string;
    isLandlord: boolean;
  }) {
    const { firstName, middleName, lastName, email, password } = args;
    await accountsPassword.createUser({
      password,
      email,
      profile: { firstName, middleName, lastName } as ProfileInput
    });
    await this.logIn(email, password);
  }

  async logOut() {
    await accountsGraphQL.logout();
    this.setUserState({ user: undefined, loggingIn: false });
  }
}
