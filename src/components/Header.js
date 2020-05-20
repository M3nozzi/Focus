import React from 'react';
import styled from 'styled-components';

import Button  from "./styles/Button";
import { gapi } from 'gapi-script';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
  
`;

export const HeaderText = styled.h1`
    margin: 0.25rem 0;
`;

export const HeaderActions = styled.div`
    position: absolute;
    right: 1rem;
    top: 0.25rem;
    bottom: 0;
`; 

// function useAuth() {
//     return gapi.auth2.getAuthInstance();
// }

// export function SignoutButton() {
//     const auth = useAuth()

//     const signOut = React.useCallback(() => auth.signOut().then(() => {
//         // Refresh after signout
//         window.location.reload();
//     }), []);

//     return (
//         <Button inverted onClick={signOut}>Sign Out</Button>
//     );
// }

export function Header() {
    
    return (
        <Container>
            <HeaderText> Focus </HeaderText>
            <HeaderActions>
                {/* <SignoutButton /> */}
            </HeaderActions>
        </Container>
    )
}