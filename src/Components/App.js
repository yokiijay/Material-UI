import React, { Fragment } from "react"
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    )
  }
}
