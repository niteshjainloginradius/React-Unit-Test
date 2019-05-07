import React from 'react';
import {Col , Container, Row} from 'react-bootstrap';
import Header from './header';
import Footer from './footer';
import LeftPanel from './left-panel';
import RightPanel from './right-panel';
export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
      <div> 
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        <Header></Header>
        <Row>
        <Col md={4}><LeftPanel></LeftPanel></Col> 
        <Col md={7}><RightPanel></RightPanel></Col>
        </Row>
        <Footer></Footer>
      </div>
      </Container>
    );
  }
}

//ReactDOM.render(<Welcome/>, document.getElementById('app'));