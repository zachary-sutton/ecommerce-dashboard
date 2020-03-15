import React from "react"

class Invoice extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        const createDate = new Date();
        const todaysDate = createDate.toLocaleDateString();

        return(
            <section id="invoice">
                <div className="button-container">
                    <h1 className="invoice-close" onClick={this.props.btnHandle}>&#10006;</h1>
                </div>
                <div className="invoice-header">
                <img className="logo" src="https://i.ibb.co/zPtkmpK/logo.jpg" />
                <div className="invoice-details">
                    <table className="details-table">
                        <tr>
                            <td>Date:</td>
                            <td>{todaysDate}</td>
                        </tr>
                        <tr>
                            <td>Invoice No:</td>
                            <td>{this.props.invoiceNo}</td>
                        </tr>
                        <tr>
                            <td>Username:</td>
                            <td>{this.props.username}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{this.props.email}</td>
                        </tr>
                    </table>
                </div>
                </div>
                <div className="billing-address">
                    <table className="billing-table">
                        <thead>
                            <tr><td>BILL TO</td></tr>
                        </thead>
                        <tbody>
                            <tr><td>{this.props.name}</td></tr>
                            <tr><td>{this.props.street}</td></tr>
                            <tr><td>{this.props.suite}</td></tr>
                            <tr><td>{this.props.city}</td></tr>
                            <tr><td>{this.props.zip}</td></tr>
                            <tr><td>{this.props.phone}</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="order-details">
                    <table className="order-details-table">
                        <thead>
                            <tr>
                                <td className="desc-align">Description</td>
                                <td className="qty-align">Quantity</td>
                                <td className="total-align">Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="desc-align"><i>item name placeholder</i></td>
                                <td className="qty-align"><i>∞</i></td>
                                <td className="total-align"><i>£∞</i></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="summary-section">
                    <table className="summary-table">
                        <thead>
                            <tr>
                                <td className="desc-align">Other Comments</td>
                                <td className="qty-align"></td>
                                <td className="total-align">Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Subtotal</td>
                                <td className="total-align"><i>£∞</i></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>VAT</td>
                                <td className="total-align"><i>£∞</i></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Total</td>
                                <td className="total-align"><i>£∞</i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    <div className="footer">
                        <p>If you have any questions about this invoice please contact 1-422-194-4926</p>
                    </div>
            </section>
        )
    }
}

export default Invoice