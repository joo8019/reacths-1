import { Component } from 'react';
import './classcomp.css'
class ClassComp extends Component{
    render(){
        return(
            <div className='classcompo'>
            <h1>This is created by using classcomponent</h1>
            <p>this is done by using external css</p>
            <p>This is done by using inline css</p>
            </div>    
        )
    }
}
export default ClassComp;