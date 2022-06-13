import React from 'react'
import { Dashboard } from '../../components/Dashboard/Dashboard'
import HomeDisplay from '../../components/HomeDisplay/HomeDisplay'

const Home = () => {
  return (
    <>
        <div className="dashboard-container">
          <Dashboard/>
          <HomeDisplay/>
        </div>
    </>
  )
}

export default Home