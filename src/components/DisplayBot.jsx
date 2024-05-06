import React, { useEffect, useState } from 'react'

function DisplayBot() {

  const [allBots, setAllBots] = useState([])


  useEffect(() => {
  useEffect('http://localhost:3000/bots', {
    method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
  })
  .then((res) => res.json())

  .then((data) => {
    setBots(data.record.bots);
    setAllBots(data.record.bots)
  });

  },[])
  





































  return (
    <div class="flex justify-center p-5">
    
    <h1 className='font-bold text-5xl'>BOT MART 🤖</h1>

    

    </div>
    
  )
}

export default DisplayBot