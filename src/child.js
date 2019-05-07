import React from 'react';
export default class Child extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
       return (
          <div id="child">
             {this.props.children}
          </div>
       );
    }
 }