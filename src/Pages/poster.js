import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import telegram from '../assets/telegram.png'
import mail from '../assets/mail.png'
import linkedin from '../assets/in.png'
import fb from '../assets/fb.png'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {language} from '../Components/Header.js'
import {ENITexp} from './text.js'
import {RUITexp} from './text.js'


var text = language ? ENITexp : RUITexp


export default class Poster extends Component {
    render() {
        var listItems = text.map((number) =>
<div className="card mb-3" >
<div class="card-header">{number[0]}<br/><i>{number[1]}</i></div>
<div class="card-body">
    {number[2]}</div>
</div>
);
        return (
            <div>{listItems}</div>
        )

    
    }
}