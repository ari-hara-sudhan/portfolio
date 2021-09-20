import { useState } from "react"
import "./works.scss"

export default function Works() {

    const [current,setCurrent]=useState(0)

    const data=[
        {
            id:1,
            title:"message page",
            icon:"img/hari.jpeg",
            dec:"Build by using node and firebase",
            img:"img/dis.png"
        },
        {
            id:2,
            title:"login page",
            dec:"Build by js",
            icon:"img/hari2.jpg ",
            img:"img/crm.png"
        }
    ]
    
    const handle=(way)=>{

        way==="left"?setCurrent(current >0 ? current-1 :2):setCurrent(current <data.length -1 ? current +1 :0)


    }

    return (
        <div className="works" id="works">
            <div className="slide" style={{transform: `translatex(-${current *100}vw)`}}>
              {data.map(d=>(
                   <div className="container">
                   <div className="item">
                       <div className="left">
                           <div className="leftcontainer">
                               <div className="imgcontainer">
                               <img src={d.icon}/>
                               </div>
                               <h2>{d.title}</h2>
                               <p>{d.dec}
                               </p>
                           </div>
                       </div>
                       <div className="right">
                       <img src={d.img}/>
                       </div>
                   </div>
               </div>
              ))}
            </div>
            <img className="arrow left" onClick={()=>handle("left")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/MediaWiki_Vector_skin_right_arrow.svg/768px-MediaWiki_Vector_skin_right_arrow.svg.png"/>
            <img className="arrow right" onClick={()=>handle("right")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/MediaWiki_Vector_skin_right_arrow.svg/768px-MediaWiki_Vector_skin_right_arrow.svg.png"/>
        </div>
    )
}
