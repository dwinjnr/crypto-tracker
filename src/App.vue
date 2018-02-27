<template>
  <div id="app">
    <router-view :cryptocurrencies = "cryptocurrencies"/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      cryptocurrencies: [],
      errors: []
    }
  },
  created () {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,LTC,XMR&tsyms=USD,EUR')
    .then(response => {
      this.cryptocurrencies = response.data;
    }).catch(error => this.errors.push(error));
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
