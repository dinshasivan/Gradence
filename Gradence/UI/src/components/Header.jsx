import React from 'react'
import {Link} from 'react-router-dom'
import {ethers} from 'ethers';

const Header = () => {

  async function connectToMetamask() {
    try {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        alert("Connected account:", accounts[0]);
      } else {
        console.error("MetaMask not installed.");
      }
    } catch (error) {
      console.error("Connection failed:", error);
    }
  }
  
  return (
    <div className=" w-full ">
    <nav>
        <ul className="flex flex-row justify-end space-x-4  p-6">
            <li><button onClick={connectToMetamask} className='p-2 bg-gray-400 text-white'>Connect to Metamask</button></li>
            <li><Link to={'/'} className=' mt-2 p-2 bg-gray-400'>Home</Link></li>
            <li><Link to={'/issue'} className='mt-2 p-2 bg-gray-400'>Issue</Link></li>
        </ul>
    </nav>
</div>
  )
}

export default Header