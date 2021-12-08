import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Filter from './components/Filter/Filter'
import Card from './components/Card/Card'
import React, { useEffect,useState } from 'react'
import axios from 'axios'

function App() {
  const [tab,setTab]=useState([])

  useEffect(()=>{
 (function(){axios.get(`https://rickandmortyapi.com/api/character/?page=${1}`)
 .then((res)=>{
   setTab(res.data.results)
 })
 .catch((err)=>{
   console.log(err)
 })})()
  },[])
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">Rick & Morty
      <span className="text-primary">WiKi</span>
      </h1>
      <div className="container">
        <div className="row">
        <div className="col-3">
        <Filter />
        </div>
        <div className="col-8">
          <div  className="row" >
          <Card tab={tab}  /> 
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
