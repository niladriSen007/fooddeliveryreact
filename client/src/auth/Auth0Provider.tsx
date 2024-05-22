import { ReactNode } from "react"
import {
  AppState,
  Auth0Provider as AuthProvider,
  User,
} from "@auth0/auth0-react"
import { useCreateUser } from "@/api/UserApi"
export const Auth0Provider = ({ children }: { children: ReactNode }) => {
  const { createUser } = useCreateUser()
  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL
  /*   const audience = import.meta.env.VITE_AUTH0_AUDIENCE */

  if (!domain || !clientId || !redirectUri) {
    throw new Error("unable to initialise auth")
  }

  return (
    <AuthProvider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        /*  audience, */
      }}
      onRedirectCallback={(_appState?: AppState, user?: User) => {
        if (user?.sub && user?.email) {
          createUser({ auth0Id: user.sub, email: user.email })
        }
      }}
    >
      {children}
    </AuthProvider>
  )
}
