import React, { Component } from 'react'
import './Item.css';

export default class Item extends Component {

  handlerCheck=()=>{
    console.log(111);
  }

  render() {
    const {name,done} = this.props;
    return (
      <li>
        <label>
          <input type="checkbox" checked={done} onChange={this.handlerCheck}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:"none"}}>删除</button>
      </li>
    )
  }
}
