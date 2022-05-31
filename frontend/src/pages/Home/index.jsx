import React from 'react'
import Register from '../Register/Register'
import Display from '../Display/Display'
import { Dashboard } from '../../components/Dashboard/Dashboard'

const Home = () => {
  return (
    <>
        <div className="dashboard-container">
        <Dashboard></Dashboard>
          <Register></Register>
          <Display></Display>
        </div>

        {/* <Register></Register>
        <Display></Display> */}
    </>
  )
}

export default Home