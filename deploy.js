require('dotenv').config();

const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);


// ABI from Remix
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
	}
];

const contractAddress = '0x5803eB61CC1e0BCc806b9A61a282Fe765C5B0ddf'; // Contract address

// Connect to your wallet using a private key (ensure private key is stored securely)
const privateKey = process.env.PRIVATE_KEY;

const wallet = new ethers.Wallet(privateKey, provider);

// Create a contract instance
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

// Call checkBalance function
async function getBalance() {
    try {
        const balance = await contract.checkBalance();
        console.log("Contract Balance:", balance.toString());
    } catch (error) {
        console.error("Error getting balance:", error);
    }
}

// Call Withdraw function
async function withdraw() {
    try {
        const tx = await contract.withdraw();
        console.log("Withdrawal Transaction Receipt:", tx);
    } catch (error) {
        console.error("Error with withdrawal:", error);
    }
}

// Call functions
getBalance();
withdraw();
