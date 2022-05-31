import React from 'react'
import Register from '../Register/Register'
import { Dashboard } from '../../components/Dashboard/Dashboard'
import Display from '../Display/Display'

const Home = () => {
  return (
    <>
        <div className="dashboard-container">
        <Dashboard></Dashboard>
          <Register></Register>
          
        </div>
        {/* <Register></Register>
        <Display></Display> */}
    </>
  )
}

export default Home