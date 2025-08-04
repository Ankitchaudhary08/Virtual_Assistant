import React,{useContext} from 'react'
import "./App.css"
import { datacontext } from './context/UserContext';
import va from "./assets/ai.png"
import { FaMicrophone } from "react-icons/fa6";
import speakimg from "./assets/speak.gif"
import aigif from "./assets/aiVoice.gif"
const App = () => {
    let {recognition,speaking,setSpeaking,prompt,response,setPrompt,setResponse}=useContext(datacontext)

  return (
    <div className='main'>
        <img src={va} alt="" id="shifra"></img>
        <span>i am shifra your advance virtual assistant</span>

        {!speaking?
        <button onClick={()=>{
            setPrompt("listening...")
            setSpeaking(true)
            setResponse(false)
            recognition.start()
        }} > Click Here <FaMicrophone /> </button>
        :
        <div className='response'>
          {
            !response?<img src={speakimg} alt="" id="speak"/>:
          
            <img src={aigif} alt="" id="aigif"/>}
            <p>{prompt}</p>
            
        </div>
      
      
      }
    </div>
  )
}

export default App




