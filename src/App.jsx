
import styles from './style'

import { Navbar } from './components'

const App = () => {
  return (
    <div className='w-full overflow-hidden bg-black'>

     <div className={`${styles.paddingX} ${styles.flexStart} `}>
     <div className={`${styles.boxWidth}`}>
     <Navbar/>
     </div>
     </div>

     <div className={`bg-inherit ${styles.flexStart}`}>
    <div className={`bg-inherit ${styles.boxWidth}`}>
      hero
    </div>
     </div>

    </div>
   
  )
}
  


export default App


