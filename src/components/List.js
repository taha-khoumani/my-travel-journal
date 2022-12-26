import Vacation from "./Vacation.js"
export default function List(props){
    let list = props.data.map(va=> <Vacation 
        key={va.id}
        {...va}
    />)
    return(
        <div className="list">{list}</div>
    )
}