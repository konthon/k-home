import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

const ModalReportBug = props => {
  const { isOpen, onClose, ...restProps } = props
  const initialRef = useRef()
  const { pathname } = useLocation()
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      {...restProps}
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Report a bug</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <FormControl isRequired>
              <FormLabel>Subject</FormLabel>
              <Input placeholder='Specify your information' ref={initialRef} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                rows={5}
                placeholder='Describe what you found clearly, If there are steps to reproduce, please provide them in details.'
              />
            </FormControl>
            <FormControl>
              <FormLabel>Upload attachments</FormLabel>
              <Input type='file' multiple accept='image/*, video/*' />
              <FormHelperText>
                For more clear in your explaination. (not necessary)
              </FormHelperText>
            </FormControl>
            <FormControl isDisabled hidden>
              <FormLabel>From path</FormLabel>
              <Input defaultValue={pathname} />
            </FormControl>
            <div>username, time, contact name, contact mail</div>
          </Stack>
          <Text fontSize='xs' color='gray.500'>
            By clicking "Send", I consented to share my username, timestamp, and
            other infomation I have filled in.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button mr={2}>Cancel</Button>
          <Button colorScheme='orange' type='submit'>
            Send
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

ModalReportBug.defaultProps = {
  onClose: () => {},
}
ModalReportBug.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
}

export default ModalReportBug
