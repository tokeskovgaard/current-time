<template>
  <div class="login">
    <h1>Sign-up</h1>
    <input v-model="firstName" placeholder="Fornavn" /><br />
    <input v-model="middleName" placeholder="Mellemnavn" /><br />
    <input v-model="lastName" placeholder="Efternavn" /><br />
    <input v-model="email" placeholder="Email" /><br />
    <input v-model="username" placeholder="Brugernavn" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button v-on:click="trySignup()">Sign up</button>
    <h1>Login</h1>
    <input v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button v-on:click="trySignIn()">Sign up</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { UserProvider } from "@/context/user-context";

@Component({})
export default class Home extends Vue {
  firstName: string = "Toke";
  middleName: string = "Reimer";
  lastName: string = "Skovgaard";
  email: string = "toke1337@reimerskovgaard.dk";
  username: string = "";
  password: string = "garf1eld";

  constructor() {
    super();
  }

  async trySignup() {
    let userProvider = new UserProvider();
    const status = await userProvider.signUp({
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      isLandlord: true
    });
    console.log(status);
  }
  async trySignIn() {
    const response = await new UserProvider().logIn(this.email, this.password);
    console.log(response);
  }
}
</script>
