const Web3 = require('web3');

// Connect to Ganache
const web3 = new Web3('http://127.0.0.1:7545');

// Example: Check if connected
web3.eth.getAccounts().then(console.log);
const contractABI = [ /* ABI goes here */ ]; // Paste the ABI from Remix
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Call checkBalance
contract.methods.checkBalance().call()
    .then(balance => {
        console.log("Contract Balance: ", balance);
    });

// Withdraw (make sure to unlock your account in Ganache first)
const account = 'YOUR_ACCOUNT_ADDRESS'; // Replace with your Ganache account address

contract.methods.withdraw().send({ from: account })
    .then(receipt => {
        console.log("Withdrawal Transaction Receipt: ", receipt);
    });