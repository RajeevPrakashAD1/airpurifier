import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const S2div = styled.div `
	background-color: red;
	width: 100%;
	hight: 400px;
	&img {
		height: 400px;
		width: 400px;
	}
	display: flex;
	align-items: center;
	justify-content: center;

	& .s2textDiv {
		background-color: blue;
		margin-left: 50px;
	}

	& .Cols2textDiv {
		background-color: green;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const PreBookButton = styled(Button)
`
    background-color: #425C56;
    border-color: #425C56;
    &: hover{
        background-color: #35683e;
        border-color: 35683e;
        

        
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
`;

export const P1 = styled.p `
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 26px;
	/* or 162% */

	/* primary */

	color: #425c56;
`;