import React from 'react'
import { Dashboard } from '../../components/Dashboard/Dashboard'
import RentRegister  from '../../components/RentRegister/RentRegister'

const Register = () => {
  return (
    <>
        <div className="dashboard-container">
        <Dashboard/>
        <RentRegister/>
        </div>
    </>
  )
}

export default Register