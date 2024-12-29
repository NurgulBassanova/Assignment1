const {Web3} = require('web3');

// Connect to Ganache
const web3 = new Web3('http://127.0.0.1:7545');

// Check if connected
web3.eth.getAccounts().then(console.log);

// ABI from Remix
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "checkBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]; 
const contractAddress = '0x74A6D8449EC7992132Ff4264278d26a3366c1fCD'; // Contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Call checkBalance function
contract.methods.checkBalance().call()
    .then(balance => {
        console.log("Contract Balance: ", balance);
    });

// Call Withdraw function
const account = '0x3540231008aEB9d28EE15403F6065E2Ec221f69D'; // Ganache account address

contract.methods.withdraw().send({ from: account })
    .then(receipt => {
        console.log("Withdrawal Transaction Receipt: ", receipt);
    });