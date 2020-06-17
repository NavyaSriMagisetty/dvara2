import React, { Component } from 'react'
import firebase from '../Firebase/firebase';
import { Chart } from "react-google-charts";


class PieChart2 extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('pie');
    this.state = {
        head:[],
        value:[],
        chartData:{}
        
    };
  }
  getDetails = (querySnapshot) => {
    const head = [];
    const value = [];
    this.ref.get().then(snapshot =>{
        snapshot.forEach(doc =>{
            const data =doc.data()
            head.push(data.name)
            value.push(data.data)
        });
          this.setState({
            chartData:{
              labels: head,
              datasets:[
                {
                  data : value,
                  backgroundColor:["red","green","blue","yellow"]
                }
              ]
            }
          }) 
    });
}

  componentDidMount() {
    this.ref.onSnapshot(this.getDetails)
  }
  
  render(){
      
    console.log(this.state.chartData)
      return(
        <div>
            {/* <Pie 
            options={{
                // responsive: true,
                is3D:true,
            }}
            data={this.state.chartData}
            /> */}
            <Chart
            // width={'500px'}
            // height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['InMilk', 20],
    ['Not in milk', 33],
  ]}
  options={{
    legend: {position: 'bottom'},
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
        </div>
      );
    }
}
    export default PieChart2;