import React from 'react'
import PropTypes from 'prop-types'
import {
  Badge,
  Box,
  Divider,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
  Stack,
  Text,
  Tooltip,
  Wrap,
} from '@chakra-ui/react'
import {
  RiBaiduLine,
  RiCarFill,
  RiDirectionFill,
  RiFileCopyLine,
  RiHeart3Line,
  RiMoreFill,
  RiPhoneFill,
  RiLayout2Line,
  RiUser3Fill,
} from 'react-icons/ri'
import InfoBadge from './InfoBadge'

const HomeCard = props => {
  return (
    <Box
      backgroundColor='white'
      borderRadius='lg'
      boxShadow='lg'
      overflow='hidden'
      transition='transform 250ms, box-shadow 250ms'
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
    >
      <Image
        src='/assets/images/backgrounds/background-day-livingroom-1.jpg'
        height='150px'
        width='full'
        objectFit='cover'
      />
      <Box p={4}>
        <Heading size='md' isTruncated mb={1}>
          Rich Park Taopoon{' '}
          <Badge variant='solid' colorScheme='green'>
            Condo
          </Badge>
        </Heading>
        <Wrap mb={2}>
          <InfoBadge icon={RiUser3Fill} label='Resident'>
            3
          </InfoBadge>
          <InfoBadge icon={RiLayout2Line} label='Room'>
            5
          </InfoBadge>
          <InfoBadge icon={RiCarFill} label='Car'>
            2
          </InfoBadge>
          <InfoBadge icon={RiBaiduLine} label='Pet'>
            1
          </InfoBadge>
        </Wrap>
        <Text noOfLines={2}>
          410 ถนนประชาราษฎร์ สาย 2 แขวงบางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800
        </Text>
        <Divider my={2} />
        <Stack direction='row' justifyContent='space-between'>
          <Wrap>
            <Tooltip label='Contact'>
              <IconButton
                icon={<RiPhoneFill />}
                aria-label='Contact'
                size='sm'
              />
            </Tooltip>
            <Tooltip label='Get a direction'>
              <IconButton
                icon={<RiDirectionFill />}
                aria-label='Direction'
                size='sm'
              />
            </Tooltip>
          </Wrap>
          <Menu placement='top-end'>
            <MenuButton
              as={IconButton}
              icon={<RiMoreFill />}
              aria-label='More actions'
              variant='ghost'
              size='sm'
            />
            <Portal>
              <MenuList>
                <MenuItem icon={<RiFileCopyLine />}>Copy name</MenuItem>
                <MenuItem icon={<RiFileCopyLine />}>Copy address</MenuItem>
                <MenuDivider />
                <MenuItem icon={<RiHeart3Line />}>Add to favorite</MenuItem>
                <MenuDivider />
                <MenuItem>Enter this home</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </Stack>
      </Box>
    </Box>
  )
}

HomeCard.propTypes = {}

export default HomeCard
