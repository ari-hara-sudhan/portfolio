import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"
export default function Topbar({menu,setMenuopen}) {
    return (
        <div className={`topbar ${menu && "active"}`}  id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">ahs.dev</a>
                    <div className="itemscontainer">
                     <Person className="icon"/>
                     <span>Need to be member to access my contact</span>
                    </div>
                    <div className="itemscontainer">
                     <Mail className="icon"/>
                     <span>irabikelover46@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div onClick={()=>setMenuopen(!menu)} className="handburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
