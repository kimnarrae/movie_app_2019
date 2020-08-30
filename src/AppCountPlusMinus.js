import React from 'react';
import propTypes from "prop-types";

class AppCountPlusMinus extends React.Component{
  state ={
    count:0
  }

  plus = ()=>{
    this.setState(current => ({count:current.count+1}));
  }
  minus = ()=>{
    this.setState(current => ({count:current.count-1}));
  }
  render(){
    return(
      <div>
          <h1>This Count is :{this.state.count}</h1>
          <button onClick={this.plus}>Plus</button>
          <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}


export default AppCountPlusMinus;
