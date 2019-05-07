import React from 'react';
import {Form, Col, Button, Row } from 'react-bootstrap';
import Child from './child';
export default class LeftPanel extends React.Component {
    
    constructor(props){
        super(props);
        this.state={ 
                email:'',
                password: '',
                remember: false,
                childTextMessage:''
        };
      this.changeText=  this.changeText.bind(this);
      this.rememberMe= this.rememberMe.bind(this);
      this.myEvent= this.myEvent.bind(this);
    }
    render() {
       return (
          <div>
             <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control name="email" type="email" placeholder="Email" onChange={this.changeText}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control name="password" type="password" placeholder="Password" onChange={this.changeText}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check name="remember" label="Remember me" value={this.state.remember} onChange={this.rememberMe} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button controlId="buttonSign" type="button" onClick={this.myEvent}>Sign in</Button>
                    </Col>
                </Form.Group>
                </Form>
                <div id="childrean">
                <Child children={this.state.childTextMessage} />
                </div>
          </div>
       );
    }
    changeText(event){
        this.setState({ [event.target.name] :event.target.value});
    }
    myEvent(event){
        this.setState({"childTextMessage": JSON.stringify(this.state)});
    }
    rememberMe(event){
       this.setState({ [event.target.name] : event.target.value==='false'? false:true});
    }
 }