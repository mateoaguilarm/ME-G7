import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navi() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/users">Users</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navi
