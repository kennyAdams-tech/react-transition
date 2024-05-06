import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
class TransitionComp extends Component {

  state = {
    show: true
  }

  showDiv = () => {
    this.setState({
      show: !this.state.show ? true : false
    })

    const btn = document.querySelector('button')

    if (this.state.show === true) {
      btn.innerText = 'show'
    } else {
      btn.innerText = 'hide'
    }
  }

  render() {
  return (
    <div>

     {/* { this.state.show ? <div style={{
        background: 'red',
        height: '100px'
      }}>
      </div>
      : null
      } */}
      <Transition
        in={this.state.show}
        timeout={2000}
        // mountOnEnter
        // unmountOnExit
      >
       { state => 
          // <div style={{
          //   background: 'red',
          //   height: '100px',
          //   transition: 'all 2s ease',
          //   opacity: state === 'exiting' || state === 'exited' ? 0 : 1
          // }}>
          //   {state}
          // </div>
          <div className={`square square-${state}`}>{`square square-${state}`}</div>
       }
      </Transition>

      <button onClick={this.showDiv}>hide</button>
    </div>
  )
}
}

export default TransitionComp