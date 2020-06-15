import React, { Component } from 'react'
import firebase from '../Firebase/firebase';
import {Pie} from 'react-chartjs-2';


class PieChart extends Component {
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
            <Pie 
            options={{
                responsive: true,
                legend: {
            position:'bottom'
         },
            }}
            data={this.state.chartData}
            />
        </div>
      );
    }
}
    export default PieChart;