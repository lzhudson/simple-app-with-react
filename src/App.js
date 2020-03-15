import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
// const heading = <h1 className="site-heading">Hello, React</h1>
class App extends Component {
  state = {
    characters: [

    ]
  }
  removerCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    })
  }
  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }
  render() {
    return (
      <div className="container">
        <Table characterData={this.state.characters} removerCharacter={this.removerCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;