import React from 'react'
import { Dashboard } from '../../components/Dashboard/Dashboard.jsx'
import RentDisplay from '../../components/RentDisplay/RentDisplay.jsx'

const Display = () => {
  return (
    <>
    <div className="dashboard-container">
    <Dashboard/>
    <RentDisplay/>
    </div>
    </>
  )
}

export default Display