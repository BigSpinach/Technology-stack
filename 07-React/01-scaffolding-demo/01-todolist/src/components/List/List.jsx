import React, { Component } from 'react';
import Item from '../Item/Item.jsx';
import './List.css';


export default class List extends Component {
  render() {
    const {todoArr} = this.props;
    return (
      <ul className="todo-main">
          {
            todoArr.map((item)=>{ return <Item key={item.id} {...item}/>})
          }
      </ul>
    )
  }
}
