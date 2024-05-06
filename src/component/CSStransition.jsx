import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

class Csstransition extends Component {
    state = {
        show: true
      }
    
      showDiv = () => {
        this.setState({
          show: !this.state.show ? true : false
        }) }
    
    render(){
  return (
    <div>
       <CSSTransition>
         <h1>hello</h1>
       </CSSTransition>
         <button onClick={this.showDiv}>hide</button>
    </div>
  )
}
}

export default Csstransition