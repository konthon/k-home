import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, Tooltip, useToast } from '@chakra-ui/react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { RiGoogleFill } from 'react-icons/ri'

const provider = new GoogleAuthProvider()

const LoginGoogle = props => {
  const auth = getAuth()
  const toast = useToast()

  const onSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
      console.log(result, token, user)
    } catch (error) {
      const code = error?.code || error
      if (error.email) {
        toast({
          status: 'error',
          title: 'Error [Credential]',
          description: 'This email has been used',
        })
      }
      const credential = GoogleAuthProvider.credentialFromError(error)
      switch (code) {
        case 'auth/popup-closed-by-user':
          toast({
            status: 'warning',
            title: 'Warning [Popup]',
            description: 'You closed the sign-in popup',
          })
          break

        default:
          toast({
            status: 'error',
            title: 'Error',
            description: error?.message || error,
          })
          break
      }
    }
  }

  return (
    <Tooltip label='Sign in with Google'>
      <IconButton
        icon={<RiGoogleFill />}
        aria-label='Sign in with Google'
        onClick={onSignIn}
      />
    </Tooltip>
  )
}

LoginGoogle.propTypes = {}

export default LoginGoogle
