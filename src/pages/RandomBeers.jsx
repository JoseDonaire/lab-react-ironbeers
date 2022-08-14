import axios from 'axios'
import  { useEffect } from 'react'
import {useState} from 'react'

function RandomBeers() {
  //1 estado
  const [randomBeers,setRandomBeers] = useState({
    name:'',
    tagline:'',
    description:'',
    first_brewed:'',
    attenuation_level:0,
    contributed_by:''
  })
  const [isFetching, setIsFetching]=useState(true)
  //2 useEffect
  useEffect(()=>{
    getRandomBeer()  
  },[])
  //3 axios
  const getRandomBeer = async ()=>{
  try{
    const reponse = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    console.log(reponse.data)
    setRandomBeers(reponse.data)  
    setIsFetching(false)
  }catch(error){
    console.log(error)
  }
  } 
  //4 fetching
  if(isFetching === true){
    return <h2> ...</h2>
  }
  const {image_url, name, tagline ,first_brewed, attenuation_level, description, contributed_by} = randomBeers
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

export default RandomBeers