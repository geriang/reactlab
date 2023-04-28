import React from 'react';
export default class Dice extends React.Component{

    state = {
        number: 0,
        numberColour: 'black'

    }

    roll = () =>{
        this.setState({
            number: Math.floor(Math.random()* 6 + 1 )
        })

    }

    render(){
        return(
            <>
            <div style={{margin:"5px",width:"80px", height:"80px", textAlign:"center", border:"4px solid black", color:`${this.state.number === 1 ? 'red':'black' && this.state.number === 6 ? 'green':'black'}`}} onClick={this.roll}>

                {this.state.number}

            </div>
            
            </>
        )
    }
}