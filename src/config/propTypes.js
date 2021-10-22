import PropTypes from 'prop-types'

export const ChildProp = PropTypes.node
export const ChildrenProp = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node),
])
