import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import awsConfig from '../aws-exports'
const [{ name: API_NAME }] = awsConfig.aws_cloud_logic_custom

async function get(path, options = { response: true }) {
  return await API.get(API_NAME, path, options)
}

export default function HomePage(props) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  const getData = async () => {
    if (!isLoading) setIsLoading(true)
    try {
      setData(await get('/hello'))
    } catch (error) {
      console.error('Unable to fetch hello', error)
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section>
      <h1>Hello from the home page</h1>
      <button onClick={() => getData()}>Reload data</button>
      {isLoading && <p>Loading...</p>}
      {error && (
        <pre>
          <code>{JSON.stringify(error, null, 2)}</code>
        </pre>
      )}
      {!isLoading && data && (
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )}
    </section>
  )
}
