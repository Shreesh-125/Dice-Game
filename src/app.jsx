import { useState } from 'preact/hooks'

import StartPage from './Components/StartPage'
import GamePlay from './Components/GamePlay';


export function App() {
  const [isgamestarted,setIsGameStarted]=useState(false);

  function toogleisgamestart(){
    setIsGameStarted((prev)=>!prev);
  }

  return (
    <>
      
       {
        isgamestarted ? <GamePlay/> : <StartPage toggle={toogleisgamestart}/>
        }
      

    </>
  )
}
