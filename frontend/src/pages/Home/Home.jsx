import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import Register from '../Register/Register'
import Display from '../Display/Display'
import RentRegister from '../../components/RentRegister/RentRegister'


import '../../styles/responsive.css'


const Home = () => {
  return (
    <>
        <RentRegister></RentRegister>
        {/* <Dashboard></Dashboard> */}
        {/* <Register></Register>
        <Display></Display> */}
    </>
  )
}

export default Home