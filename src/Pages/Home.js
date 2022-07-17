import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {language} from '../Components/Header.js'
import {ENnew} from './text.js'
import {RUnew} from './text.js'


var text = ENnew
var vis = ""
var userLang = navigator.language || navigator.userLanguage; 

export default class New extends Component {
    constructor(props){
        super(props);
        this.state = {visi : true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            visi : false
        })
        
        
    }
    render() {
        text = language ? ENnew : RUnew
        if (language === false){vis = "out"}
        if (this.state.visi === false){vis = "out"}
        if (userLang.indexOf('ru') === -1){vis = "out"} 
        

        return (
            <Container>
               <Row className="mt-2"> 
                <Col sm="1"></Col>
                <Col sm="2" className="grad mb-3">{text[0][0]}</Col>
                <Col sm="8"><span style={{marginLeft:"10px"}}>{text[1][0]}</span></Col>
                <Col sm="1"></Col>
               </Row>
               <Row className="mt-3 "> 
                <Col sm="1"></Col>
                <Col sm="2" className="grad mb-3">{text[0][1]}</Col>
                <Col sm="8" ><span style={{marginLeft:"10px"}}>{text[1][1]}</span></Col>
                <Col sm="1"></Col>
               </Row>
               <Row className="mt-3"> 
                <Col sm="1"></Col>
                <Col sm="2" className="grad mb-3">{text[0][2]}</Col>
                <Col sm="8" >
                    <Row>
                        <Col sm="3" lg="2"><span style={{marginLeft:"10px"}}>{text[1][2]}</span></Col>
                        <Col sm="1"><span style={{marginLeft:"10px"}}><a href="mailto:rostislav.nagimov@gmail.com" className="a">{text[1][4]}</a></span></Col>
                    </Row>
                    <Row>
                        <Col sm="3" lg="2"><span style={{marginLeft:"10px"}}>{text[1][3]}</span></Col>
                        <Col sm="1"><span style={{marginLeft:"10px"}}><a href="https://t.me/rostislavnagimov" className="a">{text[1][5]}</a></span></Col>
                    </Row>
                </Col>
                <Col sm="1"></Col>
               </Row>
               <Row className="mt-3"> 
                <Col sm="1"></Col>
                <Col sm="2" className="grad  mb-3">{text[0][3]}</Col>
                <Col sm="8">
                    <ul>
                        <li>{text[2][0]}</li>
                        <li>{text[2][1]}</li>
                        <li>{text[2][2]}</li>
                        <li>{text[2][3]}</li>
                    </ul>
                </Col>
                <Col sm="1"></Col>
               </Row>
               <Row className="mt-3"> 
                <Col sm="1"></Col>
                <Col sm="2" className="grad  mb-3">{text[0][4]}</Col>
                <Col sm="8">
                    <ul>
                        <li>{text[3][0]}</li>
                        <li>{text[3][1]}</li>
                        <li>{text[3][2]}</li> 
                    </ul>
                    </Col>
                <Col sm="1"></Col>
               </Row>
               <Row className="mt-3 mb-3"> 
                <Col sm="1"></Col>
                <Col sm="2" className="grad mb-3">{text[0][5]}</Col>
                <Col sm="8" ><p style={{marginLeft:"10px"}}>{text[4][0]}<br/><br/>{text[4][1]}</p></Col>
                <Col sm="1"></Col>
               </Row>
               <Row className="mt-3 mb-3"> 
                <Col sm="1"></Col>
                <Col>
                <div className={vis}>
                <div className="card mt-3 mb-3" >
                    
                            <div className="card-header"><Row><Col>В вашем браузере установлен русский язык</Col>
                            <Col><span className="krest" onClick={this.handleClick}>❌</span></Col></Row></div>
                    
                            <div className="card-body">Если вы хотите использовать сайт на русском, вы можете поменять язык на верхней навигационной панели, нажав на ссылку Русский.
                            </div>
                </div>
                </div>
                </Col>
                
                <Col sm="1"></Col>
               </Row>
               
            </Container>


        )
    }
}