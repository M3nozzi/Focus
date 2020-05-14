import React from "react";

import Button  from "./styles/Button";
import  { Container }  from "./styles/Containers";
import { Cards, Divider, Icon } from "./styles/Card";
import { gapi } from 'gapi-script';

// This scope is a set of permissions to request
// when the user logs in
const YOUTUBE_SCOPE = "https://www.googleapis.com/auth/youtube.readonly";

export default function() {

    const onLogin = React.useCallback(() => useAuth().signIn({
        scope: YOUTUBE_SCOPE
    }).then(() => {
        // Refresh after sign-in
        window.location.reload();
    }), []);
    
    return (
        <Container>
            <LoginCard onLogin={onLogin} />
        </Container>
    );
}

function LoginCard({onLogin}) {
    return (
        <Cards narrow>
            <header>
                <Icon>📺</Icon>
                <h1>Focus</h1>
            </header>
            <Divider />
            <div>
                <Button primary wide onClick={onLogin}>LOG IN WITH GOOGLE</Button>
            </div>
        </Cards>
    );
}

function useAuth() {
    return gapi.auth2.getAuthInstance();
}