import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.main`
  display:flex;
  flex-direction:column
  `

  const Nav = styled.nav`
  border-bottom:1px solid #ccc
  `

  const LinkItem = styled(Link)`
  font-size:1.2rem;
  color:#333;
  text-decoration:none;
  margin:0 1rem;
  `

const Layout = ({children}) =>{
    return(
        <Wrapper>
            <Nav>
                <LinkItem to="/">Home</LinkItem>
                <LinkItem to="/project">projects</LinkItem>
                <LinkItem to="/services">services</LinkItem>
            </Nav>
            {children}
        </Wrapper>
    )
}

export default Layout;