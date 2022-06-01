import React from "react";
import {Form, Button} from 'react-bootstrap'
import { useForm } from "react-hook-form";

const Home = (props) => {
//     const [validated, setValidated] = useState(false);

    const { register, handleSubmit} = useForm();   
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <div className="home-container">
            <div className="welcome">
                <h1>Welcome to Ensō!</h1>
                <p>Hey there! Do you struggle as a student with getting your tasks done?
                    We can help. Try Ensō by signing up right now!
                </p>
            </div>
            <div className="sign-up">
                <h1>Sign Up</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                        required 
                        type="email" 
                        placeholder="Enter email" 
                        {...register("email")}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>University</Form.Label>
                        <Form.Control 
                        required 
                        type="text" 
                        placeholder="Enter your university" 
                        {...register("university")}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        required 
                        type="password" 
                        placeholder="Password" 
                        {...register("password")}/>
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