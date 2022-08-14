import React, { useEffect } from 'react'
import axios from 'axios'
import {useState} from 'react'
import{useParams} from 'react-router-dom'

function BeersDetails() {
    const {id} = useParams()


    //1 estado
    const [beerDetails,setBeersDetails]=useState(null)
    const [isFetching,setIsFetching]=useState(true)
    //2useEffect
    useEffect(()=>{
        getBeerDetails()
    },[])
    //3axios
    const getBeerDetails = async ()=>{
        try{
            const reponse = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            console.log(reponse.data)
            setBeersDetails(reponse.data)
            setIsFetching(false)
        }catch(error){
            console.log(error)
        }
    }
    //4fetching
    if(isFetching===true){
        return <h2>...</h2>
    }
    const {image_url, name, tagline ,first_brewed, attenuation_level, description, contributed_by} = beerDetails
  return (
    <div>
        <img src={image_url} height={'300px'} />
        <h2>{name}</h2>
        <h4>{tagline}</h4>
        <h5>{first_brewed}</h5>
        <p>{attenuation_level}</p>
        <p>{description}</p>
        <h5>{contributed_by}</h5>

    </div>
  )
}

export default BeersDetails
