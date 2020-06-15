import React, { Component } from 'react';
import './home.css';
import LineChart from '../Charts/line';
import LineChart2 from '../Charts/line2';
import BarChart from '../Charts/bar';
import PieChart from '../Charts/pie';
import PieChart2 from '../Charts/pie2'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mp: [50, 100],
      price: [25, 50]
    };
  }
  render() {
    // const mp=this.state.mp
    return (
      <div className="container-fluid bodyDec">
        <br />
        <br />
        <div className=" container d-flex ">
          <div class="card col-md-6 classWithPad">
            <div class="card-header text-white titleColor">
              Milk Production Overview
            </div>
            <div class="card-body">
              <LineChart />
            </div>
          </div>
          <div class="card col-md-6">
            <div class="card-header text-white titleColor">
              Total No.of Cows
            </div>
            <div class="card-body">
              <PieChart />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container d-flex ">
          <div class="card col-md-6 classWithPad">
            <div class="card-header text-white titleColor">
              FAT and SNF Overview
            </div>
            <div class="card-body">
              <LineChart2 />
            </div>
          </div>
          <div class="card col-md-6">
            <div class="card-header text-white titleColor">
              Milking Cows Distribution
            </div>
            <div class="card-body">
              <PieChart2 />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="container  d-flex">
          <div class="col-md-6 classWithPad">
            <div className="card">
              <div class="card-header text-white titleColor">
                Milk Price Overview
            </div>
              <div class="card-body">
                <BarChart />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div className="card smallblock">
              <div class="card-header text-white titleColor">
                Conception Percentage
            </div>
              <div class="card-body text">
              <p style={{color:"black", lineHeight:"0px"}}>Pregnant Heifers 20%</p>
              <br />
              <p style={{color:"black", lineHeight:"0px"}}>Pregnant Cows 30%</p>
            </div>
            </div>
            <div className="card smallblock">
              <div class="card-header text-white titleColor">
                Milk Production(Liters)
            </div>
              <div class="card-body text">
                <p style={{color:"yellow", lineHeight:"0px"}}>Yesterday {this.state.mp[0]} </p>
                <br />
                <p style={{color:"green", lineHeight:"0px"}}>Today {this.state.mp[1]}</p>
                <br />
                <p style={{color:"red", lineHeight:"0px"}}>Deviation  &nbsp;
              {this.state.mp[0] > this.state.mp[1] ? (
                  this.state.mp[0] - this.state.mp[1]
                ) : (
                    this.state.mp[1] - this.state.mp[0]
                  )}
                  </p>
              </div>
            </div>
            <div className="card smallblock">
              <div class="card-header text-white titleColor">
                Milk Production(Liters)
            </div>
              <div class="card-body text">
              <p style={{color:"yellow", lineHeight:"0px"}}>Yesterday {this.state.price[0]}</p>
                <br />
                <p style={{color:"green", lineHeight:"0px"}}>Today {this.state.price[1]}</p>
                <br />
                <p style={{color:"red", lineHeight:"0px"}}>Deviation  &nbsp;
              {this.state.price[0] > this.state.price[1] ? (
                  this.state.price[0] - this.state.price[1]
                ) : (
                    this.state.price[1] - this.state.price[0]
                  )}
                  </p>
              </div>
            </div>
           
          </div>
        </div>
        <br /><br />
      </div>


    );
  }
}
export default Home;