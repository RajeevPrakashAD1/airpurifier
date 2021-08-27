import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './landingPage.css';

//sdtyled components
import { S2div, PreBookButton, H1, P1, S5div } from './styledcomponent';

//images
import s2 from './images/s2.svg';
import s3 from './images/s3.svg';
import s4 from './images/s4.svg';
import s5 from './images/s5.svg';

const LandingPage = () => {
	return (
		<React.Fragment>
			<section id="section1">
				<contaniner fluid>
					<Row>
						<Col>
							<div> landing Page</div>
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
							<Col sm={{ order: 'first' }} md="6" className="Cols2textDiv" xs={{ order: 'last' }}>
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
							<Col sm={{ order: 'first' }} md="6" className="s5i" xs={{ order: 'last' }}>
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
									<H1> AIROCO</H1>
									<P1>#Nursing The Home</P1>
									<PreBookButton> Pre-Book Now</PreBookButton>
								</div>
							</Col>
						</Row>
					</S5div>
				</contaniner>
			</section>
		</React.Fragment>
	);
};

export default LandingPage;
