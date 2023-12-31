import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://dev-8mti7gqox7uzcewe.us.auth0.com/api/v2/",
    issuerBaseURL: "https://dev-8mti7gqox7uzcewe.us.auth0.com",
    tokenSigningAlg: "RS256"
    
})

export default jwtCheck