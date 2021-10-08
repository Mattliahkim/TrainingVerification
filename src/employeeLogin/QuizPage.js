import React, {Component} from "react";
//import "./CSS/employeeLoginStyle.css";


class QuizPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiResponse: "Hello",
      data: null}
      ;
  }

  callAPI(){

    fetch("http://localhost:5000/api/login")
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
    const response = await fetch('/api/login');
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
        <div className="Quiz">
          <form action="/api/quizAnswers1" className="QuizQ1" method="POST">
            <div>
              <h1 className="QuizQ1">Q1: Word that is similar to I.</h1>
              <input type="radio" name="Quiz1" questionNum="1" answer="A"></input>
              <label for="answer1">A.Me</label>
            </div>
            <div className="QuizQ2">
              <input type="radio" name="Quiz1" questionNum="1" value="B"></input>
              <label for="answer2">B.You</label>
            </div>
            <div className="QuizQ3">
              <input type="radio" name="Quiz1" questionNum="1" value="C"></input>
              <label for="answer3">C.They</label>
            </div>
            <div className="QuizQ4">
              <input type="radio"name="Quiz1" questionNum="1" value="D"></input>
              <label for="answer4">D.He</label>
            </div>
            
            <button type="submit">Submit</button>
          </form>
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

export default QuizPage;
