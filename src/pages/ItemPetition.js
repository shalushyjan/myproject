import React from 'react'
import IndividualItem from '../Components/IndividualItem'
import SidebarRight from '../Components/SidebarRight'

const ItemPetition = () => {
  return (
      <>
        <div className='flex flex-col md:flex-row'>
                <div className=' grow '>
                    <IndividualItem/>
            </div>
            <SidebarRight/>
         </div>
    
            

        
      
    </>
  )
}

export default ItemPetition
