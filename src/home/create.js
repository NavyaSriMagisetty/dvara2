import React, { Component } from 'react';
import firebase from '../Firebase/firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('analysis');
    this.state = {
        id: '',
        day:'',
        production:'',
        fat:'',
        snf:'',
        price:'',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { id,
        production,
        fat,
        snf,
        day,
        price, } = this.state;

    this.ref.add({
        id,
        production,
        fat,
        snf,
        day,
        price, 
    }).then((docRef) => {
      this.setState({
        id: '',
        day:'',
        production:'',
        fat:'',
        snf:'',
        price:'',
      });
      this.props.history.push("/home")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { id,
        production,
        fat,
        snf,
        day,
        price,  } = this.state;
    return (
      <div class="webcolor ">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title heading">
              ADD ITEM
            </h3>
          </div>
          <div class="panel-body">
          
            <form onSubmit={this.onSubmit}>
            <table align="center" cellpadding = "10">
              <div class="form-group">
                <label for="rollno">ID:</label>
                <input type="text" class="form-control" name="id" value={id} onChange={this.onChange} placeholder="ID" maxlength="30"/>
              </div>
              
              <div class="form-group">
                <label for="name">Day:</label>
                <input type="text" class="form-control" name="day" value={day} onChange={this.onChange} placeholder="Day" maxlength="30"/>
              </div>
              
              <div class="form-group">
                <label for="author">production:</label>
                <input type="text" class="form-control" name="production" value={production} onChange={this.onChange} placeholder="Year" maxlength="30" />
              </div>
              
              <div class="form-group">
                <label for="rollno">fat:</label>
                <input type="text" class="form-control" name="fat" value={fat} onChange={this.onChange} placeholder="Branch" maxlength="30"/>
              </div>

              <div class="form-group">
                <label for="rollno">SNF:</label>
                <input type="text" class="form-control" name="snf" value={snf} onChange={this.onChange} placeholder="section" maxlength="30"/>
              </div>

              <div class="form-group">
                <label for="rollno">Price:</label>
                <input type="text" class="form-control" name="price" value={price} onChange={this.onChange} placeholder="cgpa" maxlength="30"/>
              </div>

              <button className="displayButton"><Link to="/">HOME</Link></button>
              &nbsp;
              <button type="submit" class="displayButton">Submit</button>
              </table>
            </form>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Create;