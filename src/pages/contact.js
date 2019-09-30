import React from "react"
import Layout from "../components/layout"
import { Form, Button, Container, Row, Col } from "react-bootstrap"


export default class IndexPage extends React.Component {
    state = {
        yourName: "",
        yourEmail: "",
        yourMessage: "",
        subject: "Query"
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.yourName);
        console.log(this.state);
    }


    render() {
        return (
    
            <Layout pageInfo={{ pageName: "Contact us" }}>

                <Container>
                    <Form onSubmit={this.handleSubmit} action="mailto:jakebourne@yahoo.co.uk">
                        <Row>
                            <Col md="2"></Col>
                            <Col md="6">
                                <Form.Group controlId="yourName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="yourName" type="text" as="input" placeholder="Enter your full name" />
                                </Form.Group>

                                <Form.Group controlId="yourEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="yourEmail" type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} as="select" name="subject">
                                        <option value="Query" defaultValue={this.state.subject}>Query</option>
                                        <option value="Feedback">Feedback</option>
                                        <option value="Suggestion">Suggestion</option>
                                        <option value="Website">Web site</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="yourMessage">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name="yourMessage" type="text" as="textarea" rows="3" placeholder="Type your message here" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Send
                                </Button>
                            </Col>
                            <Col md="4"/>
                        </Row>
                    </Form>
                </Container>

            </Layout>
        )
    }
}
