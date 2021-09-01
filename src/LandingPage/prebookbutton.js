import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CountdownTimer from '../Components/CountdownTimer/CountdownTimer';
const timeremaining = Date.now() + 18 * 24 * 60 * 60 * 1000;
const PrebookButton2 = ({ timer }) => {
	return (
		<React.Fragment>
			<Link to="/preorder">
				<PreBookButton> PRE - BOOK NOW </PreBookButton>{' '}
			</Link>
			{timer == 't' ? null : <CountdownTimer countdownTimestampMs={timeremaining} />}{' '}
		</React.Fragment>
	);
};

export default PrebookButton2;

const PreBookButton = styled.button`
	background-color: #425c56;
	border-color: #425c56;
	padding: 5px 15px;
	color: white;
	border: none;
	border-radius: 5px;
	margin-top: 30px;

	&: hover {
		background-color: #35683e !important;
		border-color: #35683e;
	}

	&:focus {
		outline: none;
		box-shadow: none;
		shadow: none;
	}
`;
