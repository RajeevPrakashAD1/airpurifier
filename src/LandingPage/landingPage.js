import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './landingPage.css';

import ReactPlayer from 'react-player';

//sdtyled components
import { S2div, PreBookButton, H1, P1, S5div, P2, Wrapper7, Wrapper11, Wrapper8, Mynav } from './styledcomponent';

//images
import s2 from './images/s2.svg';
import s3 from './images/s3.svg';
import s4 from './images/s4.svg';
import s5 from './images/s5.svg';
import s6 from './images/s6.svg';
import s11 from './images/s11.svg';
import s72 from './images/s72.svg';
import s81 from './images/s81.svg';
import s8m from './images/s8m.svg';
import s8b from './images/s8b.svg';
import logo from './images/logo.svg';
import cart from './images/cart.svg';

//video
import v from './video/v.mp4';
//mport v2 from './video/v2.mp4';

const LandingPage = () => {
	return (
		<React.Fragment>
			<Mynav>
				<div>
					<a href="/">
						<img src={logo} height="40px" alt="logo" />
						<P2 style={{ display: 'inline-block' }}>AIROCO</P2>
					</a>
				</div>

				<div>
					<a>
						<P2 style={{ display: 'inline-block' }}>Pre-Order</P2>
						<img src={cart} height="40px" alt="cart" />
					</a>
				</div>
			</Mynav>

			<section id="section1">
				<contaniner fluid>
					<div>
						{' '}
						<h1 className="videotext">Air OCO</h1>
					</div>
					<Row>
						<Col>
							<video autoPlay loop muted style={{ height: '100vh', width: '100vw' }}>
								<source src={v} type="video/mp4" />
							</video>
						</Col>
					</Row>
				</contaniner>
			</section>

			<section id="section2">
				<Container fluid>
					<S2div>
						<Row>
							<Col lg="6" md="6" sm="12" className="Cols2textDiv">
								<div className="s2textDiv">
									<P1> What do we do </P1>
									<H1> Strategy. Design Content. Technology Development </H1>
									<P1>
										Creating healthier and happier environments with a new type of purifier,
										inspired by nature and powered by NASA technology.
									</P1>
									<PreBookButton> Pre-Book Now</PreBookButton>
								</div>
							</Col>

							<Col lg="6" md="6" className="Cols2textDiv">
								<img src={s2} alt="o" className="img" />
							</Col>
						</Row>
					</S2div>
				</Container>
			</section>
			<section id="section3">
				<contaniner fluid>
					<S2div>
						<Row>
							<Col md="6" className="Cols2textDiv" xs={{ order: 'last' }} sm={{ order: 'first' }}>
								<img src={s3} alt="o" className="img" />
							</Col>
							<Col lg="6" md="6" sm="12" className="Cols2textDiv">
								<div className="s2textDiv">
									<H1>Nature gives us everything we need</H1>
									<P1>
										Airoco is an innovative, natural product design to be just as effective at
										cleaning the air you breathe without the environmental impact. Inspired by the
										British countyrside, Airoco uses natural colours, textures and materials to
										connect you with nature, whilist hidden within a wealth of features works hard
										to keep your air clean.
									</P1>
									<PreBookButton> Pre-Book Now</PreBookButton>
								</div>
							</Col>
						</Row>
					</S2div>
				</contaniner>
			</section>
			<section id="section4">
				<contaniner fluid>
					<S2div>
						<Row>
							<Col lg="6" md="6" sm="12" className="Cols2textDiv">
								<div className="s2textDiv">
									<H1>Is this the future of Air purifier?</H1>
									<P1>
										While it was just a TV show, that little speech at the beginning of the original
										Star Trek show really did do a good job of capturing our feelings about space.
										It is those feelings that drive our love of astronomy and our desire to learn
										more and more about it.
									</P1>
									<PreBookButton> Pre-Book Now</PreBookButton>
								</div>
							</Col>
							<Col lg="6" md="6" className="" style={{ display: 'flex', justifyContent: 'flex-end' }}>
								<img src={s4} alt="o" width="90%" />
							</Col>
						</Row>
					</S2div>
				</contaniner>
			</section>

			<section id="section5">
				<contaniner fluid>
					<S5div>
						<Row>
							<Col className="s5i" xs={{ order: 'last' }} lg="6" md={{ order: 'first' }}>
								<img src={s5} alt="o" className="img" />
							</Col>
							<Col
								lg="6"
								md="6"
								sm="12"
								className="s5c"
								style={{ display: 'flex', justifyContent: 'flex-end' }}
							>
								<div className="s5t">
									<H1 className="s5H1"> AIROCO</H1>
									<P1 className="s5P1">#Nursing The Home</P1>
									<PreBookButton> Pre-Book Now</PreBookButton>
									<div className="underline" />
								</div>
							</Col>
						</Row>
					</S5div>
				</contaniner>
			</section>
			<section id="section6">
				<contaniner fluid>
					<S2div>
						<Row>
							<Col md="6" className="Cols2textDiv" xs={{ order: 'last' }}>
								<img src={s6} alt="o" className="img" />
							</Col>
							<Col lg="6" md="6" sm="12" className="Cols2textDiv">
								<div className="s2textDiv2">
									<P2>Nature gives us everything we need</P2>
									<P1>
										Airoco is an innovative, natural product design to be just as effective at
										cleaning th
									</P1>
									<P2>Nature gives us everything we need</P2>
									<P1>
										Airoco is an innovative, natural product design to be just as effective at
										cleaning the air you breathe without the environmental
									</P1>
									<P2>Nature gives us everything we need</P2>
									<P1>
										Airoco is an innovative, natural product design to be just as effective at
										cleaning the air you breathe without the environmental
									</P1>
									<PreBookButton> Pre-Book Now</PreBookButton>
								</div>
							</Col>
						</Row>
					</S2div>
				</contaniner>
			</section>

			<section id="section7">
				<Container fluid>
					<Wrapper7>
						<Row>
							<Col md={4} className="row7">
								<div className="div7">
									<img src={s72} hight="70px" width="70px" className="iconImg" alt="0" />
									<P2 style={{ color: 'white' }}> Lorem ipsum dolor sit, </P2>
									<P1 style={{ color: 'white' }}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt earum dolor
										eveniet culpa vero adipisci ullam nemo sit illo ipsum.
									</P1>
								</div>
							</Col>
							<Col md={4} className="row7">
								<div className="div7">
									<img src={s72} hight="70px" width="70px" className="iconImg" alt="0" />
									<P2 style={{ color: 'white' }}> Lorem ipsum dolor sit, </P2>
									<P1 style={{ color: 'white' }}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt earum dolor
										eveniet culpa vero adipisci ullam nemo sit illo ipsum.
									</P1>
								</div>
							</Col>
							<Col md={4} className="row7">
								<div className="div7">
									<img src={s72} hight="70px" width="70px" className="iconImg" alt="0" />
									<P2 style={{ color: 'white' }}> Lorem ipsum dolor sit, </P2>
									<P1 style={{ color: 'white' }}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt earum dolor
										eveniet culpa vero adipisci ullam nemo sit illo ipsum.
									</P1>
								</div>
							</Col>
						</Row>
					</Wrapper7>
				</Container>
			</section>
			<section id="section8">
				<contaniner fluid>
					<Wrapper8>
						<div className="header8">
							<H1> Benefits of Airoco </H1>
							<P2>We believe in providing real benefits to our customers. </P2>
						</div>
						<Row className="row8">
							<Col md={12} lg={3} className="col8">
								<div>
									<img height="30px" src={s81} alt="i" />
									<P2>Reduce Pollution</P2>
									<P1>
										Startup Framework works fine on devices supporting Retina Desplay. Feel the
										clarity!
									</P1>
								</div>
								<div>
									<P2>Reduce Pollution</P2>
									<P1>
										Startup Framework works fine on devices supporting Retina Desplay. Feel the
										clarity!
									</P1>
								</div>
								<div>
									<P2>Reduce Pollution</P2>
									<P1>
										Startup Framework works fine on devices supporting Retina Desplay. Feel the
										clarity!
									</P1>
								</div>
							</Col>
							<Col md={12} lg={3} className="col8i">
								<img src={s8m} alt="0" className="img2" />
							</Col>

							<Col md={12} lg={3} className="col8 col82">
								<div>
									<img height="30px" src={s81} alt="i" />
									<P2>Reduce Pollution</P2>
									<P1>
										Startup Framework works fine on devices supporting Retina Desplay. Feel the
										clarity!
									</P1>
								</div>
								<div>
									<P2>Reduce Pollution</P2>
									<P1>
										Startup Framework works fine on devices supporting Retina Desplay. Feel the
										clarity!
									</P1>
								</div>
								<div>
									<P2>Reduce Pollution</P2>
									<P1>
										Startup Framework works fine on devices supporting Retina Desplay. Feel the
										clarity!
									</P1>
								</div>
							</Col>
						</Row>
					</Wrapper8>
				</contaniner>
			</section>

			<section id="section11">
				<contaniner fluid>
					<Wrapper11>
						<Row>
							<Col md="6" className="Cols2textDiv" xs={{ order: 'last' }} sm={{ order: 'first' }}>
								<img src={s11} alt="o" className="img" style={{ marginBottom: '40px' }} />
							</Col>
							<Col lg="6" md="6" sm="12" className="Cols2textDiv">
								<div className="s2textDiv">
									<H1 style={{ color: 'white' }}>Choose your desired from our collections</H1>
									<P1 style={{ color: 'white' }}>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the
									</P1>
									<PreBookButton style={{ backgroundColor: 'white', color: '#35683e' }}>
										{' '}
										Pre-Book Now
									</PreBookButton>
								</div>
							</Col>
						</Row>
					</Wrapper11>
				</contaniner>
			</section>
		</React.Fragment>
	);
};

export default LandingPage;
