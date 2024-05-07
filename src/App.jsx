import { useEffect, useState } from "react"
import DisplayBot from "./components/DisplayBot"
import NavBar from "./components/NavBar"
import YourBotArmy from "./components/YourBotArmy"
import BotCollection from "./components/BotCollection"
import SortBar from "./components/SortBar"

function App() {

  const [bots, setBots] = useState([])
  const [army, botArmy] =useState([])
  const [botClasses, setBotClasses] = useState([]);

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

  function handleDelete(id, botClass) {
    const updatedBotClasses = botClasses.filter((bCl) => bCl !== botClass);
    setBotClasses(updatedBotClasses);
    const updatedArmy = army.filter((bot) => bot.id !== id);
    setArmy(updatedArmy);
  }

  function handleDischarge(id, botClass) {
    const updatedBotClasses = botClasses.filter((bCl) => bCl !== botClass);
    setBotClasses(updatedBotClasses);
    const updatedArmy = army.filter((bot) => bot.id !== id);
    setArmy(updatedArmy);

    army.map((bot) => {
      if (bot.id === id) {
        setBots([bot, ...bots]);
      }
    });
  }


 
  
  return (

    <div className=" font-link w-screen">
    <NavBar />
    
    <div className=" container mx-auto px-4  grid grid-cols-4 gap-4 my-10">

    
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
        
       />
        ))}
        </div>
    </div>

  );
};

export default App
