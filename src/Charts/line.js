import React, { Component } from 'react'
import firebase from '../Firebase/firebase';
import {Line} from 'react-chartjs-2';


class LineChart extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('analysis');
    this.state = {
        head:[],
        value:[],
        chartData:{},
        data:[]
        
    };
  }
  getDetails = (querySnapshot) => {
    var head = [];
    var value = [];
    this.ref.orderBy("day","desc").limit(5).get().then(snapshot =>{
        snapshot.forEach(doc =>{
            const data =doc.data()
            head.push(data.day)
            value.push(data.production)
        });
          this.setState({head:head})
          this.setState({value:value})
          this.setState({
            chartData:{
              labels: this.state.head,
              datasets:[
                {
                  data : this.state.value,
                  fill:false,
                  borderColor:"green",
                }
              ]
            }
          })
          console.log("data",this.state.data)
    });
}

  componentDidMount() {
    this.ref.onSnapshot(this.getDetails)
 }
  
  render(){
      return(
        <div>
            <Line 
            options={{
                responsive: true,
                scales: {
                  // yAxes: [{
                  //     ticks: {
                  //         display: false
                  //     }
                  // }],
                  xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
              },
              legend: {
                display: false
             },
            }}
            data={this.state.chartData}
            />
        </div>
      );
    }
}
    export default LineChart;