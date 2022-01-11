import './App.css';
import { Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Bollywood from './components/Bollywood';
import Technology from './components/Technology';
import Hollywood from './components/Hollywood';
import Fitness from './components/Fitness';
import Food from './components/Food';
import axios from 'axios';


class App extends Component {

  state = {
    dataList: []
  }

  handleData = ()=>{
    axios.get("http://localhost:8080/jasonData")
    .then(response=>{
      console.log(response);
      this.setState({
        dataList: response.data
      })
    })
    .catch(error=>{
      console.log(error);
    })
  }

  componentDidMount= ()=>{
    axios.get("http://localhost:8080/jasonData")
    .then(response=>{})
    .catch(error=>{
      console.log(error);
    })
    .finally(()=>{
      this.handleData();
    })
  }


  render(){
    return (
      <>
        <Router>

          <Routes>
            <Route path="/" element={<Home data={this.state.dataList}/>}></Route>
            <Route path="/bollywood" element={<Bollywood data={this.state.dataList}/>}></Route>
            <Route path="/technology" element={<Technology data={this.state.dataList}/>}></Route>
            <Route path="/hollywood" element={<Hollywood data={this.state.dataList}/>}></Route>
            <Route path="/fitness" element={<Fitness data={this.state.dataList}/>}></Route>
            <Route path="/food" element={<Food data={this.state.dataList}/>}></Route>

          </Routes>

        </Router>
      </>
    );
  }
  
}

export default App;
