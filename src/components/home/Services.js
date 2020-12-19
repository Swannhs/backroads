import React from "react"
import Title from "../Title"
import styled from "../css/services.module.css"
import services from "../../constants/Service"

const Services = () => {
  return (
    <section className={styled.services}>
      <Title title="our" subtitle="services" />
      <div className={styled.center}>
        {
          services.map((item, index) => {
            return (
              <article key={index} className={styled.service}>
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Services