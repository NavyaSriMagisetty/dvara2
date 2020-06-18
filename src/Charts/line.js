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
    });
}

  componentDidMount() {
    this.ref.onSnapshot(this.getDetails)
 }
  
  render(){
    var values= [];
    var length = this.state.value.length;
    for(var i = length-1;i>=0;i--){
        values.push(this.state.value[i]);
    }
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
            data={{
              labels: this.state.head.sort(),
              datasets:[
                {
                  data : values,
                  fill:false,
                  borderColor:"green",
                }
              ]}}
            />
        </div>
      );
    }
}
    export default LineChart;