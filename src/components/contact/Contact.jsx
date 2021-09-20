import { useState } from "react"
import "./contact.scss"

export default function Contact() {

    const[message,setMessage]=useState()
    const[data,setData]=useState()
    const[input,setInput]=useState()

    const handle=(e)=>{
      
        e.preventDefault()

        setData(message)

        setMessage("")
        setInput("")
        setTimeout(() => {
            setData("")
        
        }, 3000);
        
      
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="img/new.png"/>

            </div>
            <div className="right">
               <div className="inside">
               <h2>Contact</h2>
                <form >
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder="Email"/>
                    <textarea value={message} onChange={e=>setMessage(e.target.value)}  placeholder="Message">

                    </textarea>
                    <button type="submit" onClick={handle} >Send</button>
            
                </form>
               </div>


            </div>
          

       
<div className="green">


    
{data && <p>Thanks for your Message {data} <span >We will Contact soon</span></p>}

</div>

         
            
           
            
        </div>
    )
}
