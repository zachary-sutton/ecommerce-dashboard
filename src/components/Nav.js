import React from "react"

class Nav extends React.Component{
    render(){
        return(
            <div>
                <section id="nav">
                    <div>
                        <ul className="nav-bar">
                            <li><a>Home & Garden</a></li>
                            <li><a>Electronics</a></li>
                            <li><a>Fashion</a></li>
                            <li><a>Sports & Leisure</a></li>
                            <li><a>Health & Beauty</a></li>
                            <li><a>Toys</a></li>
                            <li><a>Home & Entertainment</a></li>
                        </ul>
                    </div>              
                </section>
            </div>

        )
    }
}

export default Nav