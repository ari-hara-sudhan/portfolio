import { useState,useEffect } from "react"
import List from "../list/List"
import "./portfolio.scss"

import {web,design,apps} from "../../data"

export default function Portfolio() {
    

    const[select,setSelect]=useState("web")
    const[data,setData]=useState([])

    const list =[
        {
            id:"web",
            title:"Web App",
        },
        {
            id:"design",
            title:"Design",
        },
        {
            id:"apps",
            title:"Apps",
        }

    ]


    useEffect(()=>{

        switch(select){
            case "web":
             setData(web)
             break;
             case "design":
                setData(design)
                break;
                case "apps":
                    setData(apps)
                    break;
             default:
                 setData(web)
        }
        
    },[select])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>

            <ul>
                {list.map(item=>(
                    <List title={item.title} setSelect={setSelect} active={select ===item.id} id={item.id}/>
                ))}
            </ul>

            <div className="container">
                {
                    data.map(d=>(
                        <div className="item">
                        <img src={d.img} alt="amazon"/>
                        <h3>{d.title}</h3>
                    </div>

                    ))
                }
             
               
            </div>
            
                

            
        </div>
    )
}
