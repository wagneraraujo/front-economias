import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Title = styled.div`
	padding: 16px;
	> h2 {
		color: ${(props) => props.theme.color.white};
		font-size: 26px;
	}
`;

export const Controller = styled.div`
	display: flex;
`;
