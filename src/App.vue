<template>

  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

    <wallet-multi-button></wallet-multi-button>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import { createApp } from 'vue';
//import { initWallet } from 'solana-wallets-vue';
import { WalletMultiButton } from 'solana-wallets-vue'


import HelloWorld from './components/HelloWorld.vue';
//import 'solana-wallets-vue/styles.css';

//import { getPhantomWallet, getSolflareWallet } from '@solana/wallet-adapter-wallets';
//import { WalletMultiButton, WalletModalProvider } from '@solana/wallet-adapter-vue-ui';

/*import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
*/

// eslint-disable-next-line no-unused-vars
//import { WalletProvider } from '@solana/wallet-adapter-vue';

// eslint-disable-next-line no-unused-vars
//const wallets =[];
/*const wallets = [
    getPhantomWallet(),
    getSolflareWallet(),
];  


*/



export default defineComponent({
  name: 'App',
  components: {
    HelloWorld, WalletMultiButton
  }, setup() {
   // initWallet(walletOptions);
  }
}); 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
