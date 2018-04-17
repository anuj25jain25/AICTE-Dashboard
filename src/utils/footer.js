
import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import {Link} from 'react-router-dom';

class FootBar extends React.Component {
    render() {
        return (
            <Footer color="" className="font-small pt-4 mt-4 g-footer">
                <Container className="text-center text-md-left">
                    <Row className="text-center text-md-left mt-3 pb-3">
                        <Col md="5" lg="5" xl="5" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">All India Council for Technical Education</h6>
                            <p>AICTE was set up in November 1945 as a national-level Apex Advisory Body to conduct a survey on the facilities available for technical education and to promote development in the country in a coordinated and integrated manner.</p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            <p><Link to="/terms">Term of use</Link></p>
                            <p><Link to="/policy">Privacy Policy</Link></p>
                            <p><a href="#!">Feedback Form</a></p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fa fa-home mr-3"></i>ALL INDIA COUNCIL FOR TECHNICAL EDUCATION</p>
                            <p><i className="fa fa-envelope mr-3"></i>Nelson Mandela Marg, Vasant Kunj,New Delhi -110070</p>
                            <p><i className="fa fa-print mr-3"></i> 011-26131576-78,80</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="d-flex align-items-center">
                        <Col md="8" lg="8">
                            <p className="text-center text-md-left grey-text">&copy; {(new Date().getFullYear())} Copyright: AICTE</p>
                        </Col>
                        <Col md="4" lg="4" className="ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/officialaicte/" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="https://twitter.com/AICTE_INDIA" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-twitter"></i></a></li>
                                    
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}

export default FootBar;
