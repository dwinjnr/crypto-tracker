<template>
  <v-app id="inspire" light>
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
      <v-container>
        <v-layout row wrap>
          <v-flex sm6><span style="margin-top: 5px; display: block;">Login</span></v-flex>
          <v-flex sm6>
            <v-list style="margin-top: 0px; padding: 0px;">
              <v-list-tile-content>
                <v-list-tile-title style="height: 50px; padding-left: 5px;">
                  <v-switch light :label="`${login.toString()}`" v-model="login"></v-switch>
                  <v-switch light :label="`${login.toString()}`" v-model="login"></v-switch>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Crypto Tracker</v-toolbar-title>
    </v-toolbar>
      <v-content id="content">
        <v-container fluid fill-height>
          <v-layout justify-center>
            <v-flex xs12 sm10>
              <router-view :cryptocurrencies="cryptocurrencies"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    <v-footer app fixed>
      <span  style="font-size:10px;">CryptoTracker &copy; 2018 designed by <a style="text-decoration:none;" :href="githuburl">Godwin Ogbonnaya Jnr</a></span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    login: false,
    githuburl: 'https://github.com/dwinjnr'
  }),
  props: {
    cryptocurrencies: {
      required: true
    }
  },
  created () {
    if (window.outerWidth < 768) {
      this.drawer = false
    }
  }
}
</script>

<style>
.content {
  padding-top: 0px !important;
}
</style>
