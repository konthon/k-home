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

              <Button isFullWidth as={RouterLink} to='/auth/login'>
                Go to Login
              </Button>
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
