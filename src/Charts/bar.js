import React, { Component } from 'react'
import firebase from '../Firebase/firebase';
import {Bar} from 'react-chartjs-2';


class BarChart extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('analysis');
    this.state = {
        head:[],
        price:[]
        
    };
  }
  getDetails = (querySnapshot) => {
    const head = [];
    const value = [];
    this.ref.orderBy("day","desc").limit(5).get().then(snapshot =>{
        snapshot.forEach(doc =>{
            const data =doc.data()
            head.push(data.day)
            value.push(data.price)
        });
          this.setState({head:head})
          this.setState({price:value})
          // this.setState({
          //   chartData:{
          //     labels: head,
          //     datasets:[
          //       {
          //         data : value,
          //         backgroundColor:"lightgreen",
          //       }
          //     ]
          //   }
          // }) 
    });
}

  componentDidMount() {
    this.ref.onSnapshot(this.getDetails)
  }
  
  render(){
    var values= [];
    var length = this.state.head.length;
    for(var i = length-1;i>=0;i--){
        values.push(this.state.price[i]);
    }
      return(
        <div>
            <Bar
            options={{
              title: {
                display: true,
                fontSize:25,
                text: 'Milk Price(Rs)'
            },
                border:true,
                responsive: true,
                legend: {
                  display: false
               },
               scales: {
                xAxes: [{
                  gridLines: {
                      display: false
                  }
              }]
            },
            // plugins: {
            //   datalabels: {
            //     anchor: 'end',
            //     align: 'top',
            //     formatter: Math.round,
            //     font: {
            //       weight: 'bold'
            //     }
            //   }
            // }
            }}
            
            data={{
              labels: this.state.head.sort(),
              datasets:[
                {
                  data : values,
                  backgroundColor:"lightgreen",
                }
              ]
            }}
            />
        </div>
      );
    }
}
    export default BarChart;