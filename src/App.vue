<template>
  <div id="app">
    <router-view :cryptocurrencies = "crypto"/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      crypto: [],
      errors: []
    }
  },
  created () {
    this.fetchData()
    setInterval(this.fetchData, 3000)
  },
  methods: {
    fetchData () {
      axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,XMR,LTC,TRX,XRP,BNB,QTUM,ELF&tsyms=USD')
        .then(response => {
          this.crypto = response.data
        }).catch(error => this.errors.push(error))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
