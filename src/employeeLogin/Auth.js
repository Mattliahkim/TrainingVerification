import React, {Component} from "react";
//import "./CSS/employeeLoginStyle.css";


class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiResponse: "Hello",
      data: null}
      ;
  }

  callAPI(){

    fetch("http://localhost:8000/api/employeelogin")
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
    const response = await fetch('/api/express_backend');
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
      if(this.state.apiResponse==="Hello"){
        return(
        <div className="App">
          
        <header className="App-header">
          <h1 className="App-title">Login</h1>
          <form action="/api/auth/google2" method="POST">
              <div>
          <label for = "name">Name</label>
          <input type="text" id="name" name="name" required></input>
          </div>

          <div>
          <label for = "email">Email</label>
          <input type="text" id="email" name="email" required></input>
          </div>
          
          <div>
          <label for = "password">Password</label>
          <input type="text" id="password" name="password" required></input>
          </div>
          <button type="submit">Submit</button>
          </form>
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

export default LoginPage;
