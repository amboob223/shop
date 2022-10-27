import React from 'react'
import Shop from "./components/shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MerchForm from "./components/Merchform";


function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merchform" element={<MerchForm />} />


      </Routes>

    </Router>

  )
}

function Home() {
  return (<>
    <Shop />
  </>)
}


export default App