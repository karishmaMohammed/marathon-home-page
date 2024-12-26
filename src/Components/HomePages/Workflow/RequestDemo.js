"use client"
import React, { useState } from 'react'
import footerStyles from '../Footer/Footer.module.css'
import styles from './WorkFlow.module.css'
import Image from "next/image";
import { BASE_URL, HEADERS, IMAGEURLS } from "@/config";
import axios from 'axios';

function RequestDemo({ onclose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const requestDemo = async () => {
    try {
      if (!name) {
        console.log('name required')
      }
      if (!email) {
        console.log('email required')
      }
      if (!message) {
        console.log('message required')
      }
      // const data = selectedOption.value === "Admin" ? true : false;
      const response = await axios.post(
        BASE_URL + "/v1/member/demo",
        { email, name, message },
        { headers: { "x-auth-token": localStorage.getItem('token') } }
      );
      if (!response.data.success) {
        console.log(response.data.message)
      } else {
        onclose()
      }
      // console.log(response)
    } catch (error) {
      console.log(error);
    }
    // console.log(name,email,message)
  };
  return (
    <div className={styles['demo-popup']}>
      <div className={styles['demo-popup-cont']}>
        <div className={styles['demo-head']}>
          <span>Request demo</span>
          {/* <span>x</span> */}
          <Image
            onClick={onclose}
            src={IMAGEURLS.closeIcon}
            alt="close"
            width={40}
            height={40}
          />
        </div>
        <div style={{ width: '100%' }} className={footerStyles['footer-form']}>
          {/* <span>Ask a question</span> */}
          <div>
            <input placeholder='Name*' onChange={(e) => setName(e.target.value)} />
            <input placeholder='Email*' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <textarea placeholder='Message*' onChange={(e) => setMessage(e.target.value)} />
          <button onClick={requestDemo}>Submit</button>

        </div>
      </div>
    </div>
  )
}

export default RequestDemo