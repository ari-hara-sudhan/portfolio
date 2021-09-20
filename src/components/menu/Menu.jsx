import "./menu.scss"

export default function Menu({menu,setMenuopen}) {
    return (
        <div className={`menu ${menu && "active"}`}>
            <ul>
                <li onClick={()=>setMenuopen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuopen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuopen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuopen(false)}>
                    <a href="#testimonals">Testimonals</a>
                </li>
                <li onClick={()=>setMenuopen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
