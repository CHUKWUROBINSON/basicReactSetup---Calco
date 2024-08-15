import React, { Component } from 'react';
import InputOutput from './InputOutput';
import Keyboard from './Keyboard';
import calc from './calcLogic';
// import cln from "./calcoLogic/cleanSyntax";
// import j from "./calcoLogic/join";
// import pp from "./calcoLogic/pointHandler";


class Calco extends Component {
    
    state = {
        justPressedEqual:false,
        shift:false,
        hyp:false,
        input:[],
        output:[]
    }
    handleClear = () => {
       // console.log("I have cleared", this.state.input);
       this.setState({
           input:[],
           output:[],
           hyp:false,
           shift:false
       }) 
    }
    handleNum = (num) => {

        if(this.state.justPressedEqual){
            this.setState({
                justPressedEqual: false,
                input:[num],
                hyp:false,
                shift:false
            });

        }else{
             this.setState({
                 input: [...this.state.input, num],
                hyp: false,
                shift: false
            });
        }
        // console.log(this.state)
    }
    handle2nd = () => {
        this.setState({shift:!this.state.shift});
    }
    handleHyp = () => {
        this.setState({
            hyp: !this.state.hyp
        })
    }
    handleOp = (op,type) => {
        if(this.state.justPressedEqual){
            let j = this.state.output;
           if(type === "Uop"){
               this.setState({
                justPressedEqual: false,
                input:j.length !== 0 ? [op, j.toString()] :[op],
                hyp: false,
                shift: false
            });
            }else{
                this.setState({
                    justPressedEqual: false,
                    input:j.length!==0? [j.toString(), op]:[op],
                    hyp: false,
                    shift: false
                });
            }

        }else{
            let temp = [...this.state.input, op];
            this.setState({
                input: temp,
                hyp: false,
                shift: false
            });
        }
            
        
    }
    handleEqual = () => {

         this.setState({
            justPressedEqual: true,
            output: calc(this.state.input),
            hyp: false,
            shift: false
        });
        //console.log(calc(this.state.input), j(pp(this.state.input)), this.state.input)
         

    }
    handleDelete = () => {
        let p = [...this.state.input];
        p.pop();
        this.setState({
            input:p,
            hyp: false,
            shift: false,
            justPressedEqual:false
        });
    }
    render() { 
        return ( 
            < div className = "calco container" >
                < InputOutput input={this.state.input} output={this.state.output} sec={this.state.shift} hyp={this.state.hyp}/>

                < Keyboard handleNum={this.handleNum} handleEqual={this.handleEqual}  handleDelete={this.handleDelete} handleOp={this.handleOp} hyp={this.state.hyp} sec={this.state.shift} handle2nd={this.handle2nd} handleHyp={this.handleHyp} handleClear={this.handleClear}/ >
            </div>
            
         );
    }
   
}
 
export default Calco;