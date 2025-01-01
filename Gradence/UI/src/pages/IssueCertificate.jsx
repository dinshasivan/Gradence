import React,{useState} from 'react';
import {ethers} from 'ethers';
import ABI from '../assets/CertiApp.json' with {type:'json'}
import address from '../assets/deployed_addresses.json' with {type:'json'}

const IssueCertificate = () => {
  const [formData, setFormData] = useState({
    ID:0,
    Name:"",
    Course:"",
    Grade:"",
    Date:""
  })

  const [output, setOuput] = useState('');

  function handleChange (event){ 
    event.preventDefault()
    // console.log(event.target);
    
    const {name, value} = event.target;
    setFormData((preState)=>({...preState,[name]:value}))
    console.log(formData);
  }

  async function handleSubmit(event){
    event.preventDefault()
    const provider = new ethers.BrowserProvider(window.ethereum); 
    const signer = await provider.getSigner(); 
    const cAbi = ABI.abi; 
    const cAddress = address['CertModule#CertiApp']
    console.log(cAddress);
    const certiInstance = new ethers.Contract(cAddress,cAbi,signer);
    console.log(certiInstance);
    
    const transReceipt = await certiInstance.issueCertificate(formData.ID, 
      formData.Name,
      formData.Course,
      formData.Grade,
      formData.Date
    )
    console.log(transReceipt);
    
  }
  

  

  // async function getCertificate(event){
  //   event.preventDefault()
  //   const id = document.getElementById('id').value;
  //   console.log(id);
    
  //   const provider = new ethers.BrowserProvider(window.ethereum); 
  //   const signer = await provider.getSigner();
  //   const cAbi = ABI.abi; 
  //   const cAddress = address['CertModule#CertiApp']
  //   console.log(cAddress);
  //   const certiInstance = new ethers.Contract(cAddress,cAbi,signer);
  //   console.log(certiInstance);

  //   const txtVale = await certiInstance.certificate(id);
  //   console.log(txtVale);

  //   setOuput(`Name:${txtVale[0]} Course:${txtVale[1]} Grade:${txtVale[2]} Date:${txtVale[3]}`)
    
    
  // }
  return (
    <>
      <p className="font-mono font-bold text-4xl p-10 text-center">Certificate Dapp</p>
      <div className="bg-stone-300 w-3/12 p-14 rounded-lg font-sans shadow-xl mt-6 m-auto">
        <form onSubmit={handleSubmit}>
          <p className="font-mono font-bold text-2xl text-center">Issue Certificate</p>
          
          <label className="mt-6 font-mono block" htmlFor="certificateId">Certificate Id*</label>
          <input 
            type="text" 
            name='ID' 
            value={formData.ID}
            onChange={handleChange}
            id="certificateId" 
            className="w-4/5 h-12 rounded-lg border border-indigo-600 ring-2 hover:ring-4" 
            required/>

          <label className="mt-6 font-mono block" htmlFor="candidateName">Candidate Name*</label>
          <input 
            type="text" 
            name='Name' 
            value={formData.Name}
            onChange={handleChange}
            id="candidateName" 
            className="w-4/5 h-12 rounded-lg border border-indigo-600 ring-2 hover:ring-4" 
            required/>

          <label className="mt-6 font-mono block" htmlFor="course">Select Course*:</label>
          <input 
            type="text" 
            name='Course' 
            value={formData.Course}
            onChange={handleChange}
            id="candidateName" 
            className="w-4/5 h-12 rounded-lg border border-indigo-600 ring-2 hover:ring-4" 
            required/>
          {/* <select 
            id="course" 
            name='Course' 
            value={formData.Course}
            onChange={handleChange}
            className="w-4/5 h-12 rounded-lg border border-stone-300 ring-2 hover:ring-4">
            <option value="PG Diploma Blockchain">PG Diploma In Blockchain</option>
            <option value="PG Diploma AI">PG Diploma In AI</option>
            <option value="PG Diploma Cloud">PG Diploma In Cloud Computing</option>
            <option value="PG Diploma DataScience">PG Diploma In Data Science</option>
          </select> */}

          <label className="mt-6 font-mono block" htmlFor="grade">Select Grade*</label>
          <input 
            type="text" 
            name='Grade' 
            value={formData.Grade}
            onChange={handleChange}
            id="candidateName" 
            className="w-4/5 h-12 rounded-lg border border-indigo-600 ring-2 hover:ring-4" 
            required/>
          {/* <select 
            id="grade" 
            name='Grade' 
            value={formData.Grade}
            onChange={handleChange}
            className="w-4/5 h-12 rounded-lg border border-stone-300 ring-2 hover:ring-4" 
            required>
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select> */}

          <label className="mt-6 font-mono block" htmlFor="issueDate">Issue Date*</label>
          <input 
            type="date" 
            id="issueDate" 
            name='Date'
            value={formData.Date} 
            onChange={handleChange}
            className="w-4/5 h-12 rounded-lg border border-stone-300 ring-2 hover:ring-4" 
            required/>

          <button type="submit" className="mt-6 bg-gray-900 ml-28 rounded-lg min-w-24 px-3 py-2 text-white border border-indigo-600 focus:ring-offset-2 ring-2">
            Issue Certificate
          </button>
        </form>
      </div>
    </>
  );
};

export default IssueCertificate;
