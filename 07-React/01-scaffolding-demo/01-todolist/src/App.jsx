import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import List from './components/List/List.jsx';
// import Item from './components/Item/Item.jsx';

import './App.css';





export default class App extends React.Component{

  state = {
    todoArr:[
      {id:'001',name:'吃饭饭',done:false},
      {id:'002',name:'睡觉觉',done:false},
      {id:'003',name:'打游戏',done:false},
      {id:'004',name:'等死',done:true}      
    ]
  };

  render(){
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header/>
          <List todoArr={this.state.todoArr}/>
          <Footer/>
        </div>
    </div>  
    )
  }
}
