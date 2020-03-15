import React from "react"
import Alert from "./Alert"
import Invoice from "./Invoice"

class Orders extends React.Component{
    constructor(){
        super()
        this.state = {
            users: [],
            displayInvoice: false,
            invoiceDetails: {}
        }
        this.shipItem = this.shipItem.bind(this)
        this.printInvoice = this.printInvoice.bind(this)
        this.closeInvoice = this.closeInvoice.bind(this)
    }

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(request => request.json())
    .then(json => this.setState({users: json}))
}

shipItem(tableDataIndex){
    const getState = this.state.users
    //convert to template literals
    alert("item shipped to:\n" 
    + "\n" + getState[tableDataIndex].name 
    + ",\n" + getState[tableDataIndex].address.street 
    + ",\n" + getState[tableDataIndex].address.suite
    + ",\n" + getState[tableDataIndex].address.city
    + ",\n" + getState[tableDataIndex].address.zipcode
    )

    getState.splice(tableDataIndex, 1)
    this.setState({users: getState})

}

printInvoice(tableDataIndex){
    const getState = this.state.users
    this.setState({invoiceDetails: getState[tableDataIndex]})
    console.log(this.state.invoiceDetails)
    this.setState({displayInvoice: true})

}

closeInvoice(){
    this.setState({displayInvoice: false})
}

    render(){
        const { users, displayInvoice } = this.state

        const tableData = users.map((tableData, Index) => (
        <tr key={tableData.id}> 
            <td>{tableData.name}</td>
            <td>{tableData.email}</td>
            <td>{tableData.phone}</td>
            <td>{tableData.address.street}</td>
            <td>{tableData.address.suite}</td>
            <td>{tableData.address.city}</td>
            <td>{tableData.address.zipcode}</td>
            <td>
                <button onClick={() => this.shipItem(Index)}>SHIP</button>  
            </td>
            <td>
                <button onClick={() => this.printInvoice(Index)}>Print</button>
            </td>           
        </tr>))

        const ordersToShip = users.length

        const shouldDisplayInvoice = displayInvoice? 
        <Invoice 
        //destructure
        name={this.state.invoiceDetails.name} 
        email={this.state.invoiceDetails.email}
        street={this.state.invoiceDetails.address.street}
        suite={this.state.invoiceDetails.address.suite}
        city={this.state.invoiceDetails.address.city}
        zip={this.state.invoiceDetails.address.zipcode}
        phone={this.state.invoiceDetails.phone}
        username={this.state.invoiceDetails.username}
        invoiceNo={this.state.invoiceDetails.id}
        
        btnHandle={this.closeInvoice}
        /> 
        : null

        return(
        <div>
            <section id="orders">
                <Alert ordersToShip={ordersToShip} />
                    <div>
                        <table align="center">
                            <thead>
                            <tr>
                                <td>Name</td>
                                <td>EMail</td>
                                <td>Phone</td>
                                <td>Street</td>
                                <td>Suite</td>
                                <td>City</td>
                                <td>Zipcode</td>
                                <td>Delivered</td>
                                <td>Print</td>
                            </tr>
                            </thead>
                            <tbody>
                                {tableData}
                            </tbody>
                            
                        </table>
                    </div>
                </section>
                {shouldDisplayInvoice} 
            </div>
        )
    }
}

export default Orders