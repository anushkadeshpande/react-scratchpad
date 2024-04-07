import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  // useRouteError is a hook provided by react-router-dom to return error information

  const err = useRouteError()
  console.log(err)
  return (
    <>
      <h1>Oops! Something went wrong!</h1>
      <h3>{err.status} {err.statusText}</h3>
      <h3>{err.data}</h3>
    </>
  )
}

export default Error