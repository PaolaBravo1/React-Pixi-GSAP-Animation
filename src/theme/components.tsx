import styled from "styled-components";

export const InputButton = styled.button`
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    :hover {
        cursor: pointer;

        svg {
            stroke: #986db2 !important;
        }
    }

    :disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;
export const FullSection = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    // background: transparent;
    background-color: #15171C;
`;

export const GradientText = styled.span`
    background: linear-gradient(
        90deg,
        #7645E0 10%,
        #FF0000 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const InvestorGradientText = styled.span`
    background: linear-gradient(
        90deg,
        #DE9CF3,
        #7255CF
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    // text-align: center;
`;

export const TextContent = styled.p`
    color: white;
    font-size: 4.7vw;
    line-height: 5.7vw;
    letter-spacing: -0.2vw;
`;
