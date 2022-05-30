import React from 'react'

const Navbar = (props) => {
    return (
        <div className="navbar fixed-top" role="navigation">
            <section className='company' onClick={() => { props.click1() }}>
                <img rel = "icon" alt = "company logo" width = "50px" height = "auto" src="enso.png" ></img>
                <span className="company-name">Ensō</span>
            </section>
            <section className="nav-buttons">
                <button className = "nav-button" onClick={() => { props.click3() }}>HOW IT WORKS</button>
                <button className="nav-button" onClick={() => { props.click2() }}>ABOUT THE APP</button>
            </section>
        </div>
    )
}

export default Navbar
