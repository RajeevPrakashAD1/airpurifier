import styled from 'styled-components';

export const S2div = styled.div `
	padding: 40px 0px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 751px) {
		flex-direction: column-reverse;
	}

	& .s2textDiv {
		margin-left: 50px;
		margin-right: 50px;
		padding: 40px 0px;

		@media (max-width: 751px) {
			margin-left: 0px;
			margin-right: 0px;
			text-align: center;
			padding: 20px 20px;
		}
	}

	& .Cols2textDiv {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const S5div = styled.div `
	&.s5i {
		bacground-color: yellow;
	}

	&.s6c {
		background-color: red;
	}
`;

export const PreBookButton = styled.button `
	background-color: #425c56;
	border-color: #425c56;
	padding: 5px 15px;
	color: white;
	border: none;
	border-radius: 5px;

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

export const H1 = styled.p `
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 46px;
	/* or 128% */

	/* primary */

	color: #425c56;

	@media (max-width: 500px) {
		font-size: 20px;
		line-height: 26px;
	}
`;

export const P1 = styled.p `
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 26px;
	/* or 162% */

	/* primary */

	color: #425c56;
	@media (max-width: 500px) {
		font-size: 12px;
		line-height: 20px;
	}
`;