import NextAuth from 'next-auth'
import Providers from 'nex-auth/providers'

export default NextAuth({
    providers: [
        Providers.Spotify({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),
    ],
    database: process.env.DB_URL,
    session: {
        jwt: true
    },
    jwt: {
        secret: 'randomstring'
    },
})