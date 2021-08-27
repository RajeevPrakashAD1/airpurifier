import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './landingPage.css';

//sdtyled components
import { S2div, PreBookButton, H1, P1 } from './styledcomponent';

//images
import s2 from './images/s2.svg';

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
								<img src={s2} alt="o" height="700px" width="400px" />
							</Col>
						</Row>
					</S2div>
				</Container>
			</section>
		</React.Fragment>
	);
};

export default LandingPage;
