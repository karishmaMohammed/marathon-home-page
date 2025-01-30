"use client";
import React,{useState} from 'react'
import styles from './Subscription.module.css'
import SubscriptionList from './SubscriptionList'

function Subscription() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
      setIsOn((prevState) => !prevState);
    };
    return (
        <div id='pricing' className={styles['subscription-page']}>
            <div className={styles['subscription-page-text']}>
                <span className={styles['subscription-page-head']}>Marathon-OS Subscription</span>
                <span className={styles['subscription-page-subhead']}>Simple Pricing, Full Access</span>
                <span className={styles['subscription-page-desc']}>At Marathon-OS, we believe in keeping things straightforward. Get all the
                    tools and features you need to manage your hardware product lifecycle
                    efficiently, with just one comprehensive plan.</span>
            </div>
            <div className={styles['subscription-page-payment']}>
                <div className={styles['subscription-page-switch']}>
                    <span>Monthly</span>
                    <div className={styles.switchContainer} onClick={toggleSwitch}>
                        <div className={`${styles.switch} ${isOn ? styles.switchOn : styles.switchOff}`}>
                            <div className={styles.switchCircle}></div>
                        </div>
                        
                    </div>
                    <span>Yearly</span>
                </div>
                <div className={styles['subscription-page-cost']}>
                <span>{isOn ? "₹15000 per user" : "₹1500 per user"}</span>
                </div>
            </div>
            <div className={styles['subscription-page-list']}>
                <SubscriptionList />
                {/* <div className={styles['subscription-page-line']}></div>
                <SubscriptionList />
                <div className={styles['subscription-page-line']}></div>
                <SubscriptionList />
                <div className={styles['subscription-page-line']}></div>
                <SubscriptionList />
                <div className={styles['subscription-page-line']}></div>
                <SubscriptionList />
                <div className={styles['subscription-page-line']}></div>
                <SubscriptionList />
                <div className={styles['subscription-page-line']}></div>
                <SubscriptionList />
                <div className={styles['subscription-page-line']}></div> */}

            </div>
        </div>
    )
}

export default Subscription