import React from 'react';
export default class BudgetTracker extends React.Component {

    state = {
        expenses: [
            {
                id: "1",
                item: "lunch",
                amount: "$100"
            },
            {
                id: "2",
                item: "Gift",
                amount: "$30"
            },
            {
                id: "3",
                item: "Supper",
                amount: "$50"
            }
        ],

        newItem: "",
        newAmount: "",
        editId: "",
        editItem: "",
        editAmount: "",
        editForm: false,

    }



    render() {
        if (this.state.editForm === false) {
            return (<>
                {this.renderExpenses()}
                {this.renderForm()}
            </>)

        } else {
            return (
                <>
                    {this.renderEditForm()}
                </>
            );
        }
    };


    renderExpenses() {
        return (
            <>
                <div>
                    <h3>List of Expenses</h3>
                    <ul>

                        {this.state.expenses.map((expense) => {
                            return (
                                <div key={expense.id}>
                                    <li>
                                        <h4>{expense.item}</h4>
                                        <h4>{expense.amount}</h4>
                                        <button onClick={() => { this.editingItem(expense) }}>Edit</button>
                                        <button onClick={() => { this.delete(expense) }}>Delete</button>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </>
        )
    }

    renderForm() {
        return (
            <>
                <div>
                    <h3>Form</h3>
                    <div>
                        <label>Item Name</label>
                        <input type="text" name="item" value={this.state.newItem} onChange={this.newItemName} />
                    </div>
                    <div>
                        <label>Item Amount</label>
                        <input type="text" name="amount" value={this.state.newAmount} onChange={this.newItemAmount} />
                    </div>
                    <button onClick={this.addNew}>Add Item</button>
                </div>
            </>
        )
    }

    renderEditForm() {
        return (
            <>
                <h3>Edit Expenses</h3>
                <ul>
                    <div>
                        <li>
                            <div>
                                <label>Item Name</label>
                                <input name="item" value={this.state.editItem} onChange={this.updateEditItem} />
                            </div>
                            <div>
                                <label>Item Amount</label>
                                <input name="amount" value={this.state.editAmount} onChange={this.updateEditAmount} />
                            </div>

                            <button onClick={this.update}>Confirm</button>
                            <button onClick={() => { this.setState({ editForm: false }) }}>Cancel</button>
                        </li>
                    </div>
                </ul>
            </>
        )
    }

    newItemName = (event) => {
        this.setState({
            "newItem": event.target.value
        })
    }

    newItemAmount = (event) => {
        this.setState({
            "newAmount": event.target.value
        })
    }

    addNew = () => {
        const clone = this.state.expenses.slice()

        const newItem = {
            "id": Math.floor(Math.random() * 100),
            "item": this.state.newItem,
            "amount": this.state.newAmount
        }

        const modifiedClone = [...clone, newItem]

        this.setState({
            expenses: modifiedClone,
            newItem: "",
            newAmount: ""
        })
    }

    editingItem = (expense) => {

        this.setState({
            editForm: true,
            editItem: expense.item,
            editAmount: expense.amount,
            editId: expense.id
        })

    }

    updateEditItem = (event) => {
        this.setState({
            editItem: event.target.value
        })
    }

    updateEditAmount = (event) => {
        this.setState({
            editAmount: event.target.value
        })
    }

    update = () => {
        const clone = this.state.expenses.slice()

        const itemToUpdate = {
            id: this.state.editId,
            item: this.state.editItem,
            amount: this.state.editAmount,
        }

        const indexToModifiy = clone.findIndex((expense) => {
            return expense.id === this.state.editId
        })

        const modifiedClone = [...clone.slice(0, indexToModifiy), itemToUpdate, ...clone.slice(indexToModifiy + 1)]

        this.setState({
            expenses: modifiedClone,
            editForm: false
        })
    }

    delete = (expense) => {
        const clone = this.state.expenses.slice()
        const indexToDelete = clone.findIndex((cloneExpense) => {
            return cloneExpense.id === expense.id
        })

        const modifiedClone = [...clone.slice(0, indexToDelete), ...clone.slice(indexToDelete + 1)]

        this.setState({
            expenses: modifiedClone
        })

    }
}