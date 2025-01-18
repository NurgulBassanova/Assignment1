# Assignment 1


 Smart contract deployment

### Team members: 
- Nurgul Bassanova SE-2323
- Nurkasym Bolat SE-2325
- Ulzhan Tamyzgazina SE-2325


## Contents

1. [Project overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Setup and installation](#setup-and-installation)
4. [Deployment](#deployment)
5. [Deployment in Sepolia network](#deployment-in-sepolia-network)
6. [Conclusion](#conclusion)
7. [Files](#files)
8. [License](#license)
9. [References](#license)



## Project overview

- <b><i>Goal</i>:</b>  to design, deploy, and interact with a smart contract using Ethereum-compatible tools and frameworks
- <b><i>Tasks</i></b>:
    1. Write a smart contract with the following features: accepting Ether, allowing the owner to withdraw the balance, provide a balance-checking function.
    2. Configure web3.js and set up the environment.
    3. Connect web3.js to Ganache or a public testnet.
    4. Link Metamask to the chosen network.
    5. Deploy the smart contract.
    6. Test contract functions using the configured setup.
 

## Prerequisites

1. **Node.js** (version 14.x or later) - [Install Node.js](https://nodejs.org/)
2. **Ganache** - [Download Ganache](https://www.trufflesuite.com/ganache)
3. **MetaMask** browser extension - [Install MetaMask](https://metamask.io/)
4. **VS Code** - [Download VS Code](https://code.visualstudio.com/)


## Setup and installation 

### 1. Clone the repository:

```bash
git clone https://github.com/NurgulBassanova/Assignment1.git
cd Assignment1
```
### 2. Install dependencies:

```bash
npm install
```
### 3. Set up Ganache:
- Open Ganache and create a new workspace.
- Note the RPC server URL (usually http://127.0.0.1:7545).
- Ensure you have at least one account with Ether (Ganache provides some pre-funded accounts).

### 4. Set up MetaMask:
- Open MetaMask and create a new wallet if you haven't already.
- Connect MetaMask to your local Ganache network using the RPC URL from Ganache (http://127.0.0.1:7545).
= Import one of the Ganache accounts into MetaMask using the private key provided by Ganache.


### 5. Deploy the Contract:
```bash
node deploy.js
```


## Deployment
![Описание изображения](images/web3.jpg)

Highlights the deployment script (deploy.js) with the configuration for connecting to the Ganache blockchain. Also, as you can see using Web3, which is declared as `const {Web3}`.


![Описание изображения](images/script.jpg)


A view of the deployment script opened in VS Code, showcasing the JavaScript logic used for deploying the contract.

![Описание изображения](images/smart.jpg)

Shows the smart contract code in Remix IDE, where it was written, compiled, and tested for functionality.

The smart contract used in this project supports the following functions:

- `checkBalance()`: Returns the current Ether balance of the contract.
- `withdraw()`: Transfers all Ether from the contract to the owner's address.
- `receive()`: Allows the contract to accept Ether directly.

![Описание изображения](images/withdraw.jpg)

Displays the MetaMask popup requesting user confirmation for the transaction to deploy the smart contract.

![Описание изображения](images/approve1.jpg)

Shows the MetaMask notification confirming the successful approval of the transaction.

![Описание изображения](images/acc.jpg)

A view of our MetaMask account, where you can see that tranaction is deployed. 

![Описание изображения](images/outputVS.jpg)

Captures the terminal output in VS Code after executing the deployment script, including transaction details such as the contract address and status.
![Описание изображения](images/ganache.jpg)

Displays the Ganache interface, showing the details of the contract creation and any calls made to it.

## Deployment in Sepolia Network
![Описание изображения](images/sepoliatransact.png)

When we are trying to execute smart contract with Sepolia network, we see this notification window.

![Описание изображения](images/sepolia2.png)

Here you can see the activity of Sepolia network, in which we are accepting SepoliaETH and withdrawing our funds. 

![Описание изображения](images/deploy.jpg)

Here is the output when we deploying with the Sepolia network. We use .env file for better security and also hardhat tools to connect with network.

![Описание изображения](images/infura.png)


![Описание изображения](images/sepoliatransact.png)
We checked the transaction by hash on https://sepolia.etherscan.io/ . And it succeded.


## Conclusion

We created a smart contract that can receive Ether, let the owner withdraw Ether, and check the balance of the contract. This shows how smart contracts work on the Ethereum blockchain. 
We set up the environment by installing the Web3.js library, which helps connect to the Ethereum network. 
We also configured Ganache and Metamask to work together, making it easier to interact with the blockchain. The smart contract was successfully deployed on Ganache, a local test network, and its functions were tested by calling them from the environment we set up.

![Описание изображения](images/callandcreation.jpg)


## Files

- deploy.js: Javascript script to deploy the smart contact within environment(VS code) with Ganache settings
- smartcontract.sol: Solidity script to deploy the smart contact with Metamask account
- README.md: explanatory text file
- LICENSE: MIT license
- package.json, package-lock.json, node_modules: libraries to use web3 and node.js
- images: folder for screenshoots

## License

MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## References

Bhargav, K. (2020, August 17). Blockchain for beginners. Medium. Retrieved from https://medium.com/@kacharlabhargav21/

Truffle Suite. (n.d.). Ganache. Retrieved from https://trufflesuite.com/ganache/

Web3.js documentation. (2021). Getting started. Retrieved from https://web3js.readthedocs.io/en/v1.10.0/getting-started.html

Web3.py documentation. (n.d.). Quickstart. Retrieved from https://web3py.readthedocs.io/en/stable/quickstart.html

Traversy Media. (2018, December 20). Ethereum & Smart Contracts for Beginners (2020) - Full Course. Retrieved from https://www.youtube.com/watch?v=t3wM5903ty0&list=PLS5SEs8ZftgXlCGXNfzKdq7nGBcIaVOdN

