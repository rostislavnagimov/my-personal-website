import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import telegram from '../assets/telegram.png'
import mail from '../assets/mail.png'
import linkedin from '../assets/in.png'
import fb from '../assets/fb.png'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {language} from '../Components/Header.js'

const buttonStyle = {
    marginRight: '10px',
    marginBottom: '10px'
  };

export default class Contacts extends Component {
    render() {
        return (
            <Container>
                <Row className="mt-4">
                    <Col className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className="card mb-4">
                        <div className="card-header"><img src={telegram} width="20"/>    Telegram    </div>
                        <div className="card-body">
                        <Row>
                           <Col>
                           <p className="card-text">@rostislavnagimov<br/></p>
                           <a className="btn btn-primary col-xs-1 btn-sm" href="https://t.me/rostislavnagimov" role="button" style={buttonStyle}>{language ? "Write" : "Написать"}</a>
                           <CopyToClipboard text="@rostislavnagimov">
                               <button className="btn btn-primary copy-clipboard col-xs-1 btn-sm" style={buttonStyle}>{language ? "Copy" : "Скопировать"}</button>
                            </CopyToClipboard>
                           </Col>
                        </Row>
                        </div>
                        </div>
                    </Col>
                    <Col className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className="card mb-4">
                        <div className="card-header"><img src={mail} width="20"/>    E-MAIL    </div>
                        <div className="card-body">
                        <Row>
                           <Col>
                           <p className="card-text">rostislav.nagimov@gmail.com<br/></p>
                           <a className="btn btn-primary col-xs-1 btn-sm" href="mailto:rostislav.nagimov@gmail.com" role="button" style={buttonStyle}>{language ? "Write" : "Написать"}</a>
                           <CopyToClipboard text="rostislav.nagimov@gmail.com">
                               <button className="btn btn-primary copy-clipboard col-xs-1 btn-sm" style={buttonStyle}>{language ? "Copy" : "Скопировать"}</button>
                            </CopyToClipboard>
                           </Col>
                        </Row>
                        </div>
                        </div>
                    </Col>
                
                </Row>
                <Row className="mt-4">
                    <Col className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className="card mb-4">
                        <div className="card-header"><img src={linkedin} width="20"/>    LinkedIn    </div>
                        <div className="card-body">
                        <Row>
                           <Col>
                           <p className="card-text">Rostislav Nagimov<br/></p>
                           <a className="btn btn-primary col-xs-1 btn-sm" href="https://www.linkedin.com/in/rostislav-nagimov-160037226/" role="button" style={buttonStyle}>{language ? "Go to profile" : "Перейти в профиль"}</a>
                           
                           </Col>
                        </Row>
                        </div>
                        </div>
                    </Col>
                    <Col className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className="card mb-4">
                        <div className="card-header"><img src={fb} width="20"/>    Facebook    </div>
                        <div className="card-body">
                        <Row>
                           <Col>
                           <p className="card-text">Rostislav Nagimov<br/></p>
                           <a className="btn btn-primary col-xs-1 btn-sm" href="https://www.facebook.com/profile.php?id=100079003270301" role="button" style={buttonStyle}>{language ? "Go to profile" : "Перейти в профиль"}</a>
                           
                           </Col>
                        </Row>
                        </div>
                        </div>
                    </Col>
                
                </Row>
                
            </Container>


        )
    }
}