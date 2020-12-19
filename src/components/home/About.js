import React from "react"
import Title from "../Title"
import image from "../../../static/images/defaultBcg.jpeg"
import style from "../css/about.module.css"
import Services from "./Services"

const About = () => {
  return (
    <section className={style.about}>
      <Title title="about" subtitle="us" />
      <div className={style.aboutCenter}>
        <article className={style.aboutImg}>
          <img src={image} alt="about company" />
        </article>
        <article className={style.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form
          </p>
          <button type="button" className="btn-primary">read more</button>
        </article>
      </div>
    </section>
)
}

export default About