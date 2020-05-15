import React from "react";
import { Header } from "../components/Header";
import { Container, Section, SectionTitle } from "../components/styles/Containers";
import { VideoFrame } from "../components/tools/Youtube";
import { gapi } from 'gapi-script';


export default function() {

    const channelId = document.location.pathname.split('/').pop();

    return (
        <div>
            <Header />
            <Container>
                <VideoFrame id={channelId} />
            </Container>

        </div>
    );
}

function useProfile() {
    const auth = gapi.auth2.getAuthInstance();
    const profile = auth.currentUser.get().getBasicProfile();

    return {
        id: profile.getId(),
        name: profile.getName()
    };
}
