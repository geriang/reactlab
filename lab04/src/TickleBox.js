import React from 'react';
export default class TickleBox extends React.Component{

    state = {
        displayMessage: " "

    }

    display1 = ()=>{
        this.setState({
            displayMessage: "This tickles ME!!!"
        })
    }

    display2 = ()=>{
        this.setState({
            displayMessage: "Hello"
        })
    }


 

    render(){
        return(

            <div style={{border:"solid black 4px"}} onMouseEnter={this.display1} onMouseLeave={this.display2}>
                {this.state.displayMessage}

            </div>
        )
    }
}