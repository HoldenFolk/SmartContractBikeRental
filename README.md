# Smart Contract Bike Rental System

This project was completed for COMP 555 (Software Privacy) and explored an alternative solution to the Bixi bike-sharing service in Montreal that emphasizes privacy by design.

This project utilizes smart contracts and payments on the blockchain to create a pseudo-anonymous payment system that protects user privacy.

This project was created with the help of team members:
Antonin Roy, Pablo Collin, and Andrew St. Laurent.

## Research

The research done before creating the solution is in 'BixiResearch.md'. Here, we explore the privacy concerns with the current Bixi bike rental service.

## Project Structure

This project contains a smart contract project as well as a front end. The front-end project is nested inside the smart contract to facilitate ease of local deployment. For more info on local deployment see the individual README in each project.

- Smart Contract:
  We decided to develop the smart contract on the Ethereum network using Solidity. This is the most common and well supported network for creating smart contracts.
- Front end:
  The front-end of the application was created using React.js

## Solution

The solution utilizes a smart contract payment system to prevent and enforce bike theft while maintaining user anonymity. The user links their wallet to the React.js web app. They initiate a transaction with the smart contract that receives a deposit for the bike. If the user does not return the bike, then the deposit is kept within the contract and not returned to the user.

The owner's wallet is already linked to the Web application. This way, you can register bikes as the owner. However, you can also link your own wallet to see the balance changes that result after transactions. The rent and return features are mocked to buttons on the web app for proof of concept.

The solution is outlined in a diagram below.

![Solution Diagram](./images/architecture.png "Solution Architecture")

## Hosting and Interaction

This app is hosted through AWS Amplify! You can view the deployed version here: https://main.d2jusiuq0y07ky.amplifyapp.com. As stated, the owners wallet is already connected to the application. This allows you to use the application without creating and conncecting your own wallet. This is a security risk to the owners wallet credentials; however, is just done to show proof of concept. Furthermore, the connected wallet has no real Ethereum and is simply for testing.

If you would like to connect your own wallet, then you can do so using MetaMask. Simply download the MetaMask extension on your browser and connect it to the app using the 'Connect Wallet' feature. You can then add Ethereum Sepolia (Tester Ethereum) to your wallet to perform transactions!
