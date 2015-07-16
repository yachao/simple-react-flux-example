import React from 'react';
import Actions from '../actions/actions';

export default class App extends React.Component {
  constructor() {
    super();
    this.changeText = this.changeText.bind(this);
    this.addText = this.addText.bind(this);
    this.state = { text: '' };
  }

  changeText(e) {
    this.setState({ text: e.target.value });
  }

  addText() {
    if (this.state.text !== '') { 
      Actions.addText(this.state.text)
      this.setState({ text: ''});
    };
  }

  render() {
    return(
      <div>
        <h1>Save texts to the store</h1>
        <p><input type="text" onChange={this.changeText} value={this.state.text}/></p>
        <p><button type="button" onClick={this.addText}>Save</button></p>
      </div>
    )
  }
}
