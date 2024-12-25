"use client"
import React,{useState} from 'react'
import styles from './Footer.module.css'
import Image from "next/image";
import { IMAGEURLS,BASE_URL } from "@/config";
import axios from 'axios';

function Footer() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const requestDemo = async () => {
        try {
          if(!name){
            console.log('name required')
          }
          if(!email){
            console.log('email required')
          }
          if(!message){
            console.log('message required')
          }
          // const data = selectedOption.value === "Admin" ? true : false;
        const response=  await axios.post(
            BASE_URL + "/v1/member/demo",
            { email,name,message },
            { headers: {"x-auth-token": localStorage.getItem('token')} }
          );
          if(!response.data.success){
            console.log(response.data.message)
          }else{
            
            setName('')
            setEmail('')
            setMessage('')
          }
          // console.log(response)
        } catch (error) {
          console.log(error);
        }
        // console.log(name,email,message)
      };
    return (
        <div className={styles['footer-page']}>
            <div className={styles['footer-logo']}>
                <Image
                    src={IMAGEURLS.footerLogo}
                    alt="Encryption in transit"
                    width={160}
                    height={30}
                />
                <span>Simplifying Cloud PDM & PLM</span>
            </div>
            <div className={styles['footer-navs']}>
                <span>Home</span>
                <span>Features</span>
                <span>Product</span>
                <span>Pricing</span>
                <span>Contact us</span>
                <span>Terms Of Service</span>
                <span>Privacy Policies</span>

            </div>
            <div className={styles['footer-form']}>
                <span>Ask a question</span>
                <div>
                <input placeholder='Name*' onChange={(e)=>setName(e.target.value)}/>
                <input placeholder='Email*' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <textarea placeholder='Message*' onChange={(e)=>setMessage(e.target.value)}/>
                <button onClick={requestDemo}>Submit</button>

            </div>
        </div>
    )
}

export default Footer