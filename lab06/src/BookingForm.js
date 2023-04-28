import React from 'react';
export default class BookingForm extends React.Component{

    state = {
        "firstName": "",
        "lastName": "",
        "seating": "",
        "smoking": "",
        "appetizer": [],
    };

    updateFirstName = (event) => {
        this.setState({
            "firstName" : event.target.value
        })
    }

    updateLastName = (event) => {
        this.setState({
            "lastName" : event.target.value
        })
    }

    updateSeating = (event) => {
        this.setState({
            "seating": event.target.value
        })
    }

    updateSmoking = (event) => {
        this.setState({
            "smoking": event.target.value
        })
    }

    updateAppetizer = (event) => {

        if(this.state.appetizer.includes(event.target.value)){

            const clone = this.state.appetizer.slice()

            const indextoDelete = clone.findIndex(function(el){
                return el === event.target.value
            })

            const modifiedClone = [...clone.slice(0,indextoDelete),...clone.slice(indextoDelete + 1)]
            
            this.setState({
                "appetizer" : modifiedClone
            })
        }else{

            const clone = this.state.appetizer.slice()

            const modifiedClone = [...clone, event.target.value]

            this.setState({
                "appetizer" : modifiedClone
            })
        }

       

       
    }


    render(){
        return(
            <>
            <div>
            <div className="container">
                    <h1>Booking Form</h1>

                    <div>
                        <label>First Name:</label>
                        <input type="text" className="form-control" value={this.state.firstName} onChange={this.updateFirstName}/>
                        <label>Last Name:</label>
                        <input type="text" className="form-control" value={this.state.lastName} onChange={this.updateLastName}/>
                    </div>

                    <div>
                        <label>Seating:</label>
                        <input
                            type="radio"
                            value="indoors"
                            name="seating"
                            className="form-check-input"
                            checked={this.state.seating === "indoors"}
                            onChange={this.updateSeating}
                        />
                        <label className="form-check-label">Indoors</label>

                        <input
                            type="radio"
                            value="outdoors"
                            name="seating"
                            className="form-check-input"
                            checked={this.state.seating === "outdoors"}
                            onChange={this.updateSeating}
                        />
                        <label className="form-check-label">Outdoors</label>

                        <input
                            type="radio"
                            value="vip"
                            name="seating"
                            className="form-check-input"
                            checked={this.state.seating === "vip"}
                            onChange={this.updateSeating}
                        />
                        <label className="form-check-label">VIP Room</label>
                    </div>
                    <div>
                        <label>Appetizer:</label>
                        <input type="checkbox" name="appetizer" value="rawfish" onChange={this.updateAppetizer} />Raw Fish
                        <input type="checkbox" name="appetizer" value="salad" onChange={this.updateAppetizer} />Salad
                        <input type="checkbox" name="appetizer" value="friedcuttlefish" onChange={this.updateAppetizer} />Fried Cuttlefish
                        <input type="checkbox" name="appetizer" value="peanut" onChange={this.updateAppetizer} />Peanut
                    </div>


                    <div>
                        <label>Smoking:</label>
                        <select className="form-control" value={this.state.smoking} onChange={this.updateSmoking}>
                            <option value="smoking">Smoking</option>
                            <option value="non-smoking">Non-smoking</option>
                        </select>
                    </div>

                    <div>
                        {this.state.firstName && this.state.lastName && this.state.appetizer && this.state.smoking ? <button onClick={this.submit}>Submit</button> : <button onClick={this.submit} disabled>Submit</button>}
                    </div>


                </div>
            </div>
            </>
        );
    };
};