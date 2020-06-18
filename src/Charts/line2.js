import React, { Component } from 'react'
import firebase from '../Firebase/firebase';
import {Line} from 'react-chartjs-2';


class LineChart2 extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('analysis');
    this.state = {
        head:[],
        snf:[],
        fat:[]
        
    };
  }
  getDetails = (querySnapshot) => {
    const head = [];
    const fat = [];
    const snf = [];
    this.ref.orderBy("day","desc").limit(5).get().then(snapshot =>{
        snapshot.forEach(doc =>{
            const data =doc.data()
            head.push(data.day)
            fat.push(data.fat)
            snf.push(data.snf)
        });
          this.setState({head:head})
          this.setState({fat:fat})
          this.setState({snf:snf})
          // this.setState({
          //   chartData:{
          //     labels: head,
          //     datasets:[
          //       {
          //         label : "FAT",
          //         data : fat,
          //         borderColor:"red",
          //         fill:false,
          //       },
          //       {
          //           label : "SNF",
          //           data : snf,
          //           borderColor:"blue",
          //         fill:false,
          //         }
          //     ]
          //   }
          // }) 
    });
}

  componentDidMount() {
    this.ref.onSnapshot(this.getDetails)
  }
  
  render(){
    var snf= [];
    var fat=[];
    var length = this.state.head.length;
    for(var i = length-1;i>=0;i--){
        fat.push(this.state.fat[i]);
        snf.push(this.state.snf[i])
    }
      return(
        <div>
            <Line 
            options={{
                responsive: true,
                chartArea: {
                  backgroundColor: 'red'
              },
                legend: {
                  position: 'bottom'
               },
               scales: {
                yAxes: [{
                    ticks: {
                        // display: false,
                        stepSize: 2
                    }
                }],
                xAxes: [{
                  gridLines: {
                      display: false
                  }
              }]
            },
            }}
            data={{
              labels: this.state.head.sort(),
                  datasets:[
                    {
                      label : "FAT",
                      data : fat,
                      borderColor:"red",
                      fill:false,
                    },
                    {
                        label : "SNF",
                        data : snf,
                        borderColor:"blue",
                      fill:false,
                      }
                  ]
            }}
            />
        </div>
      );
    }
}
    export default LineChart2;