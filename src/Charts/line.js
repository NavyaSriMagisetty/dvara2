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
        chartData:{}
        
    };
  }
  getDetails = (querySnapshot) => {
    const head = [];
    const value = [];

    this.ref.orderBy("day").get().then(snapshot =>{
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
    });
}
// compare = (a,b) =>{
//   const x = a.split(' ');
//   const d1 = new Date(x[1],x[0]);
//   const y=b.split(' ');
//   const d2 = new Date(x[1],x[0]);
//   return d2-d1;
// }

  componentDidMount() {
    this.ref.onSnapshot(this.getDetails)
  //   const dates = [...new Set(this.state.chartData.map(x => x.labels))].sort(this.compare);
   }
  
  render(){
    console.log(this.state.chartData)
      return(
        <div>
            <Line 
            options={{
                responsive: true,
                scales: {
                  yAxes: [{
                      ticks: {
                          display: false
                      }
                  }],
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