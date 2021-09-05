import React, { Component } from "react";
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends  Component{
  render() {
    const pops = this.props
    return (
      <React.Fragment>
        <div>value: { pops.value } </div>
        <button onClick={pops.increment}>+1</button>
        <button onClick={pops.decrement}>-1</button>
      </React.Fragment>
    )
 }
}
const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({ 
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
