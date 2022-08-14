import axios from 'axios'
import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'


function NewBeer() {


  const  navigate = useNavigate()
  //1 estado
  const [newBeer,setNewBeer]=useState({
    name:'',
    tagline:'',
    description:'',
    first_brewed:'',
    attenuation_level:0,
    contributed_by:''
  })
  //2handlechange
  const handleChange = (event) =>{
    console.log(event.target.name)
    const stateClone= {...newBeer}
    stateClone[event.target.name]=event.target.value
    setNewBeer(stateClone)

  }

  //3submit
  const handleSubmit = async (event)=>{
    event.preventDefault()
    try{
      await axios.post('https://ih-beers-api2.herokuapp.com/beers/new',newBeer)
      navigate('/beers')
    }catch(error){
      console.log(error)
    }
  }
  //4axios



  return (
    <div>
        <h3>Add new Beer</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' onChange={handleChange} value={newBeer.name}/>
            <br />
            <label htmlFor="tagline">Tagline</label>
            <input type="text" name='tagline' onChange={handleChange} value={newBeer.tagline}/>
            <br />
            <label htmlFor="description">Description</label>
            <input type="text" name='description' onChange={handleChange} value={newBeer.description}/>
            <br />
            <label htmlFor="first_brewed">First Brewed</label>
            <input type="text" name='first_brewed' onChange={handleChange} value={newBeer.first_brewed}/>
            <br />
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input type="number" name='attenuation_level' onChange={handleChange} value={newBeer.attenuation_level}/>
            <br />
            <label htmlFor="contributed_by">Contributed by</label>
            <input type="text" name='contributed_by' onChange={handleChange} value={newBeer.contributed_by}/>
            <br />
            <button>Add</button>
            


        </form>
    </div>
  )
}

export default NewBeer