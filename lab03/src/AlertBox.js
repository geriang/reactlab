import React from 'react'

export default class AlertBox extends React.Component{

    state = {
        message : this.props.displayMessage
    }


    render(){

        return(
            <div style={{border:"solid black 4px"}}>

                <h1>{this.state.message}</h1>


            </div>
        )
    }


}