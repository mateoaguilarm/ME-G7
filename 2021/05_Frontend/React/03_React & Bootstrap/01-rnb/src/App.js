// Aplicando React-Bootstrap en App.js

import React from 'react'
import './App.css'

import { Nav, Card, Button } from 'react-bootstrap'


function App() {
  return (
    <>
      <header>
        {/* <h1>Header</h1> */}
        <Nav className="justify-content-center navColor" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Get Started</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Login
      </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>

      <main>
        <h2>Main</h2>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </main>

      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  )
}

export default App
