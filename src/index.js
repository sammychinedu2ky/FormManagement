import React from "react";
import ReactDOM from "react-dom";




class Forms extends React.Component{
  constructor(props){
   super(props);
   this.state={input:''};
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    
    this.setState({input:event.target.value})
    
  }
  handleSubmit(event){
    alert('so you see it comes form the state');
    event.preventDefault()
  }
 render(){
   return (
     <>
    <label> Text: 
    <input type='text' onChange = {this.handleChange} value= {this.state.input}/>
      </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </>
   )
   
 }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Please can you fill the form </h3><br/>
     <Forms/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
