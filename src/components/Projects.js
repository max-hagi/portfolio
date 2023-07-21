import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import thing from "../assets/memoji.PNG"

import "./Projects.css"

export const Projects = () => {
    
    return (
        <section className="project" id="project"> 
            <div>
                <h1>Projects</h1>
            </div>
            
            <div className="tabs">
                <Tab.Container defaultActiveKey="first" fill="true" justify>
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column nav">  
                                <Nav.Item className='nav-item'>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='nav-item'>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='tab-content'>
                                <Tab.Pane eventKey="first"><img src={thing}/></Tab.Pane>
                                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </section>
    );

}