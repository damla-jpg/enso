import React from 'react'

const Navbar = (props) => {
    return (
        <div className="navbar fixed-top" role="navigation">
            <section className='company'>
                <img rel = "icon" alt = "company logo" width = "50px" height = "auto" src="enso.png"></img>
                <span className="company-name">Enso</span>
            </section>
            <section className="nav-buttons">
                <button className = "nav-button" onClick={() => { props.click1() }}>HOW IT WORKS</button>
                <button className="nav-button" onClick={() => { props.click1() }}>ABOUT THE APP</button>
            </section>
        </div>
    )
}

export default Navbar
