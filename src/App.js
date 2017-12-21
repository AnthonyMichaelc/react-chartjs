import React, { Component } from 'react';
import Chart from './components/Chart';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Where api cals would go
    this.setState({
      chartData:{
        labels: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton'],
        datasets: [
          {
            label: 'Population',
            data: [
              1568000,
              303625,
              120443,
              98593,
              87575,
              77291
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className="App">
          <Chart chartData={this.state.chartData} location="Pennsylvania" />
          <footer className="footer navbar-inverse navbar-bottom-fixed">
            <div className="container">
              <br/>
              <p className="text-muted">React with Chart JS is fun...</p>
            </div>
          </footer>
      </div>
    );
  }
}

export default App;
