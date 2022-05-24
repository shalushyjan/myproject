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
function App() {
   return (
      <>
      {/* <Home/> */}
   <Router>
    <Routes>
      <Route  path='/' element={<Home/>}>
         <Route  path='/item' element={<ItemPetition/>}></Route>
         <Route  path='/amounthistory' element={<HistoryTab/>}></Route>
         <Route path='/itemDetails' element={<Details/>}></Route>
         <Route path='/createhistory' element={<CreateHistory/>}></Route>
      </Route>
      <Route  path='/campaignForm' element={<CapmpaignForm/>}></Route>
      <Route path='/petitionreg' element={<Petitonreg/>}></Route>
      <Route path='/peti' element={<ItemPetition/>}></Route>
   </Routes>
    </Router>

      </>
   );
}

export default App;
