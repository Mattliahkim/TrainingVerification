import React, {Component} from "react";
//import "./CSS/employeeLoginStyle.css";


class EmployeeLoginApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiResponse: "Hello",
      data: null}
      ;
  }

  callAPI(){

    fetch("http://localhost:5000/login")
    .then((response) => {
    console.log(response.text().then(response => this.setState({apiResponse: response}),console.log("oops")));
})
     // .then(response => this.setState({apiResponse: response.text}))
      .catch(err => err);
      console.log(this.state.apiResponse);
  }

  componentDidMount(){
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/login');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  
  render(){
    console.log(this.state.apiResponse);
    if(this.state.apiResponse==="hell"){
        return(<h1>Loading</h1>);
      }
console.log(this.state.apiResponse);
      if(this.state.apiResponse==="Hello"){
        return(
        <div className="App">
          
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>

        <a href="/auth/google">Sign In with Google</a>
      </div>);
      }
  return (
      
    <div>
    This is a sample component 
  </div>
  );
}
}

export default EmployeeLoginApp;
