import * as React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout"


const Header = styled.h1`
  fonst-family:"Franklin Gothic Medium",'Arial Narrow', Arial, sans-serif`
// markup
const IndexPage = () => {
  return (
    <Layout>
      <Header>home</Header>
    </Layout>
  )
}

export default IndexPage
