import React, { Component } from 'react';
import calcoButtons from './utilities';

class Keyboard extends Component {

    componentDidMount(){
        document.addEventListener("keypress", function (e) {
            e.preventDefault();
                   let p = document.getElementById(e.key.toString())
            if(p) p.click();
            //console.log(e.key)
        });
        document.addEventListener("keyup",function(e){
            e.preventDefault();
            if(e.key==="Enter"){
                document.getElementById("=").click();
            }else if(e.key==="Backspace"){
                document.getElementById("Backspace").click();
            }else if(e.key==="Escape"){
                document.getElementById("Escape").click();
            }
        })
    }

    render() {
        const calcoFuncs = calcoButtons.calcoFuncs.map( func => {
             let p;
            
               
                if (this.props.hyp && this.props.sec) {
                    p = func[5]?func[5]:func[1];

                } else if (this.props.hyp) {

                    p = func[4] ? func[4] : func[1]
                } else if (this.props.sec) {
                    p = p = func[3] ? func[3] : func[1]

                } else {
                    p = func[1]
                }
                
            
            
            return (< button className='btn' key={func[0]} id={func[15]}
            onClick = {
                () => {
                    if (this.props.hyp && this.props.sec) {
                        this.props.handleOp(func[5]?func[5]:func[1], func[2]);

                    } else if (this.props.hyp) {
                        this.props.handleOp(func[4] ? func[4] : func[1], func[2]);

                    } else if (this.props.sec) {
                        this.props.handleOp(func[3] ? func[3] : func[1], func[2]);

                    } else {
                        this.props.handleOp(func[1], func[2]);
                    }
                }
            } > {p}
                
</button>)
                });
        const calcoNums = calcoButtons.calcoNums.map(num => {
                    return ( < button className = 'btn' key={num[0]}
                    onClick={() => {this.props.handleNum(num[1])}}
                     id={num[1]}> {
                            num[1]
                        } </button>)
                    });
        const calcoOps = calcoButtons.calcoOps.map(Op => {
                    return ( < button className = 'btn' key={Op[0]}
                    onClick={() => {this.props.handleOp(Op[1],Op[2])}} id={Op[1]}> {
                            Op[1]
                        } </button>)
                    });
                    
        const calcoEq = calcoButtons.calcoEq.map(Eq => {
                    return (< button className='btn' key={Eq[0]} onClick={ () => {
                        this.props.handleEqual(Eq[1]) } } id={Eq[1]}> {Eq[1]} </button>);
                    });
    
                    
        return (
            <div className="keyboard container">
            <div className="firstRow">
            <div className="switch">
                <button className="btn" onClick={this.props.handleDelete} id="Backspace">Del</button>

            </div>
            <div className="control">
                <button className='btn' key={Math.random()} onClick={this.props.handle2nd}> {
                    "2nd"
                } </button>
                <button className='btn' key={Math.random()} onClick={

                    this.props.handleHyp}
                > {"hyp"
                    } </button>
            </div>
            </div>
            <div className="normal-btns">
            <div className="funcs">{calcoFuncs}</div>
            <div className="nums">{calcoNums}</div>
            <div className="ops">
                    <button className="btn clear-btn" onClick={this.props.handleClear} id="Escape">AC</button>
                    {calcoOps}
                    {calcoEq}
            </div>
            </div>
            </div>
        );
    }
}
export default Keyboard;