import React from 'react';
import {Card } from 'react-bootstrap';
export default class RightPanel extends React.Component {
    
    render() {
       return (
          <div className="row">
            <Card className="col-md-4" bg="primary" text="white" >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="col-md-4" bg="secondary" text="white" >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="col-md-4" bg="success" text="white" >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Success Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="col-md-4" bg="danger" text="white">
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Danger Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="col-md-4" bg="warning" text="white">
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Warning Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="col-md-4" bg="info" text="white" >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="col-md-4" bg="dark" text="white" >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="col-md-4" bg="light" >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Light Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
          </div>
       );
    }
 }