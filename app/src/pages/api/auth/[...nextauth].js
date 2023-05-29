import NextAuth from "next-auth"
import FusionAuthProvider from "next-auth/providers/fusionauth"

export const authOptions = {
    providers: [
        FusionAuthProvider({
            issuer: process.env.FUSIONAUTH_ISSUER,
            clientId: process.env.FUSIONAUTH_CLIENT_ID,
            clientSecret: process.env.FUSIONAUTH_CLIENT_SECRET,
            wellKnown: `${process.env.FUSIONAUTH_URL}/.well-known/openid-configuration/${process.env.FUSIONAUTH_TENANT_ID}`,
            tenantId: process.env.FUSIONAUTH_TENANT_ID, // Only required if you're using multi-tenancy
            client: {
                authorization_signed_response_alg: 'HS256', // Should match Tenant or Application Setting see https://github.com/FusionAuth/fusionauth-example-nextjs-single-sign-on/issues/1
                id_token_signed_response_alg: 'HS256'// Should match Tenant or Application Setting
            }
        }),
    ]
}

export default NextAuth(authOptions)
