import React from 'react'
import Page from "./cartComponent"
import { auth } from '../../../auth'

const pament = async () => {
  const session = await auth()
  return (
    <div>
        <Page loginuser={session} />
    </div>
  )
}

export default pament