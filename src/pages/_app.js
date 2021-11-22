import { Amplify } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import awsConfig from '../aws-exports'

Amplify.configure(awsConfig)

export default withAuthenticator(function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
})
