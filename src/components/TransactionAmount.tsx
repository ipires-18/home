import styled from "styled-components";

export const TransactionAmount = styled.div<{ isPositive: boolean }>`
font-size: 1em;
color: ${(props) => (props.isPositive ? 'green' : 'red')};
`;
