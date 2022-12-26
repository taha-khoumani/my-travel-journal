export default function Vacatdion(props){
    return(
        <div className="vacation">
            <div className="vacation-picture-up" style={{backgroundImage:`url(../imgs/${props.imageUrl})`}}></div>
            <div className="vacation-info">
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="country">&nbsp;{props.location}&nbsp;&nbsp;</p>
                    <a rel="noreferrer" href={props.googleMapsUrl} target="_blank" className="map">View on Google Maps</a>
                </div>
                <p className="title">{props.title}</p>
                <p className="time">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
            <div className="vacation-picture-down" style={{backgroundImage:`url(../imgs/${props.imageUrl})`}}></div>
        </div>
    )
}  