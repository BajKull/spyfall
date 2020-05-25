import React, { Component } from 'react'
import '../../css/MainMenu.css'
import '../../css/HelpMenu.css'
import spy from '../../icons/spy.svg'

export class MainMenu extends Component {

state = {
  help: false,
}
  

  showHelp() {
    this.setState(({help}) => ({
      help: !help
    }))
  }

  render() {
    return (
      <div className='MenuStyle'>
        {this.state.help ? 
          <div className="HelpMenu"> 
            <p> {this.props.getText("htp1")} </p>
            <p> {this.props.getText("htp2")} </p>
            <p> {this.props.getText("htp3")} </p>
            <p> {this.props.getText("htp4")} </p>
            <button className='MenuButton' onClick={this.showHelp.bind(this)}> {this.props.getText("goBack")} </button>
          </div> :
          <div className='MainMenuStyle'>
            <button className='MenuButton' onClick={this.props.btnNewGame}> {this.props.getText("newGame")} </button>
            <button className='MenuButton' onClick={() => this.props.btnChangeScreen("multiplayer")}> {this.props.getText("multiplayer")} </button>
            <button className='MenuButton' onClick={() => this.props.btnChangeScreen("options")}> {this.props.getText("options")} </button>
            <button className='MenuButton' onClick={this.showHelp.bind(this)}> {this.props.getText("howToPlay")} </button>
            <img src={spy} className='SpyIcon' alt='Spy' />
          </div>
        }
        
      </div>
    )
  }
}

export default MainMenu
