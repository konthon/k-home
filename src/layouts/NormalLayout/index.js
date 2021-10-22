import React from 'react'
import PropTypes from 'prop-types'
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import { RiFeedbackLine, RiMailAddLine } from 'react-icons/ri'

import { ChildrenProp } from 'config/propTypes'

import ModalReportBug from 'components/ModalReportBug'

const NormalLayout = props => {
  const { children } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box
        minHeight='100vh'
        backgroundImage='/assets/images/backgrounds/background-day-livingroom-1.jpg'
        backgroundPosition='center center'
        backgroundSize='cover'
        backgroundAttachment='fixed'
      >
        <Stack
          as='header'
          position='sticky'
          top={0}
          left={0}
          right={0}
          zIndex='sticky'
          py={2}
          px={4}
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          boxShadow='lg'
          backgroundColor='whiteAlpha.700'
          backdropFilter='blur(20px) saturate(180%)'
        >
          <Stack direction='row' as='nav'>
            <Text fontWeight={700}>KHome</Text>
            <Text>Homes</Text>
            <Text>People</Text>
          </Stack>
          <Avatar name='User' />
        </Stack>
        <Box as='main'>{children}</Box>
        <Stack
          as='footer'
          direction='row'
          justifyContent='center'
          alignItems='center'
          py={3}
        >
          <Tooltip label='Contact developer'>
            <IconButton
              icon={<RiMailAddLine />}
              aria-label='Contact developer'
              variant='ghost'
              backdropFilter='blur(20px) saturate(180%)'
            />
          </Tooltip>
          <Tooltip label='Report a bug'>
            <IconButton
              onClick={onOpen}
              icon={<RiFeedbackLine />}
              aria-label='Report a bug'
              variant='ghost'
              backdropFilter='blur(20px) saturate(180%)'
            />
          </Tooltip>
        </Stack>
      </Box>
      <ModalReportBug isOpen={isOpen} onClose={onClose} />
    </>
  )
}

NormalLayout.defaultProps = {
  children: null,
}
NormalLayout.propTypes = {
  children: ChildrenProp,
}

export default NormalLayout
