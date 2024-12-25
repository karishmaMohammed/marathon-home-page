import React from 'react'
import { IMAGEURLS } from "@/config";
import Image from "next/image";
import styles from './CommingSoon.module.css'

function CommingSoon() {
    return (
        <div className={styles['comming-soon-page']}>
            <div className={styles['comming-soon-head']}>
                <span className={styles['comming-soon-head1']}>Coming soon</span>
                <span className={styles['comming-soon-head2']}>Enable real-time teamwork across your engineering teams. Marathon keeps everyone aligned, no matter where they are.</span>
            </div>
            <div className={styles['comming-soon-bottom']}>
                <div className={styles['comming-soon-bottom-cont']}>
                    <Image src={IMAGEURLS.feature} alt="feature" width={40} height={40} />
                    <span className={styles['comming-soon-bottom-cont-text1']}>Feature name</span>
                    <span className={styles['comming-soon-bottom-cont-text2']}>
                        Enable real-time teamwork across your engineering teams. Marathon keeps everyone aligned, no matter where they are.
                    </span>
                </div>
                <div className={styles['comming-soon-bottom-cont']}>
                    <Image src={IMAGEURLS.feature} alt="feature" width={40} height={40} />
                    <span className={styles['comming-soon-bottom-cont-text1']}>Feature name</span>
                    <span className={styles['comming-soon-bottom-cont-text2']}>
                        Enable real-time teamwork across your engineering teams. Marathon keeps everyone aligned, no matter where they are.
                    </span>
                </div>
                <div className={styles['comming-soon-bottom-cont']}>
                    <Image src={IMAGEURLS.feature} alt="feature" width={40} height={40} />
                    <span className={styles['comming-soon-bottom-cont-text1']}>Feature name</span>
                    <span className={styles['comming-soon-bottom-cont-text2']}>
                        Enable real-time teamwork across your engineering teams. Marathon keeps everyone aligned, no matter where they are.
                    </span>
                </div>
                <div className={styles['comming-soon-bottom-cont']}>
                    <Image src={IMAGEURLS.feature} alt="feature" width={40} height={40} />
                    <span className={styles['comming-soon-bottom-cont-text1']}>Feature name</span>
                    <span className={styles['comming-soon-bottom-cont-text2']}>
                        Enable real-time teamwork across your engineering teams. Marathon keeps everyone aligned, no matter where they are.
                    </span>
                </div>
                <div className={styles['comming-soon-bottom-cont']}>
                    <Image src={IMAGEURLS.feature} alt="feature" width={40} height={40} />
                    <span className={styles['comming-soon-bottom-cont-text1']}>Feature name</span>
                    <span className={styles['comming-soon-bottom-cont-text2']}>
                        Enable real-time teamwork across your engineering teams. Marathon keeps everyone aligned, no matter where they are.
                    </span>
                </div>
                <div className={styles['comming-soon-bottom-cont']}>
                    <Image src={IMAGEURLS.feature} alt="feature" width={40} height={40} />
                    <span className={styles['comming-soon-bottom-cont-text1']}>Feature name</span>
                    <span className={styles['comming-soon-bottom-cont-text2']}>
                        Enable real-time teamwork across your engineering teams. Marathon keeps everyone aligned, no matter where they are.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CommingSoon