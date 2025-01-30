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
        {/* {isLenisEnabled ? (
          <Lenis root> */}
            <div>
              <HomeTopNav openDemoForm={openDemoForm} setOpenDemoForm={setOpenDemoForm} />
              <WorkFlow openDemoForm={openDemoForm} setOpenDemoForm={setOpenDemoForm} />
              {sections.map((section) => (
                <div
                  key={section.name}
                  // ref={(el) => (sectionRefs.current[section.name] = el)}
                  // className={`${styles.scrollSection} ${activeSection === section.name ? styles.active : ""
                  //   }`}
                  style={{ background: "white" }}
                >
                  {section.component}
                </div>
              ))}
            </div>
          {/* </Lenis>
        ) : ( */}
          {/* <div>
            <HomeTopNav openDemoForm={openDemoForm} setOpenDemoForm={setOpenDemoForm} />
            <WorkFlow openDemoForm={openDemoForm} setOpenDemoForm={setOpenDemoForm} />
            {sections.map((section) => (
              <div
                key={section.name}
                ref={(el) => (sectionRefs.current[section.name] = el)}
                className={styles.scrollSection}
                style={{ background: "white" }}
              >
                {section.component}
              </div>
            ))}
          </div>
        )} */}
      </div>

      {openDemoForm && <RequestDemo onclose={() => setOpenDemoForm(!openDemoForm)} />}
    </>
  );
};

export default HomePage;
