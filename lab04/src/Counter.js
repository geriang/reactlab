import React from 'react';
export default class Counter extends React.Component{

    state = {
        count: 0

    };

    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    minus = () => {
        this.setState({
            count: this.state.count -1
        })
    }

    render(){
        return(
            <>

            <div style={{margin:"5px",width:"80px",height:"80px", border:"black solid 4px", textAlign:"center"}}>
                {this.state.count}
            </div>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
            
            
            
            </>
        );
    }


};