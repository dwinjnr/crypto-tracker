<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense v-if="login">
        <v-list-tile to="dashboard">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="user">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>User</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense v-else>
        <v-list-tile to="dashboard">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="login">
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="signup">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Signup</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
      <v-list-tile>
          <v-list-tile-action>
            <span>Login</span>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style="padding: 0px 0px 5px 13px;">
              <v-switch dark :label="`${login.toString()}`" v-model="login"></v-switch>
              <v-switch dark :label="`${login.toString()}`" v-model="login"></v-switch>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Crypto Tracker</v-toolbar-title>
    </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center>
            <v-flex xs12 sm10>
              <router-view :cryptocurrencies="cryptocurrencies"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    <v-footer app fixed>
      <span>CryptoTracker &copy; 2018 by <a style="text-decoration:none;" href="www.github.com/dwinjnr">Godwin Ogbonnaya Jnr</a></span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    login: false
  }),
  props: {
    cryptocurrencies: {
      required: true
    }
  }
}
</script>
