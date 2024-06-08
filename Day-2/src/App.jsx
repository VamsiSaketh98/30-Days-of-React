
import { useEffect, useState } from 'react'
import Axios from 'axios'
import Map from "./components/map"
import './App.css'

function App() {

  const [ipdetails, setipdetails] = useState([]);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();


  useEffect(() => {
    Axios.get("https://ipapi.co/json/").then((res) => {
      setipdetails(res.data);
      setLat(res.data.latitude);
      setLon(res.data.longitude);
    });
  }, [])


  return (
    <>
      <h1 className='heading'> IP Address Finder</h1>
      <div className='App'>
        <div className='left'>
          <h4>What is your ipv4 address</h4>
          <h1 id='ip'>{ipdetails.ip}</h1>
           < h4>Approximate location : </h4>

             <p>{ipdetails.city}, {ipdetails.region}, {ipdetails.name}.</p>

          <h4>Internet Service Provider (ISP): </h4>
          <p>{ipdetails.org}</p>
        </div>
        <Map lat={lat} log={lon} />
      </div>

    </>
  )
}

export default App
