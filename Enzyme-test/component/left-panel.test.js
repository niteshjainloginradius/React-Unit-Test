import React from 'react';
import jestMock from  'jest-mock';
import render from 'react-test-renderer'; 
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json';
import {Form, Col, Button, Row } from 'react-bootstrap';
import LeftPanel from './../../src/left-panel';
import child  from './../../src/child';

// for snapshot testing requirement
createSerializer({mode: "deep"});
Enzyme.configure({adapter : new Adapter()});


// element render testing requirement

const email='nitesh.jain@loginradius.com';
const pass='123456';
const rememberMe=false;

describe('Step:1 Snapshot Testing.',()=>{
    
    const tree = render.create(<LeftPanel/>);
    const testInstance = tree.root;
    test('Unit Test Snapshot',done=>{
        expect(tree.toJSON()).toMatchSnapshot();// if match with previou one then true else false.
        //expect(testInstance.findByType(child).props.children).toBe(1);
        done()
    })
    test('Unit Test Snapshot',done=>{
        const tree1 = render.create('body');
        expect(tree1.toJSON()).toMatchSnapshot();// if match with previou one then true else false.
        //expect(testInstance.findByType(child).props.children).toBe(1);
        done()
    })
}) 
describe('Step:2 Element Are There On Component.',()=>{
    const wrapper= shallow(<LeftPanel/>);
    let leftPanel= new LeftPanel();
    test('Unit Test Component With HTML Element',done=>{
    //1. we need to check our componet render correctly.
    //https://airbnb.io/enzyme/docs/api/ShallowWrapper/containsMatchingElement.html
    expect(wrapper.find(child).length).toBe(1); // sub component check 
    expect(wrapper.containsMatchingElement(<Form.Control name="email" type="email" placeholder="Email" onChange={LeftPanel.changeText}/>)).toBe(true); 
    expect(wrapper.containsMatchingElement(<Form.Control name="password" placeholder="Password" onChange={LeftPanel.changeText}/>)).toBe(true);
    expect(wrapper.containsMatchingElement(<Form.Check name="remember" label="Remember me" value={leftPanel.state.remember} onChange={LeftPanel.rememberMe} />)).toBe(true);
    expect(wrapper.containsMatchingElement(<Button  type="button" onClick={LeftPanel.myEvent}>Sign in</Button>)).toBe(true);
    done();
    })
}) 

 // component mount testing
describe('Step:3 Event Mock.',()=>{
    test('simulates click events',()=>{
        const onButtonClick = jestMock.fn();
        let button= shallow(<Button controlId="buttonSign" type="button" onClick={onButtonClick}>Sign in</Button>)
        button.find('button').simulate('click');
        expect(onButtonClick.mock.calls.length).toBe(1);

    })
})

describe('Step: 4 Dom Testing.',()=>{
       test('Submit Button Click Event Data Collecting.',()=>{
         const wrapperMount= mount(<LeftPanel/>,{attachTo: document.getElementById('root')});
         wrapperMount.find('#formHorizontalEmail').simulate('change', {target: {value: email, name: 'email'}});
         wrapperMount.find('#formHorizontalPassword').simulate('change', {target: {value: pass, name:'password'}});
         wrapperMount.find('#formHorizontalCheck').simulate('change', {target: {value: true, name:'remember'}});
         wrapperMount.find('button').simulate('click');
         expect(wrapperMount.find('#child').text()).toBe('{"email":"nitesh.jain@loginradius.com","password":"123456","remember":true,"childTextMessage":"ghjgjgjgj"}')
         wrapperMount.unmount();
       })
})

