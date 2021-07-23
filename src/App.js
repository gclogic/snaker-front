import React, { Component } from 'react';
import './App.css';
import request from 'superagent';

import Navbar from './components/Navbar';
import Card from './components/Card';


class App extends Component {

  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    request.get('http://localhost:8080/api/v1/products')
      .end((err, res) => {
        var response = JSON.parse(res.text);
        this.setState({
          items: response
        });
      });



  }
  render() {
    var cards = this.state.items.map((product, i) => {
      return (
        <Card id={i} title={product.title} imageUrl={product.imageUrl} description={product.description} />
      )
    });
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row pb-5">
            {cards}
          </div>
        </div>
      </div>
    );
  }

}






export default App;
