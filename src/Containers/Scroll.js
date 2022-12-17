function Scroll(props) {

    return ( <div className = " {overflowY:'Scroll', height:'600px', border:'5px solid black'}" >
         { props.children } 
         </div>
    )
   
}

export default Scroll;