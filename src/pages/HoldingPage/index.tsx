import styled from "styled-components";

import HoldingPage from "../../components/Holding";
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

export const Holding = () => {
    return (
        <Wrapper id="wrapper">
            <HoldingPage />
        </Wrapper>
    );
};

export default Holding;
