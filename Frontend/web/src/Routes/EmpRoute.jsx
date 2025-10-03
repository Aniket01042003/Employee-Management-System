import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home.jsx'
import Navbar from '../Component/Navbar.jsx'
import Footer from '../Component/Footer.jsx'
import EmpData from '../Component/EmpData.jsx'
import EmpList from '../Component/EmpList.jsx'
import ViewEmpData from '../Component/ViewEmpData.jsx'

const EmpRoute = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<EmpData />} />
        <Route path='/create' element={<EmpList />} />
        <Route path='/emp/:id' element={<ViewEmpData />} />
        <Route path='/*' element={<EmpData />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default EmpRoute
