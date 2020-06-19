import React, { Component } from 'react'
import  './header.css'
import logo from '../images/logo.png'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
      return(
          <div  className="padd ">
            <br/>
                <img className="logo" src={logo} alt="logo here" align="left"/>
              <h2 className="headtext">Dvara E-Dairy Farm Solution</h2>
              <br/>
              <nav className="navbar navbar-default container-fluid d-flex">
                    <ul >
                        <li className="navDec"><a className="linkDec" href="/">Home</a></li>
                        <li className="navDec"><a className="linkDec" href="#">Add Cattle Details</a></li>
                        <li className="navDec"><a className="linkDec" href="#">Add Milk Production Details</a></li>
                        <li className="navDec"><a className="linkDec" href="#">Add Veterinary Details</a></li>
                        <li className="navDec"><a className="linkDec" href="#">Reports</a></li>
                        <li className="navDec"><a className="linkDec" href="/create">Add Data</a></li>

                        <li className="navDec dropdown dropdown-toggle" aria-expanded="true" style={{overflow:"visible"}}><a className="linkDec" href="#">Alarm</a>
                            <div class="dropdown-content ">
                                <a href="#">Pregnancy Check Due</a>
                                <a href="#">Dry of Due</a>
                                <a href="#">Calving Due</a>
                                <a href="#">Love Milk Yield Cows</a>
                                <a href="#">More Than 15% Drop Cows</a>
                            </div>
                        </li>
                    </ul>
               </nav>
          </div>
      )
  }
}
export default Header;