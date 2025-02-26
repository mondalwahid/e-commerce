import React from 'react'
import { ReactComponent as Logo } from "../../assets/nav-logo.svg"
import { NavContainer, NavSubcontainer } from './styles'
import Typography from '../Typography/Typography'
import colorConstants from '../../constants/colorConstants'

const Navbar = () => {
  return (
    <NavContainer>
      <NavSubcontainer>
      <Logo />
      <Typography
        text="Monk Upsell & Cross-sell"
        fontSize="16px"
        color={colorConstants?.headerGray}
        fontWeight="600"
        lineHeight="24px"
        style={{ marginLeft: "1rem" }}
      />
      </NavSubcontainer>
    </NavContainer>
  )
}

export default Navbar