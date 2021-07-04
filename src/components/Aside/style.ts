import styled from "styled-components";

export const Container = styled.div`
	grid-area: AS;
	background-color: ${(props) => props.theme.color.secondary};
	padding-left: 16px;
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	height: 70px;
`;
export const Title = styled.h4`
	color: ${(props) => props.theme.color.white};
`;
export const LogoImg = styled.img`
	height: 40px;
`;
export const MenuContainer = styled.nav`
	margin-top: 36px;
	display: flex;
	flex-direction: column;
	margin: 16px 0;
`;
export const MenuItemLink = styled.a`
	color: ${(props) => props.theme.color.info};
	&:hover {
		opacity: 0.7;
	}
	margin-bottom: 26px;
	display: flex;
	align-items: center;
	text-decoration: none;
	font-size: 18px;

	> svg {
		font-size: 18px;
		margin-right: 10px;
	}
`;
