<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
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
            <v-card raised>
              <v-toolbar light>
                <v-toolbar-title>CRYPTOCURRENCY | USD | NGN</v-toolbar-title>
              </v-toolbar>
              <v-list three-line>
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img src="'currency_img'">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="'Bitcoin'">
                    </v-list-tile-title>
                  </v-list-tile-content>
                   <v-list-tile-content>
                    <v-list-tile-title>
                      {{usd}}
                    </v-list-tile-title>
                  </v-list-tile-content>
                   <v-list-tile-content>
                    <v-list-tile-title>
                      {{ngn}}
                    </v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <span>
                      <v-btn small fab dark>
                        <v-icon dark>add</v-icon>
                      </v-btn>
                    </span>
                  </v-list-tile-action>  
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    usd: '10,000',
    ngn: '3,900,000'
  }),
  props: {
    source: String
  }
}
</script>
