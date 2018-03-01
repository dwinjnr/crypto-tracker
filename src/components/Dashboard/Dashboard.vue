<template>
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
</template>

<script>
export default {
  data: () => ({
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
