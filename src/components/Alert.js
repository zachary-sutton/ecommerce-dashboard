import React from "react"

class Alert extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section id="alert">
                <div className="alert-container">
                    <h1>You currently have <u>{this.props.ordersToShip}</u> orders to dispatch</h1>
                </div>
            </section>
        )
    }
}

export default Alert