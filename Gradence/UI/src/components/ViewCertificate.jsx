import React, { useState } from 'react';
import { ethers } from 'ethers';
import ABI from '../assets/CertiApp.json' with { type: 'json' };
import address from '../assets/deployed_addresses.json' with { type: 'json' };

const ViewCertificate = () => {
  const [certificate, setCertificate] = useState(null);

  async function getCertificate(event) {
    event.preventDefault();
    const id = document.getElementById('certId').value;

    try {
      const provider = new ethers.BrowserProvider(window.ethereum); 
      const signer = await provider.getSigner();
      const certiInstance = new ethers.Contract(address['CertModule#CertiApp'], ABI.abi, signer);
      const txtValue = await certiInstance.certificate(id);

      setCertificate({
        name: txtValue[0],
        course: txtValue[1],
        grade: txtValue[2],
        date: txtValue[3],
      });
    } catch (err) {
      console.error("Error fetching certificate:", err);
      setCertificate(null);
    }
  }

  return (
    <div className="flex flex-col items-center mt-6 space-y-4">
      <input 
        type="text" 
        id="certId" 
        className="w-80 h-12 px-4 border border-indigo-600 ring-2 inline-block" 
        placeholder="Enter Certificate ID" 
      />
      <button 
        onClick={getCertificate} 
        className="h-12 px-6 py-2 text-white bg-indigo-600 border border-indigo-600 inline-block"
      >
        Get Certificates
      </button>

      {certificate && (
            <div class="w-2/4 m-auto bg-violet-100 mt-40">
            <div class="p-16">
                <p class="font-mono font-bold text-2xl text-center">Certificate of Achievement</p>
                <img src="online-course.png" class="w-1/5  m-auto pt-12"/>
                <p class="font-mono text-center pt-12">This is certified that {certificate.name}</p>
                <p class="font-mono text-center">has successfully completed {certificate.course}</p>
                <p class="font-mono text-center">width {certificate.grade} on {certificate.date}</p>
            </div>
        </div>
   
        
      )}
    </div>
  );
};

export default ViewCertificate;
