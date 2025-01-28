
import styles from './Capabilities.module.css'
import CapabilityCards from './CapabilityCards'


function Capabilities() {
  return (
    <div id='capabilities' className={styles['capabilities-page']}>
        <div className={styles['capabilities-page-head']}>
            <span className={styles['capabilities-page-head-title']}>Capabilities</span>
            <span className={styles['capabilities-page-head-desc']}>Build Product Faster with Accurate Data. Manage CAD, Parts, Documents, Bill of Materials,
               Vendors, Inventories & Purchases</span>
        </div>
        <div className={styles['capabilities-page-img']}>
            
                <CapabilityCards/>
               
           
        </div>
    </div>
  )
}

export default Capabilities