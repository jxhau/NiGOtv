import React from "react"

const Navbar = () => {
    return (
        <div className="ui inverted segment">
            <div className="ui inverted secondary pointing menu">
                <a className="item" href="/">
                    <h4>NiGO TV</h4>
                </a>
                <a className="active item" href="/">
                    Home
                </a>
            </div>
        </div>
    )
}

export default Navbar