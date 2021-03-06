import React, { Component } from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import tictactoe from '../assets/TicTacToe.png'

import {language} from '../Components/Header.js'
import {ENskills} from './text.js'
import {RUskills} from './text.js'
import {ENexamples} from './text.js'
import {RUexamples} from './text.js'
import {ENweb} from './text.js'
import {RUweb} from './text.js'
import {ENnonweb} from './text.js'
import {RUnonweb} from './text.js'



export default class CV extends Component {
    render() {
        var skills = language ? ENskills : RUskills
        var itexp = language ? ENweb : RUweb
        var nonitexp = language ? ENnonweb : RUnonweb
        var example = language ? ENexamples : RUexamples
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col xs={12} sm={12} md={2} lg={2}>
                            <Nav variant="pills" className="flex-column mt-2" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">{language ? "Skills" : "Навыки"}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">{language ? "Web experience" : "Web опыт"}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">{language ? "Other experience" : "Прочий опыт"}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">{language ? "My code" : "Примеры кода"}</Nav.Link>
                                </Nav.Item>
                                

                            </Nav>
                        </Col>
                        <Col>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <div className="card mt-3 mb-3" >
                                        <div class="card-header">Front-end</div>
                                        <div class="card-body">
                                            {skills[0][0]}<br/>
                                            {skills[0][1]}
                                            <a className="a" href="https://www.sololearn.com/Certificate/1024-22068390/pdf/">JavaScript</a>,
                                            <a className="a" href="https://www.sololearn.com/Certificate/1097-22068390/pdf/"> React + Redux</a>,
                                            <a className="a" href="https://www.sololearn.com/Certificate/1092-22068390/jpg/"> Angular + NestJS</a>,
                                            <a className="a" href="https://www.sololearn.com/Certificate/1023-22068390/jpg/"> CSS</a>,
                                            <a className="a" href="https://www.sololearn.com/Certificate/1014-22068390/jpg/"> HTML</a>.
                                            </div>
                                    </div>
                                    <div className="card mb-3" >
                                        <div class="card-header">Python</div>
                                        <div class="card-body">
                                            {skills[1][0]}<br/>
                                            {skills[1][1]}
                                            <a className="a" href="https://www.sololearn.com/Certificate/1157-22068390/pdf/">Python for Beginners</a>, 
                                            <a className="a" href="https://www.sololearn.com/Certificate/1073-22068390/pdf/"> Python Core</a>, 
                                            <a className="a" href="https://www.sololearn.com/Certificate/1159-22068390/pdf/"> Python Data Structures</a>, 
                                            <a className="a" href="https://www.sololearn.com/Certificate/1161-22068390/pdf/"> Python for Data Science</a>, 
                                            <a className="a" href="https://www.sololearn.com/Certificate/1158-22068390/pdf/"> Intermediate Python</a>, 
                                            <a className="a" href="https://www.sololearn.com/Certificate/1139-22068390/pdf/"> Python for Finance</a>.
                                            </div>
                                    </div>
                                    <div className="card mb-3" >
                                        <div class="card-header">{language ? "Quality Assurance" : "Обеспечение качества ПО"}</div>
                                        <div class="card-body">
                                            {skills[2][0]}<br/>
                                            {skills[2][1]}
                                            <a className="a" href="https://stepik.org/cert/1274502">{language ? "Software Testing: Preparation for ISTQB Foundation Certification" : "Тестирование ПО: подготовка к сертификации ISTQB Foundation"}</a>,
                                            <a className="a" href="https://stepik.org/cert/1300615">{language ? " Fundamentals of Game Testing" : " Основы тестирования игр"}</a>.
                                            </div>
                                    </div>
                                    <div className="card mb-3" >
                                        <div class="card-header">{language ? "Automation" : "Автоматизация"}</div>
                                        <div class="card-body">
                                            {skills[3][0]}
                                            </div>
                                    </div>
                                    <div className="card mb-3" >
                                        <div class="card-header">SQL</div>
                                        <div class="card-body">
                                            {skills[4][0]}<br/>
                                            {skills[4][1]}
                                            <a className="a" href="https://stepik.org/cert/1300615">SQL</a>
                                            {skills[4][2]}
                                            </div>
                                    </div>
                                    <div className="card mb-3" >
                                        <div class="card-header">{language ? "Language skills" : "Языковые навыки"}</div>
                                        <div class="card-body">
                                            {skills[5][0]}<br/>
                                            {skills[5][1]}</div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="card mt-3 mb-3" >
                                        <div class="card-header">{itexp[0][0]}<br/><i>{itexp[0][1]}</i></div>
                                        <div class="card-body">{itexp[0][2]}</div>
                                    </div>
                                    <div className="card mb-3" >
                                        <div class="card-header">{itexp[1][0]}<br/><i>{itexp[1][1]}</i></div>
                                        <div class="card-body">{itexp[1][2]}</div>
                                    </div>
                                    <div className="card mb-3" >
                                        <div class="card-header">{itexp[2][0]}<br/><i>{itexp[2][1]}</i></div>
                                        <div class="card-body">{itexp[2][2]}</div>
                                    </div>
                                    <div className="card mb-3" >
                                        <div class="card-header">{itexp[3][0]}<br/><i>{itexp[3][1]}</i></div>
                                        <div class="card-body">{itexp[3][2]}</div>
                                    </div>
                                    
                                    
                                </Tab.Pane>
                                <Tab.Pane eventKey="third"> 
                                <div className="card mt-3 mb-3" >
                                        <div class="card-header">{nonitexp[0][0]}<br/><i>{nonitexp[0][1]}</i></div>
                                        <div class="card-body">{nonitexp[0][2]}<br/><i>{nonitexp[0][3]}</i></div>
                                </div>
                                <div className="card mb-3" >
                                        <div class="card-header">{nonitexp[1][0]}<br/><i>{nonitexp[1][1]}</i></div>
                                        <div class="card-body">{nonitexp[1][2]}</div>
                                </div>
                                <div className="card mb-3" >
                                        <div class="card-header">{nonitexp[2][0]}<br/><i>{nonitexp[2][1]}</i></div>
                                        <div class="card-body">{nonitexp[2][2]}</div>
                                </div>
                                <div className="card mb-3" >
                                        <div class="card-header">{nonitexp[3][0]}<br/><i>{nonitexp[3][1]}</i></div>
                                        <div class="card-body">{nonitexp[3][2]}</div>
                                </div>
                                <div className="card mb-3" >
                                        <div class="card-header">{nonitexp[4][0]}<br/><i>{nonitexp[4][1]}</i></div>
                                        <div class="card-body">{nonitexp[4][2]}</div>
                                </div>
                            
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                <div className="card mt-3 mb-3" >
                                        <div class="card-header">{example[0][0]}</div>
                                        <div class="card-body">{example[0][1]}<a className="a" href="https://github.com/rostislavnagimov/rostislavnagimov.github.io/blob/main/Sources/my-app.zip">GitHub</a> </div>
                                </div>
                                <div className="card mb-3" >
                                        <div class="card-header">{example[1][0]}</div>
                                        <div class="card-body"><img src={tictactoe}/><br/> {example[1][1]}<a className="a" href="/#/tictactoe">TicTacToe</a><br/>{example[1][2]}<a className="a" href="https://github.com/rostislavnagimov/rostislavnagimov.github.io/blob/main/Sources/TicTacToe.js">GitHub</a></div>
                                </div>
                                <div className="card mb-3" >
                                        <div class="card-header">Selenium</div>
                                        <div class="card-body">{example[2][0]}<a className="a" href="https://github.com/rostislavnagimov/StepicAutoCourse">GitHub</a></div>
                                </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            </Container>
           

        )
    }
}