// import logo from './logo.svg';
import './App.css';
import Cardlist from '../Containers/Cardlist';
import Scroll from '../Containers/Scroll';
import Searchbox from '../Containers/Searchbox';
import React, { Component } from 'react';



class App extends Component{
constructor(){
  super()
  this.state = {
    robots:[],
    searchField:' '
  }

}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then
  (response=>{return response.json();}).then
  (users => {
    this.setState({ robots: users})
  })
}

onSearchChange =(e)=>{
  this.setState({searchField:e.target.value})
}


render() {
  const filteredRobots = this.state.robots.filter(robots=>{
    return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
  })

  if(this.state.robots.length===0){
    return <h1> Loading up, Kindly be patient</h1>

  }else {
    return (
      <div className='tc'>
        <h1 className='f1'> Robot Friends</h1>
        <Searchbox searchChange= {this.onSearchChange}/>
        <Scroll>
        <Cardlist robots={filteredRobots}/>
        </Scroll>
      </div>
    )
  }
}


}
export default App;
