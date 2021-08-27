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
	& .s2textDiv2 {
		margin-left: 50px;
		margin-right: 50px;
		padding: 40px 0px;

		@media (max-width: 751px) {
			margin-left: 0px;
			margin-right: 0px;
			text-align: left;
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
	& .s5i {
	}

	& .s5c {
		display: flex;
		padding: 40px;
	}
	& .s5t {
		margin-right: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 30px;

		& .s5H1 {
			font-size: 46px;
			margin-bottom: 30px;
		}
		& .s5P1 {
			font-size: 26px;
			margin-bottom: 30px;
		}
	}
	& .underline {
		min-width: 180%;

		background: linear-gradient(to right, #35683e, #e7f5e6);

		height: 2px;
		margin-top: 20px;
		border: none;
	}
	@media (max-width: 751px) {
		& .s5c {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		& .s5t {
			margin-right: 0px;
		}
		margin-left: 0px;
		margin-right: 0px;
		text-align: center;
		padding: 20px 20px;
	}
`;

export const Wrapper7 = styled.div `
	margin: 0px 35px;
	& .div7 {
		color: white !important;

		padding: 40px 0px;
		max-width: 300px;
	}

	@media (max-width: 751px) {
		margin: 0px 0px;
		& .div7 {
			padding: 20px 0px;
		}

		& .row7 {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const Wrapper11 = styled.div `
	padding: 40px 0px;
	max-height: 350px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 751px) {
		flex-direction: column-reverse;
		max-height: 1000px;
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
	& .s2textDiv2 {
		margin-left: 50px;
		margin-right: 50px;
		padding: 40px 0px;

		@media (max-width: 751px) {
			margin-left: 0px;
			margin-right: 0px;
			text-align: left;
			padding: 20px 20px;
		}
	}

	& .Cols2textDiv {
		display: flex;
		justify-content: center;
		align-items: center;
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

export const P2 = styled.p `
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 36px;
	/* or 162% */

	/* primary */

	color: #425c56;
	@media (max-width: 500px) {
		font-size: 12px;
		line-height: 20px;
	}

	margin-bottom: 15px;
`;