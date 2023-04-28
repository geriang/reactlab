import React from 'react';
import axios from 'axios';
export default class Lab07 extends React.Component {


    async componentDidMount() {
        const appetizerData = (await axios.get('./json/appetizer.json')).data;
        const seatingData = (await axios.get('./json/seating.json')).data;
        const smokingData = (await axios.get('./json/smoking.json')).data;

        this.setState({
            "allSeatings": seatingData,
            "allSmoking": smokingData,
            "allAppetizer": appetizerData
        })

    }

    state = {
        "firstName": "",
        "lastName": "",
        "seating": "",
        "smoking": "",
        "appetizer": [],
        "allSeatings": [],
        "allSmoking": [],
        "allAppetizer": []
    }

    updateFirstName = (event) => {
        this.setState({
            "firstName": event.target.value
        })
    }

    updateLastName = (event) => {
        this.setState({
            "lastName": event.target.value
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

        if (this.state.appetizer.includes(event.target.value)) {

            const clone = this.state.appetizer.slice()

            const indextoDelete = clone.findIndex(function (el) {
                return el === event.target.value
            })

            const modifiedClone = [...clone.slice(0, indextoDelete), ...clone.slice(indextoDelete + 1)]

            this.setState({
                "appetizer": modifiedClone
            })
        } else {

            const clone = this.state.appetizer.slice()

            const modifiedClone = [...clone, event.target.value]

            this.setState({
                "appetizer": modifiedClone
            })
        }
    }

    renderSeating() {

        let jsx = []

        if (this.state.allSeatings) {
            for (let s of this.state.allSeatings) {
                jsx.push(
                    <div>
                        <input
                            type="radio"
                            value={s.value}
                            name="seating"
                            className="form-check-input"
                            checked={this.state.seating === `${s.value}`}
                            onChange={this.updateSeating}
                        />
                        <label className="form-check-label">{s.display}</label>
                    </div>
                )
            }
        }
        return jsx
    }

    renderSmoking() {
        let jsx = []
        if (this.state.allSmoking) {
            for (let s of this.state.allSmoking) {
                jsx.push(
                    <option value={s.value}>{s.display}</option>
                )
            }
        }
        return jsx
    }

    renderAppetizer(){
        let jsx = []
        if (this.state.allAppetizer) {
            for (let s of this.state.allAppetizer) {
                jsx.push(
                    <>
                    <input type="checkbox" name="appetizer" value={s.value} onChange={this.updateAppetizer}/>
                    <label>{s.display}</label>
                    </>
                )
            }
        }
        return jsx
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Booking Form</h1>

                    <div>
                        <label>First Name:</label>
                        <input type="text" className="form-control" value={this.state.firstName} onChange={this.updateFirstName} />
                        <label>Last Name:</label>
                        <input type="text" className="form-control" value={this.state.lastName} onChange={this.updateLastName} />
                    </div>

                    <div>
                        <label>Seating:</label>
                        {this.renderSeating()}
                    </div>

                    <div>
                        <label>Appetizer:</label>
                        {this.renderAppetizer()}
                    </div>


                    <div>
                        <label>Smoking:</label>
                        <select className="form-control" value={this.state.smoking} onChange={this.updateSmoking}>
                            {this.renderSmoking()}
                        </select>
                    </div>





                    <div>
                        {this.state.firstName && this.state.lastName && this.state.appetizer && this.state.smoking ? <button onClick={this.submit}>Submit</button> : <button onClick={this.submit} disabled>Submit</button>}
                    </div>



                </div>

            </>
        )
    }


}