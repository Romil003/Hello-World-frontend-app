import React, {useState}from 'react'
import Header from './Header'
import DisplayBook from './DisplayBook'
import './Home.css'
import logo from './bridgelabz logo.png'

class Home extends React.Component {

    url = 'https://www.bridgelabz.com/'
    constructor() {
      super()
      this.state = {
        username : '',
        nameError: ''
      }
    }
  
    //onclick function
    onClick = ($event) => {
      console.log("save button is clicked!",$event);
      window.open(this.url,"_blank")
    }
  
    onNameChange = (event) => {
      console.log("value is ",event.target.value);
      const nameRegex = RegExp('^[A-z]{1}[a-zA-Z\\s]{2,}$');
      this.setState({username: event.target.value})
      if(nameRegex.test(event.target.value)){
        this.setState({nameError:''})
      } else {
        this.setState({nameError:'Name is Incorrect'})
      }
    }
  
    render() {
      return (
        <>
        <div className='body'>
          <h1>Hello {this.state.username} from Bridgelabz</h1>
          <img src={logo} onClick={this.onClick}
          alt="The Bridgelabz logo : a Bridge to Employment through lab works" />
          <div className='input-position'>
            <input onChange={this.onNameChange} />
            <span className='error-output'>{this.state.nameError}</span>
          </div>  
          <pre>At Bridgelabz, we're community of<ul><li>technologist</li><li>thinkers</li><li>builders</li></ul>
          Working together to keep the Tech Employability of Engineers alive and<br></br> 
          accessible ,so Tech Companies worldwide can get contributors and<br></br> 
          creators for Technology Solutions. We believe this act of human<br></br> 
          collaboration across an rmployability platform is essential to individual<br></br> 
          growth and our collective future.<br></br>
          <br></br>
          To Know about us, visit <a href="www.bridgelabz.com">BridgeLabz</a> to learn even more about our mission<br></br>
          i.e. Employability to all 
          </pre>
        </div>
        
        </>
      );
    }
}

export default Home;