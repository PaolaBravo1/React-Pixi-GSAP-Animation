import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import * as PIXI from "pixi.js";

import { LandingPage } from "../../components/Landing";
import { Topbar } from "../../components/Landing/topbar";
import { LoaderScreen } from "../../components/Loader";
import URLS from "../../constants/imageURL.json";
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

export const MainPage = () => {
    const [assets, setAssets]: [any, any] = useState(null);

    useEffect(() => {
        const loader = new PIXI.Loader();
        const count = 73;
        const ids: string[] = [];

        for (let i = 1; i <= count; i++) {
            loader.add(`${i}`, URLS.AE[i - 1]);
            ids.push(`${i}`);
        }

        loader.onComplete.add((loader: any) => {
            setAssets(loader.resources);
        });
        loader.load();
    }, []);

    return (
        <Wrapper id="wrapper">
            {assets ? (
                <>
                    <Topbar />
                    <LandingPage assets={assets} />
                </>
            ) : (
                <LoaderScreen />
            )}
        </Wrapper>
    );
};

export default MainPage;
