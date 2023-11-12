import { createStore } from 'vuex';
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(
  'https://eth-goerli.g.alchemy.com/v2/FY02V0D1h9LCi7Gox4qpJHREU5tNAIaq'
);
// const Web3 = require('web3');
// const web3 = new Web3('wss://eth-goerli.g.alchemy.com/v2/FY02V0D1h9LCi7Gox4qpJHREU5tNAIaq');

export default createStore({
  state: {
    blocks: [],
  },
  getters: {},
  mutations: {
    addBlock(state, newBlock) {
      state.blocks.unshift(newBlock);
    },
  },
  actions: {
    async newBlockHeaders({ commit }) {
      provider.on('block', async blockNumber => {
        let block = await provider.getBlock(blockNumber);
        let newBlock = {
          number: block.number,
          hash: block.hash,
        };
        commit('addBlock', newBlock);
      });
    },
    // eslint-disable-next-line no-unused-vars
    async getBlock({ commit }, blockNumberOrHash) {
      if (!ethers.utils.isBytesLike(blockNumberOrHash)) {
        blockNumberOrHash = Number(blockNumberOrHash);
      }
      return await provider.getBlock(blockNumberOrHash);
    },
    async getTransaction(txHash) {
      return await provider.getTransaction(txHash);
    },
  },
  modules: {},
});
