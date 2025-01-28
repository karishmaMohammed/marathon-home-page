"use client";
import React, { useEffect, useRef, useState } from "react";
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
import RequestDemo from "../HomePages/Workflow/RequestDemo";

const HomePage = () => {
  const [openDemoForm, setOpenDemoForm] = useState(false);
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState(null);
  const debounceTimeout = useRef(null); // Debounce timeout reference

  // Helper function to check if screen width is above 750px
  const isLargeScreen = () => window.innerWidth > 750;

  // Scroll to center the section for large screens only
  const scrollToCenter = (sectionName) => {
    if (!isLargeScreen()) return; // Skip if screen width is 750px or smaller

    const section = sectionRefs.current[sectionName];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Handle scroll logic for triggering animations and centering
  const handleScroll = () => {
    let newActiveSection = null;

    Object.keys(sectionRefs.current).forEach((sectionName) => {
      const sectionRef = sectionRefs.current[sectionName];
      if (!sectionRef) return;

      const bounding = sectionRef.getBoundingClientRect();
      const isInView =
        bounding.top < window.innerHeight * 0.5 &&
        bounding.bottom > window.innerHeight * 0.5;

      if (isInView) {
        newActiveSection = sectionName;
        sectionRef.classList.add(styles.inView); // Apply animation
      } else {
        sectionRef.classList.remove(styles.inView); // Remove animation
      }
    });

    // Only update activeSection and center the new section if it changes
    if (newActiveSection && newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
      scrollToCenter(newActiveSection);
    }
  };

  // Debounced scroll handler
  const debouncedHandleScroll = () => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      handleScroll();
    }, 10); // Adjust debounce delay as needed
  };

  // Lenis for smooth scrolling
  useLenis((lenis) => {
    lenis.on("scroll", () => {
      requestAnimationFrame(debouncedHandleScroll); // Smoothly detect scroll position
    });
  });

  // Trigger handleScroll on initial render
  useEffect(() => {
    handleScroll();
    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, []);

  // Sections data
  const sections = [
    { name: "whyUs", component: <WhyUs /> },
    { name: "capabilities", component: <Capabilities /> },
    { name: "sneakPeak", component: <SneakPeak /> },
    { name: "subscription", component: <Subscription /> },
    {
      name: "security",
      component: <Security openDemoForm={openDemoForm} setOpenDemoForm={setOpenDemoForm} />,
    },
    { name: "footer", component: <Footer /> },
  ];

  return (
    <>
      <div className={styles["desktop-view"]}>
        <Lenis root>
          <div>
            <HomeTopNav openDemoForm={openDemoForm} setOpenDemoForm={setOpenDemoForm} />
            <WorkFlow openDemoForm={openDemoForm} setOpenDemoForm={setOpenDemoForm} />
            {sections.map((section) => (
              <div
                key={section.name}
                ref={(el) => (sectionRefs.current[section.name] = el)}
                className={`${styles.scrollSection} ${activeSection === section.name ? styles.active : ""
                  }`}
                style={{ background: "white" }}
              >
                {section.component}
              </div>
            ))}
          </div>
        </Lenis>
      </div>
      <div className={styles["mobile-view"]}>
        <HomeTopNav openDemoForm={openDemoForm} setOpenDemoForm={setOpenDemoForm} />
        <WorkFlow openDemoForm={openDemoForm} setOpenDemoForm={setOpenDemoForm} />
        {sections.map((section) => (
          <div
            key={section.name}
          >
            {section.component}
          </div>
        ))}
      </div>

      {openDemoForm && <RequestDemo onclose={() => setOpenDemoForm(!openDemoForm)} />}
    </>
  );
};

export default HomePage;
