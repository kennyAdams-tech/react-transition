import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class TransitionGrp extends Component {

  state = {
    items: []
  }

  addElement = () => {
    return this.state.items.map((item, index) => (
      <CSSTransition
       className='item'
       timeout={500}
       key={index}
       onEntered = { (node) => {
        node.classList.add('active')
       } }
      >
        <div key={index}>{item}</div>
      </CSSTransition>
      
    ))
  }

  //  name = () => {
  //   document.querySelector('.added').style.display = 'block'

  //   setTimeout(function () {
  //     document.querySelector('.added').remove()
  //   }, 200)
  // }

  generateNumber = () => {
  
    let random = Math.floor(Math.random() * 100) + 1
    let newArray = [...this.state.items, random]

    this.setState({
      items: newArray
    })


    console.log('generate')
  }

  removeNumber = () => {
    let newArray = this.state.items.slice(0, -1)

    this.setState({
      items: newArray
    })

    console.log('remove')
  }

  render() {
  return (
    <div>
      <TransitionGroup
         Component='div'
         className='list'
      >
        {this.addElement()}
      </TransitionGroup>
      
      <div className="btn">
        <div className="btn-add" onClick={this.generateNumber}>Add Element</div>
        <div className="btn-remove" onClick={this.removeNumber}>Remove Element</div>
      </div>
    </div>
  )
}
}

export default TransitionGrp