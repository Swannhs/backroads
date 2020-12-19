import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import Button from "../components/examples/Button"
import { Link } from "gatsby"
import About from "../components/home/About"
import Services from "../components/home/Services"


const home = () => {
  return (
    <>
      <Layout>
        <SimpleHero>
          <Banner title="continue exploring" info="The quitter you become the you become able to hear">
            Nothing is Impossible
            <Button>
              <button className="buttons btn-hover color-1">
                  <Link to='/tours'>
                    Explore
                  </Link>
              </button>
            </Button>
          </Banner>
        </SimpleHero>
        <About/>
        <Services/>
      </Layout>
    </>
  )
}
export default home