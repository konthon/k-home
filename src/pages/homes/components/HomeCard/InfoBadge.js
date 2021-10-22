import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Icon, Tooltip } from '@chakra-ui/react'

// import { ChildrenProp } from 'config/propTypes'

const InfoBadge = props => {
  const { children, icon, label, variant, ...restProps } = props
  return (
    <Tooltip label={`${label}: ${children}`}>
      <Badge variant={variant} {...restProps}>
        <Icon as={icon} mt={-0.5} /> {children}
      </Badge>
    </Tooltip>
  )
}

InfoBadge.defaultProps = {
  children: null,
  icon: null,
  label: null,
  variant: 'solid',
}
InfoBadge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['outline', 'solid', 'subtle']),
}

export default InfoBadge
