import React from 'react'
import Header from '../Components/Header'
import AboutUsHeader from '../Components/AboutUsHeader'
import SidebarLeft from '../Components/SidebarLeft'
import { Outlet } from 'react-router-dom'

import './homepage.css'



const Dashboard = () => {
  return (

        <>
       
         <Header />
         <SidebarLeft/>
        
         <div className='flex flex-col md:flex-row'>
            <div className='w-48 hidden lg:block shrink-0' />
            <div className=' grow '>
               <AboutUsHeader />
                <Outlet />
            </div>
         </div>
       
      </>
   
  )
}

export default Dashboard
