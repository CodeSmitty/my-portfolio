import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.main`
  display:flex;
  flex-direction:column
  `

  const Nav = styled.nav`
  width:100%;
  height:50px;
  margin:0;
  background:transparent;
  position:absolute;
  display:flex;
  justify-content:flex-end;
  z-index:1000;
  background:black;
  
  `

  const LinkItem = styled(Link)`
  font-size:1rem;
  font-weight:600;
  color:white;
  text-decoration:none;
  margin:auto 2rem;
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