import { Component } from "react";
class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count :0
        }
    }
    incr(){
        // //this.state.count = this.state.count+1

        // this.setState({
        //     count : this.state.count +1
        // }, () => {
        //     console.log("Callback",this.state.count)
        // })
        // console.log(this.state.count)
        this.setState(prevState => ({
            count : prevState.count +1 
        }))
    }
    incrFive(){
        this.incr()
        this.incr()
        this.incr()
        this.incr()
        this.incr()
    }
    dec(){
        //this.state.count = this.state.count+1

        this.setState({
            count : this.state.count - 1
        }, () => {
            console.log("Callback",this.state.count)
        })
        console.log(this.state.count)
    }
    render(){
        return(
            <div>
                <button onClick={() => this.incrFive()}>Increment</button>
                <h1>count - {this.state.count}</h1>
                <button onClick={() => this.dec()}>Decrement</button>
            </div>
        )
    }
}
export default Counter