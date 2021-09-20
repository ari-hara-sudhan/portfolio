import "./testimonials.scss"


export default function Testimonals() {
    const data=[
        {
            id:2,
            dec:"Im Sudhan and im doing some full stack stuff as well learning hacking",
            title:"Full Stack Developer",
            name:"Ari Hara Sudhan ~ ahs",
            icon:"http://localhost:3000/img/amazon6.png",
            img:"img/hari2.jpg",
            img2:"https://www.bing.com/th?id=OIP.sBEMc0A9CIBQ7wuyeLWXDQHaHa&w=125&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
            img3:"https://www.bing.com/th?id=OIP.zGXApa1gOIyuWud7-Q6JKwHaHa&w=126&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
        }
    ]
    return (
        <div className="testimonals" id="testimonials">
            <h1>Testimonals</h1>
            <div className="container">
                {data.map(d=>(
                         <div className="card">
                         <div className="top">
                             <a href="https://www.instagram.com"> <img className="left" src={d.img2}/></a>
                            
                             <img className="user" src={d.img}/>
                             <a href="https://www.facebook.com/profile.php?id=100072596629446">
                             <img  className="right" src={d.img3}/>
                             </a>
                             
                         </div>
                         <div className="center">
                             {d.dec}
                         </div>
                         <div className="bottom">
                             <h3>{d.name}</h3>
                             <h4>{d.title}</h4>
                         </div>
                     </div>

                ))}
           
            </div>
            
        </div>
    )
}
