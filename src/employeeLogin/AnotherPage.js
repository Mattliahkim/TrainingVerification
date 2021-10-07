import React, { useEffect,useState } from 'react'

export default function AnotherPager() {
  const [data, setSong] = useState([])
  const [me, setArtist] = useState([])
  
  const songHandler = () => {
    setSong(['The Chain']) 
    setArtist(['Fleetwood Mac'])
  }
  useEffect(() => {
    fetch("http://localhost:5000/another")
     .then(resp => resp.json())
     .then(meme => this.setSong(meme)
     )
    }) //, [selectedSong]

    console.log(data)
    return <div>
      <p>Hello</p>
      <p className="App-intro">{data}</p>
  </div>
  
}
