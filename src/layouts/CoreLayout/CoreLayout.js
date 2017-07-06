import React from 'react'
import PropTypes from 'prop-types'
import Body from '../../components/Body'
import './CoreLayout.scss'

export const CoreLayout = () => (
  < Body / >
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
