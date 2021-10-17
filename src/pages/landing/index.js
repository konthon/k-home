import React from 'react'
// import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Button,
  Center,
  Container,
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
} from '@chakra-ui/react'

import { RiHome6Line, RiSpam2Fill, RiUser3Fill } from 'react-icons/ri'

const Landing = props => {
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
              <Heading as='h1' marginBottom={6}>
                KHome Manager
              </Heading>
              <Stack as='form' spacing={3} marginBottom={3}>
                <FormControl id='email'>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type='email'
                    autoComplete='email'
                    placeholder='Fill your email'
                    variant='filled'
                  />
                </FormControl>
                <FormControl id='password'>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type='password'
                    autoComplete='current-password'
                    placeholder='Enter your password'
                    variant='filled'
                  />
                </FormControl>
                {/* <Button colorScheme='blue' isFullWidth type='submit'>
                Log in
              </Button> */}
                <Button
                  as={RouterLink}
                  to='/homes'
                  colorScheme='blue'
                  isFullWidth
                >
                  Log in
                </Button>
              </Stack>
              <Flex
                justifyContent='space-between'
                alignItems='center'
                color='gray.500'
              >
                <Link as={RouterLink} to='/register' textAlign='end'>
                  Don't have an account?
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

Landing.propTypes = {}

export default Landing
