<template>
  <v-container grid-list-md text-xs-center>
    <v-layout class="mylayout" row wrap>
      <v-flex xs12>
        <v-card raised hover>
          <v-card-title>CRYPTOCURRENCY | CURRENT PRICE @ </v-card-title>
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
              <v-list-tile-action>
                <v-tooltip left>
                  <v-btn small fab slot="activator">
                    <v-icon>add_alert</v-icon>
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
</template>

<script>
export default {
  data: () => ({
    images: {
      BTC: 'https://www.cryptocompare.com/media/19633/btc.png',
      IOT: 'https://www.cryptocompare.com/media/1383540/iota_logo.png',
      ETH: 'https://www.cryptocompare.com/media/20646/eth_logo.png',
      XMR: 'https://www.cryptocompare.com/media/19969/xmr.png',
      LTC: 'https://www.cryptocompare.com/media/19782/litecoin-logo.png',
      TRX: 'https://www.cryptocompare.com/media/12318089/trx.png',
      XRP: 'https://www.cryptocompare.com/media/19972/ripple.png',
      BNB: 'https://www.cryptocompare.com/media/1383947/bnb.png',
      QTUM: 'https://www.cryptocompare.com/media/1383382/qtum.png',
      ELF: 'https://www.cryptocompare.com/media/20780600/elf.png'
    }
  }),
  props: {
    cryptocurrencies: {
      required: true
    }
  }
}
</script>
