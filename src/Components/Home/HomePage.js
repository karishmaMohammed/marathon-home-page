"use client";
import React, { useEffect, useRef } from "react";
import { Lenis, useLenis } from "@studio-freight/react-lenis";
import HomeTopNav from "../HomePages/HomepageTopNav/HomeTopNav";
import WorkFlow from "../HomePages/Workflow/WorkFlow";
import WhyUs from "../HomePages/WhyUs/WhyUs";
import Capabilities from "../HomePages/Capabilities/Capabilities";
import SneakPeak from "../HomePages/SneakPeak/SneakPeak";
import Subscription from "../HomePages/Subscription/Subscription";
import Security from "../HomePages/Security/Security";
import Footer from "../HomePages/Footer/Footer";
import styles from "./Home.module.css";

const HomePage = () => {
  const sectionRefs = useRef({});

  // Optimized scroll listener
  const handleScroll = () => {
    Object.keys(sectionRefs.current).forEach((sectionName) => {
      const sectionRef = sectionRefs.current[sectionName];
      if (!sectionRef) return;

      const bounding = sectionRef.getBoundingClientRect();
      if (bounding.top < window.innerHeight * 0.8 && bounding.bottom > 0) {
        sectionRef.classList.add(styles.inView); // Apply animation
      } else {
        sectionRef.classList.remove(styles.inView); // Remove animation
      }
    });
  };

  useLenis((lenis) => {
    lenis.on("scroll", () => {
      requestAnimationFrame(handleScroll); // Use requestAnimationFrame for smooth updates
    });
  });

  const sections = [
    
    { name: "whyUs", component: <WhyUs /> },
    { name: "capabilities", component: <Capabilities /> },
    { name: "sneakPeak", component: <SneakPeak /> },
    { name: "subscription", component: <Subscription /> },
    { name: "security", component: <Security /> },
    { name: "footer", component: <Footer /> },
  ];

  return (
    <Lenis root>
      <div>
        <HomeTopNav />
        <WorkFlow />
        {sections.map((section) => (
          <div
            key={section.name}
            ref={(el) => (sectionRefs.current[section.name] = el)}
            className={`${styles.scrollSection}`}
          >
            {section.component}
          </div>
        ))}
      </div>
    </Lenis>
  );
};

export default HomePage;
