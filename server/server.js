const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    console.log(refreshToken);
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/callback/',
        clientId: '066f1f0b24c14a97aaf08e25ba339b9e',
        clientSecret: 'f7f19d75bf664863982cd5d841507037',
        refreshToken
    });
    // clientId, clientSecret and refreshToken has been set on the api object previous to this call.
spotifyApi.refreshAccessToken().then(
    (data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn
      })
  
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    }).catch(() => {
        res.sendStatus(400)
    })
});

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
    .catch((err) => {
        console.log(err)
        res.sendStatus(400)
    });
    console.log(code)
});

app.listen(3001);

