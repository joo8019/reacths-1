import React from 'react';
import './App.css';
import FunctionalComp from './functionalcomp.js';
import ClassComp from './classcomp.js';



class App extends React.Component{
constructor(){
  super();
  this.state={
    FunctionClick:false,
    ClassClick:false
  }
}
render(){
  return(
    <div class='box'> 
    <h1 class='heading'>Styling using Functionalcomponet and Classcomponent</h1>
    
    <button id='btn'  onClick={()=>this.setState({FunctionClick:!this.state.FunctionClick})}>styling in functional component</button>
     <button id='btn' onClick={()=>this.setState({ClassClick:!this.state.ClassClick})}>styling in class component</button>
     
     <div className='box1'>
      <div>
      {this.state.FunctionClick && <FunctionalComp/>  }
      </div>
      <div>
      {this.state.ClassClick &&  <ClassComp/> }
      </div>
     </div>

    </div>
  )
}

}
  

export default App;
