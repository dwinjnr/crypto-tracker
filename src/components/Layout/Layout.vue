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
            <v-icon>account_circle</v-icon>
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
              <v-list two-line>
                <v-list-tile avatar v-for="(price, currency) in cryptocurrencies" :key="currency">
                  <v-list-tile-avatar>
                    <img :src="images[currency]">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="currency">
                    </v-list-tile-title>
                  </v-list-tile-content>
                   <v-list-tile-content>
                    <v-list-tile-title>
                      <span>${{price.USD}}</span>
                    </v-list-tile-title>
                  </v-list-tile-content>
                   <v-list-tile-content>
                    <v-list-tile-title>
                      <span>N{{price.NGN}}</span>
                    </v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-tooltip left>
                      <v-btn small fab slot="activator">
                        <v-icon>track_changes</v-icon>
                      </v-btn>
                      <span>Track Changes</span>
                    </v-tooltip>
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
    images: {
      BTC: 'https://www.cryptocompare.com/media/19633/btc.png',
      IOT: 'https://www.cryptocompare.com/media/1383540/iota_logo.png',
      ETH: 'https://www.cryptocompare.com/media/20646/eth_logo.png',
      XMR: 'https://www.cryptocompare.com/media/19969/xmr.png',
      LTC: 'https://www.cryptocompare.com/media/19782/litecoin-logo.png'
    }
  }),
  props: {
    cryptocurrencies: {
      required: true
    },
    source: String
  }
}
</script>
