import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const blog = () => {
  return(
    <Layout>
      hello from blog<Link to='/'>Back home</Link>
    </Layout>
  )
}
export default blog;