import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL = "https://accounts.spotify.com/authorize?response_type=code&client_id=066f1f0b24c14a97aaf08e25ba339b9e&redirect_uri=http://localhost:3000/callback/&scope=streaming%20user-read-email%20user-read-private%20playlist-modify-public";

function Login() {

    return(
        <Container  className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}>
            <a className="btn btn-lg btn-success" href={AUTH_URL}>
                Login with Spotify
            </a>
        </Container>
    )
}

export default Login;

