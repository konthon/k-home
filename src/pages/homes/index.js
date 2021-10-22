import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Button,
  Center,
  Collapse,
  Container,
  Heading,
  Icon,
  IconButton,
  Stack,
  SimpleGrid,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import {
  RiAddFill,
  RiArrowDownSLine,
  RiEditFill,
  RiHome6Line,
  RiSearchLine,
} from 'react-icons/ri'

import NormalLayout from 'layouts/NormalLayout'

import HomeCard from './components/HomeCard'

const Homes = props => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <NormalLayout>
      <Container maxWidth='container.xl'>
        <Center>
          <Box
            mt={6}
            p={6}
            borderRadius='lg'
            width='full'
            backgroundColor='whiteAlpha.700'
            backdropFilter='blur(20px) saturate(180%)'
          >
            <Stack
              direction={{ base: 'column', md: 'row' }}
              justifyContent='space-between'
              alignItems={{ base: 'flex-start', md: 'center' }}
              mb={3}
            >
              <Box>
                <Heading as='h1'>Homes</Heading>
                <Text>Select your home to manage</Text>
              </Box>
              <Stack direction='row'>
                <Tooltip label='Search'>
                  <IconButton icon={<RiSearchLine />} aria-label='Search' />
                </Tooltip>
                <Tooltip label='Edit'>
                  <IconButton icon={<RiEditFill />} aria-label='Edit' />
                </Tooltip>
                <Tooltip label='Add a new home'>
                  <IconButton
                    icon={<RiAddFill />}
                    aria-label='Add a home'
                    colorScheme='teal'
                  />
                </Tooltip>
              </Stack>
            </Stack>
            <Box
              height='300px'
              borderColor='gray.500'
              borderWidth='2px'
              borderStyle='dashed'
              borderRadius='lg'
            >
              <Center height='full'>
                <Box color='gray.500' textAlign='center'>
                  <Icon as={RiHome6Line} boxSize='60px' />
                  <Text fontWeight={600}>Favorite Homes</Text>
                  <Text>Drop your home here / add from menu</Text>
                </Box>
              </Center>
            </Box>
            <Button
              onClick={onToggle}
              variant='ghost'
              isFullWidth
              mt={3}
              rightIcon={
                <Icon
                  as={RiArrowDownSLine}
                  transform={isOpen ? 'rotate(180deg)' : null}
                />
              }
            >
              All Homes
            </Button>
            <Collapse in={isOpen}>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4} mt={3}>
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
              </SimpleGrid>
            </Collapse>
          </Box>
        </Center>
      </Container>
    </NormalLayout>
  )
}

Homes.propTypes = {}

export default Homes
