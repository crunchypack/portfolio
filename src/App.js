import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";

import history from "./history";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Simon Lobo",
      headerLinks: [
        {
          title: "Home",
          path: "/"
        },
        {
          title: "About",
          path: "/about"
        },
        {
          title: "Contact",
          path: "/contact"
        }
      ],
      home: {
        title: "Enjoy your work",
        subTitle: "Creating Exciting Experiences",
        text: "My previous projects"
      },
      about: {
        title: "About me"
      },
      contact: {
        title: "Hire me"
      }
    };
  }
  render() {
    return (
      <Router history={history}>
        <Container fluid={true} className="p-0">
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text}
                />
              )}
            />
            <Route
              path="/about"
              exact
              render={() => <AboutPage title={this.state.about.title} />}
            />
            <Route
              path="/contact"
              render={() => <ContactPage title={this.state.contact.title} />}
            />
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
