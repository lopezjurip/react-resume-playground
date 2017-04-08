import React, { Component } from 'react';
import Document, { Header } from 'react-resume';
import theme from 'react-resume-theme';

class App extends Component {
  render() {
    return (
      <Document theme={theme}>
        <Header>Hola</Header>
      </Document>
    );
  }
}

export default App;
