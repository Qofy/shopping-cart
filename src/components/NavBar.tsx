import { Container,Navbar,Nav,Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
export function NavBar(){
  return(
    <>
    <Navbar sticky="top" className="bg-white shadow-sm mb-3">
    <Container>
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
        <Nav.Link to="store" as={NavLink}>Store</Nav.Link>
        <Nav.Link to="about" as={NavLink}>About</Nav.Link>
      </Nav>
      <Button variant="outline-primary" className="rounded-circle" style={{width: "3rem", height: "3rem", position: "relative"}}>
        <ShoppingCart/>
        <div className="rounded-circle bg-danger d-flex justify-content-center align-item-center" style={{color:"white", width: "1.5rem", height:"1.5rem", position: 'absolute', bottom:0,right:0, transform:"translate(25%,25%)"}}>2</div>
      </Button>
    </Container>
    </Navbar>
    </>
  )
}