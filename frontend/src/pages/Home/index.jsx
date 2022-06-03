import React from 'react'
import Register  from '../Register'
import Display from '../Display'
import { Dashboard } from '../../components/Dashboard/Dashboard'

const Home = () => {
  return (
    <>
        <div className="dashboard-container">
          <Dashboard/>
        </div>
    </>
  )
}

export default Home