import axios from 'axios'
import React, { useEffect } from 'react'
import {useState} from 'react'
import {Link } from 'react-router-dom'

function Beers() {
  //1 crear un estado donde almacenaremos la info
  const [listOfBeers,setListOfBeers]= useState([])
  const [isFetching,setIsFetching]= useState(true)
  //2 hacemos uso del  useEffect
  useEffect(()=>{
    getListOfBeers()
  },[])
  //3 llamamos axios
  const getListOfBeers = async ()=>{
    try{
      const reponse = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
      console.log(reponse.data)
      setListOfBeers(reponse.data)
      setIsFetching(false)
    }catch (error){
      console.log(error)
    }

  }
  //4 clausula espera
  if(isFetching ===true){
    return <h2>...</h2>
  }
  return (
    <div>
    {listOfBeers.map((eachBeer)=>{
      return <div key={eachBeer._id}>
      <img src={eachBeer.image_url} height={'100px'} />
      <h2><Link to={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link></h2>
      <h3>{eachBeer.tagline}</h3>
      <h5>Created by: {eachBeer.contributed_by}</h5>
      </div>
    })}  
    
    </div>
  )
}

export default Beers
