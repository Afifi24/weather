import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './app.css'
import styled from 'styled-components'
export default function App() {
  const [weather,setWeather] = useState(null)
  const [search,setSearch] = useState('')
  useEffect(()=>{
    axios.get('http://api.weatherapi.com/v1/current.json?key=fdeb5c3a993c4d238c4121716222611&q=essaouira&aqi=no')
    .then((data)=>setWeather(data.data))
    .catch((erroe)=>console.log('erorr here'))
  },[])
  const InputChange =(e)=>{
    setSearch(e.target.value)
  }
  const SubmitButton = ()=>{
    axios.get(`http://api.weatherapi.com/v1/current.json?key=fdeb5c3a993c4d238c4121716222611&q=${search}`)
    .then((newdata)=>setWeather(newdata.data))
  }

  return (
   <Hero>
     {weather && (
    <div className='app'>
   <div className="search">
   <input onChange={InputChange} type="text" name="" id="" placeholder='Enter Location' />
      <button onClick={SubmitButton}>Submit</button>
   </div>
<div className="location">
<h1>Country: {weather.location.country}</h1>
<h2>City: {weather.location.name}</h2>
<h4>Localtime: {weather.location.localtime}</h4>
</div>
<div className="temperature">
  <img src={weather.current.condition.icon} alt="" />
<h3> {weather.current.temp_c}°C</h3>
</div>
<div className="weathe">
    <div className="fell">
    <h3> {weather.current.temp_f}</h3>
    <p>Feels like</p>
    </div>
    <div className="humidity">
    <h3> {weather.current.humidity}</h3>
    <p>Humidity</p>
    </div>
    <div className="wind">
    <h3> {weather.current.wind_mph}</h3>
    <p>Winds</p>
    </div>
</div>
    </div>
    )}
   </Hero>
  )
}

// styled-components
const Hero = styled.div`
min-height: 100vh;
width: 100%;
background-image: url('../image.jpg');
background-position:center;
background-repeat:no-repeat;
background-size:cover;
.app{
  padding-top: 2rem;
 
}
.search{
  display: flex;
  align-items: center;
  justify-content: center;
 
  input{
    width: 250px;
    height: 40px;
    border:none;
    border-radius: 30px;
    padding: 0rem 2rem;
  
    
    &:focus{
      outline: none;
      border:2px solid #555;
      box-shadow: 1px 1px 10px rgba(0,0,0,0.3);
    }
  }
  button{
    border: none;
    height: 40px;
    width: 90px;
    border-radius: 20px;
    margin: 0rem 0.5rem;
    cursor: pointer;
    background-color: #076FC6;
    color: #fff;
  }
  
}
.location{
  color: #fff;
  margin-left:4rem;
  margin-top: 4rem;
  h2{
  margin: 1rem 0rem;
  }
  
}
.temperature{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
    h3{
      color: #fff;
      font-size:8rem;
    }

  }
  .weathe{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* background-color: rgba(255,255,255,0.3); */
    background-color: rgba(0,0,0,0.5);
    max-width: 700px;
    margin: auto;
    margin-top:3rem;
    height: 80px;
    color: #fff;
    h3{
      font-weight: 600;
      text-align: center;
      font-size:1.8rem;
    }
  }
`






















