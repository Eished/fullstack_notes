<template>
  <div class="Moralis">
    <h2>Moralis</h2>
    <button @click="pay">支付</button>
  </div>
</template>

<script>
import Moralis from 'moralis'



export default {
  name: 'Moralis',
  data () {
    return {
      list: [],
      show: false,
    }
  },
  methods: {
    async pay () {
      Moralis.initialize('En00KLYtbhiHjzsmuW1KDcmtutxcBVq7q6yLZrOW')

      Moralis.serverURL = 'https://exftlyecqh3c.moralishost.com:2053/server'

      await Moralis.authenticate().catch(e => { console.log(e) })
      // .then(function (user) {
      //   console.log(user.get('ethAddress'))
      //   console.log(user)
      // })
      const user = Moralis.User.current();
      console.log(user)
      if (!user) { return }
      const ABI = [
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        }
      ];
      const contractAddress = user.get('ethAddress')
      const contractAbi = ABI
      // const options = {
      //   contractAddress: contractAddress,
      //   functionName: "allowance",
      //   abi: contractAbi,
      //   params: {
      //     owner: "0x2...45",
      //     spender: "0x3...49"
      //   }
      // };

      /**
       * MetaMask: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.
       * For more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect
       * 
       * MetaMask: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.
       * For more information, see: https://eips.ethereum.org/EIPS/eip-1102
       * 
       * MetaMask: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.
       * For more information, see: https://eips.ethereum.org/EIPS/eip-1193
       */

      const ethereum = window.ethereum;
      ethereum.send('eth_requestAccounts')
      console.log(ethereum)
      const web3 = await Moralis.enable().catch(e => { console.log(e) });
      console.log(web3)
      const contract = new web3.eth.Contract(contractAbi, contractAddress);
      console.log(contract)

      // ethereum.request({ method: 'eth_accounts' })
      //   .then((accounts) => console.log('???:', accounts))
      //   .catch((error) => console.error(error));

      return ethereum
        .request({
          method: 'eth_getBlockByNumber',
          params: ['latest', true],
        })
        .then((block) => {
          console.log(`Block ${block.number}:`, block);
          return block.number;
        })
        .catch((error) => {
          console.error(
            `Error fetching last block: ${error.message}.
       Code: ${error.code}. Data: ${error.data}`
          );
        });

    },
  },
}
</script>
