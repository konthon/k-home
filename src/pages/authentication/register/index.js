import React from 'react'
// import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useHistory, Link as RouterLink } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
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

import {
  RiArrowLeftSLine,
  RiHome6Line,
  RiSpam2Fill,
  RiUser3Fill,
} from 'react-icons/ri'

const Register = props => {
  const history = useHistory()
  const toast = useToast()
  const auth = getAuth()

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm()
  const watchPassword = watch('password', '')

  const onSubmit = async data => {
    const { email, password } = data || {}
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(userCredential)
      toast({
        status: 'success',
        title: 'Success',
        description: 'Redirecting to login...',
      })
    } catch (error) {
      const code = error?.code || error
      switch (code) {
        case 'auth/email-already-in-use':
          toast({
            status: 'error',
            title: 'Error',
            description: 'This email is already in used',
          })
          setError('email', {
            type: 'isDuplicate',
            message: 'This email is already in used',
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
      backgroundImage='/images/backgrounds/background-day-livingroom-1.jpg'
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
              <Heading as='h1'>KHome Manager</Heading>
              <Text
                color='blue.700'
                fontWeight={700}
                fontSize='xl'
                marginBottom={6}
              >
                Register
              </Text>
              <Stack
                as='form'
                spacing={3}
                marginBottom={3}
                onSubmit={handleSubmit(onSubmit)}
              >
                <FormControl id='email' isRequired isInvalid={errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type='email'
                    autoComplete='email'
                    placeholder='Fill your email'
                    variant='filled'
                    {...register('email', { required: true })}
                  />
                  <FormErrorMessage>Please enter your email</FormErrorMessage>
                </FormControl>
                <FormControl
                  id='password'
                  isRequired
                  isInvalid={errors.password || errors.confirmPassword}
                >
                  <FormLabel>New Password</FormLabel>
                  <Input
                    type='password'
                    autoComplete='new-password'
                    placeholder='Enter your password'
                    variant='filled'
                    {...register('password', {
                      required: true,
                      minLength: 8,
                    })}
                  />
                </FormControl>
                <FormControl
                  id='confirmPassword'
                  isRequired
                  isInvalid={errors.password || errors.confirmPassword}
                >
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    type='password'
                    autoComplete='new-password'
                    placeholder='Re-enter your password'
                    variant='filled'
                    {...register('confirmPassword', {
                      required: true,
                      minLength: 8,
                      validate: { isMatch: value => value === watchPassword },
                    })}
                  />
                  {(errors.password?.type === 'required' ||
                    errors.confirmPassword?.type === 'required') && (
                    <FormErrorMessage>Password is required!</FormErrorMessage>
                  )}
                  {(errors.password?.type === 'minLength' ||
                    errors.confirmPassword?.type === 'minLength') && (
                    <FormErrorMessage>
                      Password must more than 8 characters!
                    </FormErrorMessage>
                  )}
                  {errors.confirmPassword?.type === 'isMatch' && (
                    <FormErrorMessage>
                      Password is not matched!
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Button colorScheme='blue' isFullWidth type='submit'>
                  Register
                </Button>
              </Stack>
              <Flex
                justifyContent='space-between'
                alignItems='center'
                color='gray.500'
              >
                <Link onClick={() => history.goBack()} textAlign='end'>
                  <Icon as={RiArrowLeftSLine} /> Back to Login
                </Link>
                <Link as={RouterLink} to='/reset-password' textAlign='end'>
                  Forgot password?
                </Link>
              </Flex>
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

Register.propTypes = {}

export default Register
