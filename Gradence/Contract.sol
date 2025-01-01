// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;
contract CertiApp{
    struct Certificate{
        string name;
        string course;
        string grade;
        string date;
    }

    address admin;

    mapping (uint=>Certificate) public  certificate;

    constructor (){
        admin = msg.sender;
    }

    modifier onlyAdmin(){
        require(msg.sender==admin,"unautherized access");
        _;
    }

    function issueCertificate(uint _id,string memory _name,string memory _course, string memory _grade, string memory _date) public onlyAdmin {
        certificate[_id] = Certificate(_name,_course,_grade,_date);
    }
}