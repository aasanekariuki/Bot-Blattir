import { useEffect, useState } from "react"
import DisplayBot from "./components/DisplayBot"

function App() {

  const [bots, setBots] = useState([])

  useEffect(() => {

   fetch('http://localhost:3000/bots', {
    method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
   })

   .then((res) => res.json())
   .then((data) => setBots(data));

  },[])

  function handleclick(id, botClass){
    if (botArmy.length >= 10) {
      alert('maximum limit reached')
    }
    else{
      if(botClass.includes(botClass)){
        alert('member from botclass already exicts');
      }
    else{
      bots.map((bot) => {
        if(bot.id === id){
          setArmy([...army, bot]);
          setBotClasses([...botClass, bot.bot_class]);
        }
        else {
          const updatedBots = bots.filter((bot) => bot.id !== id);
          setBots(updatedBots);
        }
      })
    }
    }
  }

  function handleSort(value) {
    const updatedBots = allBots.filter((bot) => {
      if (value === "All") {
        return true;
      } else {
        return bot.bot_class === value;
      }
    });
    setBots(updatedBots);
  }
 
  
  return (
    <div className=" container mx-auto px-4 columns-2">
    
      <h1 className="text-xl text-teal-800 text-center">

          BOT MARKET: {bots.length} BOTS IN STOCK

        </h1>

         
      
    
        {bots.map(bot => (
         <DisplayBot
         key={bot.id}
         name={bot.name}
         image={bot.avatar_url}
         category={bot.bot_class}
         phrase={bot.catchphrase}
         damage={bot.damage}
         health={bot.health}
         armor={bot.armor}
         botClass={bot.bot_class}
        id={bot.id}
        onBotClick={handleclick}
        onSort={handleSort} 
       />
        ))}
        </div>
    

  );
};

export default App
