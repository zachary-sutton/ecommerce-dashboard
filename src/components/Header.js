import React from "react"
import Nav from "./Nav"

class Header extends React.Component{

    render(){
        return(
            <section id="header">
                <div className="header-container">
                    <img className="logo" src="https://i.ibb.co/zPtkmpK/logo.jpg" />
                    <img className="paypal" src="https://newsroom.mastercard.com/wp-content/uploads/2016/09/paypal-logo.png" />
                    <input type="text" placeholder="Search.." />
                    <h3>Account</h3>
                    <h3>Dashboard</h3>
                </div>
                <Nav />
            </section>

        )
    }
}

export default Header