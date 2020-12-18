import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"

const home = () => {
  return (
    <>
      <Layout>
        <SimpleHero>
          <Banner title="continue exploring" info="The quitter you become the you become able to hear">
            <Link to="/tours" className="btn-white">
              Explore
            </Link>
          </Banner>
        </SimpleHero>
      </Layout>
    </>
  )
}
export default home