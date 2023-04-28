import React from 'react';
export default class Form extends React.Component {

    state = {
        "firstName": "",
        "lastName": "",
        "enquiry": "",
        "country": "",
        "method": [],

    };

    updateFirstName = (event) => {
        this.setState({
            "firstName": event.target.value
        });
    };

    updateLastName = (event) => {
        this.setState({
            "lastName": event.target.value
        });
    };

    updateEnquiry = (event) => {
        this.setState({
            "enquiry": event.target.value
        });
    };

    updateMethod = (event) => {
        if (this.state.method.includes(event.target.value)) {
          let clone = this.state.method.slice()

          const indexToDelete = this.state.method.findIndex(function(el){
            return el === event.target.value
          })

          let modifiedClone = [...clone.slice(0,indexToDelete), ...clone.slice(indexToDelete + 1)]

          this.setState({
            "method" : modifiedClone

          })
        }else{
            let clone = this.state.method.slice()

            let modifiedClone = [...clone, event.target.value]

            this.setState({
                "method" : modifiedClone
            })

        }


    };


    updateCountry = (event) => {
        this.setState({
            "country": event.target.value
        })
    };

    submit = () => {
        alert("Sumbitted Successfully")
    };


    render() {
        return (
            <>
                <div className="container">
                    <h1>Contact US</h1>

                    <div>
                        <label>First Name:</label>
                        <input type="text" className="form-control" value={this.state.firstName} onChange={this.updateFirstName} />
                        <label>Last Name:</label>
                        <input type="text" className="form-control" value={this.state.lastName} onChange={this.updateLastName} />
                    </div>

                    <div>
                        <label>Type of Enquiry</label>
                        <input
                            type="radio"
                            value="support"
                            name="enquiry"
                            className="form-check-input"
                            checked={this.state.enquiry === "support"}
                            onChange={this.updateEnquiry}
                        />
                        <label className="form-check-label">Support</label>

                        <input
                            type="radio"
                            value="sales"
                            name="enquirty"
                            className="form-check-input"
                            checked={this.state.enquiry === "sales"}
                            onChange={this.updateEnquiry}
                        />
                        <label className="form-check-label">Sales</label>

                        <input
                            type="radio"
                            value="marketing"
                            name="enquiry"
                            className="form-check-input"
                            checked={this.state.enquiry === "marketing"}
                            onChange={this.updateEnquiry}
                        />
                        <label className="form-check-label">Marketing</label>
                    </div>
                    <div>
                        <label>Preferred Mode of Contact:</label>
                        <input type="checkbox" name="method" value="email" onChange={this.updateMethod} />E-mail
                        <input type="checkbox" name="method" value="mobile" onChange={this.updateMethod} />Mobile
                        <input type="checkbox" name="method" value="slowmail" onChange={this.updateMethod} />Slow Mail
                    </div>


                    <div>
                        <label>Country:</label>
                        <select className="form-control" value={this.state.country} onChange={this.updateCountry}>
                            <option value="sg">Singapore </option>
                            <option value="my">Malaysia</option>
                            <option value="th">Thailand</option>

                        </select>
                    </div>

                    <div>
                        {this.state.firstName && this.state.lastName && this.state.enquiry && this.state.country ? <button onClick={this.submit}>Submit</button> : <button onClick={this.submit} disabled>Submit</button>}
                    </div>


                </div>

            </>
        );
    }

}
