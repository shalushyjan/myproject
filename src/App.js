import Header from "./Components/Header";
import AboutUsHeader from "./Components/AboutUsHeader";
import IndividualItem from "./Components/IndividualItem";
import SidebarLeft from "./Components/SidebarLeft";
import React from 'react'
import Home from "./pages/Home"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HistoryTab from './pages/HistoryTab'
import Details from './Components/Details'
import CapmpaignForm from './pages/CampaignForm'
import CreateHistory from './pages/CreateHistory'
import Petitonreg from './pages/Petitionreg'
import ItemPetition from "./pages/ItemPetition";
import PetitionDetails from "./pages/PetitionDetails";

function App() {
   return (
      <>
      {/* <Home/> */}
   <Router>
    <Routes>
      <Route  path='/' element={<Home/>}>
         <Route  path='/dashboard' element={<ItemPetition/>}></Route>
         <Route  path='' element={<HistoryTab/>}></Route>
         <Route path='/item' element={<Details/>}></Route>
         <Route path='/history' element={<CreateHistory/>}></Route>
         <Route path= 'petition' element={<PetitionDetails/>}></Route>
          <Route  path='/campaignForm' element={<CapmpaignForm/>}></Route>
          <Route path='/petitionreg' element={<Petitonreg/>}></Route>

      </Route>
     
      
      {/* <Route path='/peti' element={<ItemPetition/>}></Route> */}
   </Routes>
    </Router>

      </>
   );
}

export default App;
