import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import awsConfig from '../aws-exports'

Amplify.configure(awsConfig)

// export default withAuthenticator(function MyApp({ Component, pageProps, ...rest }) {
//   // `rest` contains { user, signOut }
//   console.log({ Component }) // Component is undefined
//   return <Component {...pageProps} />
// })

export default function MyApp({ Component, pageProps }) {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <Component {...pageProps} />
        </main>
      )}
    </Authenticator>
  )
}
