import React, { useState } from 'react';
import { ethers } from 'ethers';
import contractAbiImport from '../contracts/BikeRental.json';
import contractAdressImport from '../contracts/contract-address.json';
import settings from '../settings';
import { useWallet } from '../context/WalletContext';

const contractABI = contractAbiImport.abi;
const contractAddress = contractAdressImport.ContractAddress;

function RegisterBike() {
  const [pricePerHour, setPricePerHour] = useState('');
  const [loading, setLoading] = useState(false);
  const { wallet } = useWallet();

  async function handleRegisterBike(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const hweiPrice = ethers.utils.parseUnits(pricePerHour, 'wei');
      if (hweiPrice.lte(0)) {
        alert("Price must be a positive value.");
        return;
      }

      // Access web provider and get signer
      const provider = new ethers.providers.JsonRpcProvider(settings.API_KEY);
      const signer = wallet;

      // Get contract object from Web3 provider
      const bikeRentalContract = new ethers.Contract(contractAddress, contractABI, signer);

      // Call register bike function and wait for it to complete on the blockchain
      const tx = await bikeRentalContract.registerBike(hweiPrice);
      await tx.wait();
      alert("Bike registered successfully!");

      setPricePerHour(''); // Reset input field after successful registration
    } catch (error) {
      console.error("Failed to register bike:", error);
      alert("Failed to register bike. See console for more details.");
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div>  
      <h2>Register New Bike</h2>
        <form onSubmit={handleRegisterBike}>
          <div>
            <label className='label_image' htmlFor="pricePerHour">Price Per Hour (in wei):</label>
            <input
              id="pricePerHour"
              className='text-field'
              type="number"
              min="0"
              value={pricePerHour}
              onChange={e => setPricePerHour(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='button-38'>
          {loading ? 'Registering...' : 'Register Bike'}
          </button>
        </form>
    </div>
  );
}

export default RegisterBike;
