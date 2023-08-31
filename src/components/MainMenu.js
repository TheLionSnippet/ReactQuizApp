import React, {useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import '../App.css'

export default function MainMenu() {
  const {gameState, setGameState}=useContext(QuizContext)
  return (
   <div className="Menu">
    <h3>1.Total 10 Questions</h3>
    <h3>2.Cant go back to previous question</h3>
    
    <button onClick={()=>setGameState("quiz")}>Start Quiz</button>
   </div>
  )
}
