import { Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PeopleIcon from '@mui/icons-material/People';
import DomainIcon from '@mui/icons-material/Domain';
import Admin from '../AdminSidebar/Admin';
import FileBase64 from 'react';
import NavBar from '../Navbar/NavBar';
import SimpleReactFileUpload from './FileUpload';


function InductionUploadPost() {


  const [inputs, setInputs] = useState([]);
  const [inputs1, setInputs1] = useState([]);
  const [ Enquirysubject, setEnquirysubject ] = useState()
  const [ Enquirydes, setEnquirysdes ] = useState()
  const [ Enquirydocdes, setEnquirydocdes ] = useState()
  const [ fileName, setFileName ] = useState(null)


  const fileToBase64 = (file, cb) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(null, reader.result)
    }
    reader.onerror = function (error) {
      cb(error, null)
    }
  }


  var enqdoc = function(document_path,document_desc){
    this.document_path = document_path; 
    this.document_desc=document_desc;
   
  }
  var enqdocpreview = function(document_Name,document_desc){
    this.document_Name = document_Name; 
    this.document_desc=document_desc;
   
  }
  
  const onUploadFileChange = ({ target }) => {
   
    if (target.files < 1 || !target.validity.valid) {
     
      return
    }
   
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
       
        var enqdoc1 = new enqdoc(result,Enquirydocdes);
      setInputs([...inputs, enqdoc1 ])
      setFileName(target.files[0])
      

      }
    }) 
  }
  const uploadprevciew = () => {

    var enqdocpreview1 = new enqdocpreview(fileName.name,Enquirydocdes);
      setInputs1([...inputs1, enqdocpreview1 ])

  }
 



  const enquirysubject = (event) => {
    setEnquirysubject(event.target.value)
  }
  const  enquirysdes = (event) => {
    setEnquirysdes(event.target.value)
  }
  const  descriptionChange = (event) => {
    setEnquirydocdes(event.target.value)
  }






  const handleSubmit = (event) => {
    // uploaded.forEach(Element=>{
    //   console.log(Element);
    //   var enqdoc1 = new enqdoc(Element);
    //   setInputs([...inputs, enqdoc1 ,])
    //   // console.log( "inputs",inputs);
    // });
     console.log( "inputs",inputs);
    event.preventDefault();
    console.log(Enquirysubject);
    console.log(Enquirydes);
    fetch("http://localhost:5028/Induction/V1/AInduction", {
      method: "POST",
      crossDomain: true,
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify

     
      ({
        empl_ind_id: 2,
        emid_docindex: Enquirysubject,
        emid_idty_id: Enquirydes,
        emid_document: Enquirydes,
        emid_processed_ausr_id: Enquirydes,
        emid_verified: Enquirydes,

        Resume: inputs,
        SSCCertificates: inputs,
        Intercertificates: inputs,
        BtechCertificate: inputs,
       
      }),
  })
  }

  return (
    <div>

    <div>
      <h1 color='blue'>
        Attachment File
      </h1>
    </div>
    <form onSubmit={handleSubmit}>
      <label>Imployee Id : </label>
      <input 
          type="textarea"  name="Enquirysub" 
        
           onChange={enquirysubject} />
      
      <label>emid_docindex:
        <input 
          type="textarea" 
          name="Enquirydescription" 
          
          onChange={enquirysdes}
        />
        </label>
      <label>emid_document:
        <input 
          type="textarea" 
          name="Enquirydescription" 
          
          onChange={enquirysdes}
        />
        </label>
      <label>emid_processed_ausr_id:
        <input 
          type="textarea" 
          name="Enquirydescription" 
          
          onChange={enquirysdes}
        />
        </label>
      <label>emid_verified:
        <input 
          type="textarea" 
          name="Enquirydescription" 
          
          onChange={enquirysdes}
        />
        </label>
        <br />
        <br />
        <br />
        <h2>Upload Enquiry Documents</h2>
       
        
        {/* <label>Document description:
        <input type="text" name="docdescription"onChange={descriptionChange} />
        </label> */}
<SimpleReactFileUpload/>
        {/* <input type="file" name="filetobase64" onChange={onUploadFileChange} multiple accept="text/plain,application/pdf" />
        <input type="file" name="filetobase64" onChange={onUploadFileChange} multiple accept="text/plain,application/pdf" />
        <input type="file" name="filetobase64" onChange={onUploadFileChange} multiple accept="text/plain,application/pdf" />
        <input type="file" name="filetobase64" onChange={onUploadFileChange} multiple accept="text/plain,application/pdf" /> */}
        
       
        <br />
        <button name="uploadpre"onClick={uploadprevciew} >upload</button>
        <div>
               <h2>Uploded documents</h2> 
               <table className="table-body" border="1">
               <thead>
                   <tr>
                       <th>document Name</th>
                       <th>document Desc</th>
                      
                   </tr>
               </thead>
               <tbody>
                   {
                       inputs1.map(user => (
                           <tr>
                               <td>{user.document_Name}</td>
                               <td>{user.document_desc}</td>
                           </tr>
                       ))
                   }
               </tbody>
           </table>
           </div>
        <br />
        <br />
      
        <br />
        <input type="submit" />
    </form>
    </div>
  )
}
  
 
          
         


export default InductionUploadPost
