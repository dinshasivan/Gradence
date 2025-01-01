import React from 'react';
import logo from '../assets/online-course.png'
import ViewCertificate from '../components/ViewCertificate';

const Home = () => {
  return (
    <>
    <div className="w-2/4 m-auto">
      <div className="p-16">
        <p className="font-mono font-bold text-center text-4xl p-16">Certificate Dapp</p>
        <img src={logo} alt="Online Course" className="w-1/5 m-auto" />

       
      </div>
    </div>
    <ViewCertificate/>
    </>
  );
};

export default Home;
