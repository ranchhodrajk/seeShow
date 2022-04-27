import React from 'react'
import '../Footer/Footer.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import appleStore from '../../Assets/appleStore.png'
import playStore from '../../Assets/playStore.png'
import tw from '../../Assets/socialIcon/twitter.svg'
import fb from '../../Assets/socialIcon/facebook.svg'
import gh from '../../Assets/socialIcon/github.svg'
import insta from '../../Assets/socialIcon/instagram.svg'
import lin from '../../Assets/socialIcon/linkedin.svg'

const Footer = () => {
    return (
        <div className='mainFooter my-bg-blue '>
            <Container  className='pt-3 upper-Border'>
                
                <Row className='pt-2 pb-4'>
                    <Col md={6}>
                        <div className="footerHead text-red fs-3 fw-bolder">
                            seeSHOW
                        </div>
                        <div className="footer-head-des lh-sm fw-light py-2 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, eveniet! Numquam, delectus. Quia exercitationem illum numquam.
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="store-icon-bag d-flex flex-md-column align-items-end">
                            <button className="appleStore-bag btn-clr">
                                <img src={appleStore} alt=""/>
                            </button>

                            <button className="googleStore-bag  btn-clr mt-3">
                                <img src={playStore} alt=""/>
                            </button>
                        </div>
                    </Col>
                </Row>
                
                <Row className='footer-social-border py-2'>
                    <Col md={6}>
                        <div className="copy-line fw-light py-2 text-center text-md-start  text-white">
                            &copy; 2022 All right reserved
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="social-footer d-flex justify-content-md-end justify-content-center py-2">
                            <button className="appleStore-bag btn-clr">
                                <img src={tw} alt="" height='22' width='22'/>
                            </button>
                            <button className="appleStore-bag btn-clr">
                                <img src={fb} alt="" height='22' width='22'/>
                            </button>
                            <button className="appleStore-bag btn-clr">
                                <img src={gh} alt="" height='22' width='22'/>
                            </button>
                            <button className="appleStore-bag btn-clr">
                                <img src={insta} alt="" height='22' width='22'/>
                            </button>
                            <button className="appleStore-bag btn-clr">
                                <img src={lin} alt="" height='22' width='22'/>
                            </button>
                        </div>
                    </Col>
                </Row>    
                    
            </Container>
        </div>
    )
}

export default Footer
