import React from 'react'
import calculate from '../../containers/calculate'
import './Body.scss'

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name)
  }

  render () {
    let className = 'component-button'

    if (this.props.orange) {
      className += ' orange'
    }

    if (this.props.wide) {
      className += ' wide'
    }

    return (
      <div className={className}>
        <button onClick={this.handleClick}>
          {this.props.name}
        </button>
      </div>
    )
  }
}

Button.propTypes = {
  name: React.PropTypes.string,
  // orange: React.propTypes.bool,
  // wide: React.propTypes.bool,
  clickHandler: React.PropTypes.func
}

class ButtonPanel extends React.Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName)
  }

  render () {
    return (
      <div className='component-button-panel'>
        <div>
          <Button name='AC' clickHandler={this.handleClick} />
          <Button name='+/-' clickHandler={this.handleClick} />
          <Button name='%' clickHandler={this.handleClick} />
          <Button name='/' clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name='7' clickHandler={this.handleClick} />
          <Button name='8' clickHandler={this.handleClick} />
          <Button name='9' clickHandler={this.handleClick} />
          <Button name='*' clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name='4' clickHandler={this.handleClick} />
          <Button name='5' clickHandler={this.handleClick} />
          <Button name='6' clickHandler={this.handleClick} />
          <Button name='-' clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name='1' clickHandler={this.handleClick} />
          <Button name='2' clickHandler={this.handleClick} />
          <Button name='3' clickHandler={this.handleClick} />
          <Button name='+' clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name='0' clickHandler={this.handleClick} wide />
          <Button name='.' clickHandler={this.handleClick} />
          <Button name='=' clickHandler={this.handleClick} orange />
        </div>
      </div>
    )
  }
}

ButtonPanel.propTypes = {
  clickHandler: React.PropTypes.func
}

class Display extends React.Component {
  render () {
    return (
      <div className='component-display'>
        <div>
          {this.props.value}
        </div>
      </div>
    )
  }
}

Display.propTypes = {
  value: React.PropTypes.string
}

class Body extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      total: null,
      next: null,
      opration: null
    }
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName))
  }

  render () {
    return (
      <div className='component-app'>
        <Display value={this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}

export default Body
