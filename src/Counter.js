import React, { Component } from 'react'
import Timer from './Timer'
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            start: false
        }
        
    }
    componentDidMount(){
        setInterval(() => this.state.start ? this.setState({
            time: this.state.time + 1000
        }) : clearInterval(this.state.time), 1000)
    }
    
     Start = () =>{
     this.setState({start: !this.state.start})        
    }
    Reset = () =>{
        this.setState({
            time: 0,
            start: false
        })
    }
    render() {
      
        var hours = this.state.time / (1000 * 60 * 60);
    var absoluteHours = Math.floor(hours);
    var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;
    var minutes = (hours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(minutes);
    var m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;
    var seconds = (minutes - absoluteMinutes) * 60;
    var absoluteSeconds = Math.floor(seconds);
    var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;


        return (
            
            <div>
                 <h1>{h} : {m} : {s}</h1>
                <button onClick={this.Start}> {this.state.start ? 'Pause' : 'Start'} </button>
                <button onClick={this.Reset}> Reset </button>

            </div>)

    }


}
export default Counter