import React from 'react'


import Home from "./pages/Home Page/Home"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HistoryTab from './pages/History/HistoryTab'
import Details from './pages/Capaign and Petition detail view/Details'
import CapmpaignForm from './pages/Campaign and petition Form/CampaignForm'

import Petitonreg from './pages/Campaign and petition Form/Petitionreg'
import PetitionDetails from "./pages/Capaign and Petition detail view/PetitionDetails";
import ShareButtons from "./pages/ShareButton/ShareButtons";
import Dashboard from "./pages/Dashboard";

function App() {
   return (
      <>
      {/* <Home/> */}
   <Router>
    <Routes>
      <Route  path='/' element={<Home/>}>
         <Route  path='/dashboard' element={<Dashboard/>}></Route>
         <Route  path='/history' element={<HistoryTab/>}></Route>
         <Route path='/item' element={<Details/>}></Route>
         <Route path= 'petition' element={<PetitionDetails/>}></Route>
          <Route  path='/campaignForm' element={<CapmpaignForm/>}></Route>
          <Route path='/petitionreg' element={<Petitonreg/>}></Route>

      </Route>
     
      
      <Route path='/share' element={<ShareButtons/>}></Route>
   </Routes>
    </Router>

      </>
   );
}

export default App;
