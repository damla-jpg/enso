import React from "react";
import {Form, Button} from 'react-bootstrap'


const Home = (props) => {
    return (
        <div className="home-container">
            <div className="welcome">
                <h1>Welcome to Enso!</h1>
                <p>Hey there! Do you struggle as a student with getting your tasks done?
                    We can help.
                </p>
            </div>
            <div className="sign-up">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Home