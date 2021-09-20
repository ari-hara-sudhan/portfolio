import "./list.scss"

export default function List({title,active,setSelect,id}) {
    return (
        <li className={active ? "list active":"list"} onClick={()=>setSelect(id)}>
            <h3>{title}</h3>
        </li>
    )
}
