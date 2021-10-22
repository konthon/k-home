import React from 'react'
// import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { Link as RouterLink } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  Link,
  Heading,
  Stack,
  Text,
  Tooltip,
  useToast,
} from '@chakra-ui/react'

import { RiHome6Line, RiSpam2Fill, RiUser3Fill } from 'react-icons/ri'

import LoginGoogle from 'components/authentication/login.google'

const Login = props => {
  const toast = useToast()
  const auth = getAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async data => {
    const { email, password } = data || {}
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(userCredential)
      toast({
        status: 'success',
        title: 'Success',
        description: 'Log in successfully',
      })
    } catch (error) {
      const code = error?.code || error
      switch (code) {
        case 'auth/user-not-found':
          toast({
            status: 'error',
            title: 'Error [Not found]',
            description: 'Wrong email or password',
          })
          break
        case 'auth/wrong-password':
          toast({
            status: 'error',
            title: 'Error [Credential]',
            description: 'Wrong email or password',
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
    <Box
      backgroundImage='/assets/images/backgrounds/background-day-livingroom-1.jpg'
      backgroundPosition='center center'
      backgroundSize='cover'
      backgroundColor='gray.100'
    >
      <Container maxWidth='container.xl'>
        <Stack height='100vh'>
          <Center flexGrow={1}>
            <Box
              backgroundColor='whiteAlpha.700'
              padding={{ base: 6, md: 12 }}
              borderRadius='lg'
              backdropFilter='blur(20px) saturate(180%)'
              boxShadow='lg'
              width={{ base: 'full', md: '500px' }}
            >
              <Icon as={RiHome6Line} boxSize={8} marginBottom={2} />
              <Heading as='h1' marginBottom={6}>
                KHome Manager
              </Heading>
              <Stack
                as='form'
                spacing={3}
                marginBottom={3}
                onSubmit={handleSubmit(onSubmit)}
              >
                <FormControl id='email' isInvalid={errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type='email'
                    autoComplete='email'
                    placeholder='Fill your email'
                    variant='filled'
                    {...register('email', { required: true })}
                  />
                </FormControl>
                <FormControl id='password' isInvalid={errors.password}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type='password'
                    autoComplete='current-password'
                    placeholder='Enter your password'
                    variant='filled'
                    {...register('password', { required: true })}
                  />
                </FormControl>
                <Button colorScheme='blue' isFullWidth type='submit'>
                  Log in
                </Button>
              </Stack>
              <Flex
                justifyContent='space-between'
                alignItems='center'
                color='gray.500'
              >
                <Link
                  as={RouterLink}
                  to='/auth/register'
                  display='block'
                  textAlign='end'
                >
                  Don't have an account?
                </Link>
                <Link
                  as={RouterLink}
                  to='/auth/reset-password'
                  display='block'
                  textAlign='end'
                >
                  Forgot password?
                </Link>
              </Flex>
              <Divider my={3} borderColor='gray.500' />
              <LoginGoogle />
            </Box>
          </Center>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            paddingBottom={3}
          >
            <Tooltip label='Contact developer'>
              <IconButton
                icon={<RiUser3Fill />}
                aria-label='contact'
                variant='ghost'
                backdropFilter='blur(20px) saturate(180%)'
              />
            </Tooltip>
            <Tooltip label='Report a bug'>
              <IconButton
                icon={<RiSpam2Fill />}
                aria-label='report bugs'
                variant='ghost'
                backdropFilter='blur(20px) saturate(180%)'
              />
            </Tooltip>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

Login.propTypes = {}

export default Login
