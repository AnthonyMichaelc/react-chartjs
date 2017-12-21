import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props) {
    super(props);
    this.state ={
      chartData: props.chartData
    }
  }

  static defaultProps ={
    displayTitle:true,
    displayLegend: true,
    legendPosition: 'right',
    location:'City',
  }
  render() {
    return (
      <div className="chart">
      <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">React Bootstrap Chart JS</a>
        </div>

      </div>
    </nav>
    <div className="container">
      <h1>Chart Js With React</h1>
      <Pie
        data={this.state.chartData}
        options={{
          title: {
            display: this.props.displayTitle,
            text: 'Largest Cities in ' +this.props.location ,
            fontSize: 25
          },
          legend:{
            display: this.props.displayLegend,
            position: this.props.legendPosition
          }
        }}
      />
      <div className="row">
      <div className="col-md-6">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities in ' +this.props.location ,
              fontSize: 25
            },
            legend:{
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        </div>
        <div className="col-md-6">
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities in ' +this.props.location ,
              fontSize: 25
            },
            legend:{
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Chart;
