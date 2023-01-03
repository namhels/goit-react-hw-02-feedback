import React from 'react'
import PropTypes from 'prop-types'
import Box from 'components/Box';

const Section = ({ title, children }) =>
  <Box pb={5}>
    <Box
      pb={5}
      fontFamily='body'
      fontSize='l'
      fontWeight='bold'
      >{title}</Box>
      {children}
    </Box>;

Section.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Section