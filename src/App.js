import React from 'react'
import AddValue from './components/AddValue'
import BurnUpChart from './components/BurnUpChart'
import History from './components/History'
import './App.css';

const App = () => (
  <div className="container">
    <br />
    <BurnUpChart />
    <AddValue />
    <History />
  </div>
)

export default App