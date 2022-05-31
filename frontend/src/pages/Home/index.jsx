import React from 'react'
import Register from '../Register/Register'
<<<<<<< HEAD
import Display from '../Display/Display'
import { Dashboard } from '../../components/Dashboard/Dashboard'
=======
import { Dashboard } from '../../components/Dashboard/Dashboard'
import Display from '../Display/Display'
>>>>>>> f308d4a1ef5fff8635b4bb09b97fadb5cfa30929

const Home = () => {
  return (
    <>
        <div className="dashboard-container">
        <Dashboard></Dashboard>
          <Register></Register>
<<<<<<< HEAD
          <Display></Display>
          
        </div>
          {/* <Display></Display> */}
=======
          
        </div>
>>>>>>> f308d4a1ef5fff8635b4bb09b97fadb5cfa30929
        {/* <Register></Register>
        <Display></Display> */}
    </>
  )
}

export default Home