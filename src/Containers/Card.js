function Card(props) {
    return ( 
        <div className = "bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5 v-mid" >
        <img src = {`https://robohash.org/${props.name}?size=200x200`} alt = "Robot" />
        <h2> {props.name} </h2>  
        <h4> {props.email}</h4>  
        </div>
    )
}


export default Card