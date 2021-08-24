import React, { useRef } from 'react'
import { Card, Form, Button } from 'react-bootstrap';

function Signup() {

    const emailRef = useRef();
    const passRef = useRef()
    const confPassRef = useRef()

    function handleSubmit (e) {
        e.preventDefault();
        console.log('submit');
        console.log(emailRef);
        console.log(passRef);
        console.log(confPassRef);
    }

    return (
        <Card className='w-75 mx-auto mt-5'>
            <Card.Body>
                <h1>Sign Up</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control ref={confPassRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Signup
