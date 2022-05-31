import React from 'react'
import IndividualItem from './Home Page/IndividualItem'
import SidebarRight from './Home Page/SidebarRight'

const Dashboard = () => {
  return (
    <>
      <>
        <div className='flex flex-col md:flex-row'>
                <div className=' grow '>
                    <IndividualItem/>
            </div>
            <SidebarRight/>
         </div>
    
            

        
      
    </>
    </>
  )
}

export default Dashboard
