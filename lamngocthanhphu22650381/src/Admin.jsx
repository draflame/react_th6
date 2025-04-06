import { Container, Row, Col, Navbar, Nav,Form,InputGroup   } from "react-bootstrap"
import { useState } from "react"
import reactLogo from './assets/react.svg'
import question from './assets/Question 1.png'
import search from './assets/Search.png'
import bell from './assets/Bell 1.png'
import avt from './assets/Avatar.png'
import logo from './assets/Image 1858.png'
import square from './assets/Squares four 1.png'

import './css/Admin.css'
function Admin(){
    var menuItem=["Dashboard","Project","Teams","Analytics","Messages","Integrations"]
    const [activeIndex, setActiveIndex] = useState(0);
    const handleItemClick = (index) => {
        
        setActiveIndex(index);
    };
    return(
        <>
            <Container>
                <Row className="mt-4">
                     <Col lg='3' >
                     <Navbar className="d-flex flex-column" style={{gap: '30px', alignItems:'start'}}>
                            <Navbar.Brand href="">
                                <Navbar.Brand href="" className="">
                                    <img
                                        src={logo}
                                        className="d-inline-block align-top"
                                        alt="Logo"
                                    />
                                </Navbar.Brand>
                            </Navbar.Brand>
                            <Nav className="me-auto d-flex flex-column" style={{gap: '20px'}}>
                                {
                                    menuItem.map((item, index)=>{
                                        return <>
                                        <Nav.Link key={index} className={`itemMenu ${activeIndex === index ? 'active' : ''}`} 
                                        onClick={()=>handleItemClick(index)}>{item}</Nav.Link>
                                        </>
                                    })
                                }
                            </Nav>
                            
                        </Navbar>
                     </Col>
                     <Col  style={{borderLeft: '1px solid gray'}}>
                        <Row style={{borderBottom: '1px solid gray'}}>
                            <Col lg='3' style={{color:'pink', fontSize:'30px', fontWeight:'bold'}}>Dashboard</Col>
                            <Col className="d-flex align-items-center justify-content-end" style={{gap:'10px'}}>
                                <InputGroup style={{width:250}}>
                                    <InputGroup.Text>
                                    <img src={search    } alt="" />
                                    </InputGroup.Text>
                                    <Form.Control />
                                </InputGroup>
                                <img src={bell} alt="" className="img-fluid" style={{width: '30px',height:'30px'}}/>
                                <img src={question} alt="" className="img-fluid" style={{width: '30px',height:'30px'}}/>
                                <img src={avt} alt="" className="img-fluid" style={{width: '30px',height:'30px'}}/>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                           <Col className="" style={{display:'flex'}}>
                            <img src={square} alt="" />
                            <p className="">Overview</p>
                           </Col>
                        </Row>
                     </Col>
                </Row>
            </Container>
        </>
    )
}
export default Admin