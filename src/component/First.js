import React from 'react'
import logo from "../logo.svg"
import { Button, Form } from 'react-bootstrap'

const First = () => {
    return (
        <div className="signUpSection">
            <div className='info'>
                <h2>Welcome to React</h2>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Form className='info'>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="outline-light" >
    Submit
  </Button>
</Form>
        </div>
    )
}

export default First


