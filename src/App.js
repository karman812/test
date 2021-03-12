import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import JournalContainer from "./components/Journal/JournalContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";


function App() {
    return (
        <Container fluid>
            <Row>
                <Navbar/>
                <JournalContainer/>
            </Row>
            <Row className='footer'>
                <Col xs='6' className='footerPolicyCol'>
                  <span>©2001– 2018 ООО «СпейсВэб»<br></br>
                      Вcе права защищены.<br></br>
                  Лицензия №163230</span>
                </Col>
                <Col xs='6' className='footerContactsCol'>+7 (812) 334-12-22 (в Санкт-Петербурге)<br></br>
                    +7 (495) 663-16-12 (в Москве)<br></br>
                    (800) 100-16-15 (бесплатно по России)</Col>
            </Row>

        </Container>
    );
}

export default App;
