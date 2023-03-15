const express = ('express');
const SpotifyWebApi = ('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/callback/',
        clientId: '066f1f0b24c14a97aaf08e25ba339b9e',
        clientSecret: 'f7f19d75bf664863982cd5d841507037'
    });
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            expiresIn: data.body.expires_in,
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token
        })
    })
    .catch(() => {
        res.sendStatus(400)
    });
    console.log(code)
});




//todo
//get usertoken


