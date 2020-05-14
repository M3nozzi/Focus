import React from "react";
import {Container } from "../styles/Containers";
import Loader from "react-loader-spinner";
import Theme from "../../Theme";

export function Loading({wide}) {
    return (
        <Container wide={wide}>
            <Loader
                type="Rings"
                color={Theme.primary}
                height={100}
                width={100}
            />
        </Container>
    )
}