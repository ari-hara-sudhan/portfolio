import "./intro.scss"
import {init} from "ityped"
import {useEffect,useRef} from "react"


export default function Intro() {
    const text=useRef();

    useEffect(()=>{
        init(text.current,{showCursor:true,
        backDelay:1500,
        backSpeed:60,
        strings:["Developer","Designer"]});


    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgcontainer">
                    <img src="img/new.png"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey there,I'm</h2>
                    <h1>Ari hara Sudhan.ahs</h1>
                    <h3>Freelance  <span ref={text}></span></h3>
                </div>
                <a href="#portfolio"><img src="img/down.jpg" /></a>
            </div>
            
        </div>
    )
}
