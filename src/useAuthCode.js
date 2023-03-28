import { useEffect, useState } from "react";
import axios from "axios";

export default function useAuthCode(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post('http://localhost:3001/login/', {
            code,
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            console.log(res.data)
            window.history.pushState({}, null, "/")
        })
    }, [code])

useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(async () => {
        axios.post('http://localhost:3001/refresh/', {
            refreshToken,
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setExpiresIn(res.data.expiresIn)
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
}, [refreshToken, expiresIn])

return accessToken
}
