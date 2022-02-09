import { createApp } from 'vue'
import App from './App.vue'
import { initWallet } from 'solana-wallets-vue';

import SolanaWallets from 'solana-wallets-vue';

// You can either import the default styles or create your own.
import 'solana-wallets-vue/styles.css';

import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';

const walletOptions = {
    wallets: [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
  //    new SolflareWalletAdapter({ network: 'devnet' }),
    ],
    autoConnect: true,
  }

initWallet(walletOptions);

createApp(App)
//.use(SolanaWallets, walletOptions)
.mount('#app');


