import React from "react"
import Layout from "../components/layout"
import { Row, Col, Container } from "react-bootstrap"


export default () => (

    <Layout pageInfo={{ pageName: "Sessions" }}>

        <Container>
            <Row>
                <Col md="3" css={{fontWeight:700}}>Wednesdays</Col>
                <Col md="9">Rondel House day centre
                   <pre>
                        Maes y Cwm street
                        Barry
                        CF63 4EH
                    </pre>
                </Col>
            </Row>

            <Row>
                <Col md="3" css={{fontWeight:700}}>Thursdays</Col>
                <Col md="9">Morel Court care home
                    <pre>
                        Raisdale road
                        Penarth
                        CF64 5BN
                    </pre>
                </Col>
            </Row>

        </Container>
    </Layout>
)
