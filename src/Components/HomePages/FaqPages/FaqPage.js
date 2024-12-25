"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from './FaqPage.module.css'; 
import { IMAGEURLS } from "@/config"; 
function FaqPage() {
  const array = [
    {
      question: "Do I need to tell my vendors that we're using Tola?",
      answer: "Do I need to tell my vendors that we're using Tola",
    },
    {
      question: "How do I get started with Tola?",
      answer: "Do I need to tell my vendors that we're using Tola",
    },
    {
      question: "Is our company a good fit for Tola?",
      answer: "Do I need to tell my vendors that we're using Tola",
    },
    {
      question: "What are the benefits of using Tola?",
      answer: "Do I need to tell my vendors that we're using Tola",
    },
    {
      question: "What is the cost of using Tola?",
      answer: "Do I need to tell my vendors that we're using Tola",
    },
    {
      question: "Who is behind Tola?",
      answer: "Do I need to tell my vendors that we're using Tola",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.faqpage}>
      <div className={styles["faqpage-left-container"]}>
        <span className={styles["faq-title"]}>FAQ</span>
        <span className={styles["faqpage-visit"]}>
          Visit our
          <span className={styles["faqpage-help-center"]}> help center </span>
          to get in touch.
        </span>
        <span className={styles["faqpage-visit"]}> We’re super responsive.</span>
      </div>
      <div className={styles["faqpage-right-container"]}>
        {array.map((item, index) => (
          <div
            key={index}
            className={`${styles["faqpage-questions"]} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            {/* Use Next.js Image component with appropriate height and width */}
            <Image src={IMAGEURLS.openAnswer} alt="Open Answer Icon" width={20} height={20} onClick={() => handleToggle(index)}
              className={styles["faqpage-icon"]}/>
           
            <div className={styles["faq-ques-ans"]}>
              <span className={styles["faq-answer"]}>{item.question}</span>
              {openIndex === index && (
                <span className={styles["faq-answer"]} style={{ color: "#8d8c8c" }}>
                  {item.answer}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqPage;
