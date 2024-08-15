import React, { Component } from 'react'

 class InputOutput extends Component {
    
     render() { 
         let hyp = "";
         let sec="";
         if (this.props.hyp){
               hyp = "hyp";
         }
         if (this.props.sec){
             sec = "2nd";
         }
         return ( 
             
        < div className="display-section">
        <span>{sec}</span>
        <span className="left-50">{hyp}</span> 
        < div className = "input" > 
        {this.props.input}
        
        </div>
        < div className = "output" > {this.props.output} </div>
        </div>
          );
     }
 }
  
 export default InputOutput;