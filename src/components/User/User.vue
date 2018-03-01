<template>
  <div>
    <v-container>
      <v-card raised>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-text-field box label="First Name" v-model="first"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field box label="Last Name" v-model="last"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field box label="Email address" v-model="email"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>
    <v-container>
      <v-card raised>
        <v-toolbar light>
          <v-toolbar-title>CRYPTOCURRENCY | TRACK PRICE | CURRENT PRICE </v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="images.BTC">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-text="BTC">
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-title>
                <span>${{trackPrice}}</span>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-title>
                <span>${{cryptocurrencies.BTC.USD}}</span>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-tooltip left>
                <v-btn small fab slot="activator">
                  <v-icon>mode_edit</v-icon>
                </v-btn>
                <span>Edit</span>
              </v-tooltip>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    first: 'Tracker',
    last: 'User',
    email: 'user@gmail.com',
    trackPrice: '10,000',
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
    }
  }
}
</script>
