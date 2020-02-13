import React from "react";

import Axio from "../assets/images/Axio.png";
import WhereToWatch from "../assets/images/WhereTo.png";
import Fantasy from "../assets/images/Fantasy.png";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Axio",
          subTitle: "Cyber Security",
          imgSrc: Axio,
          link: "https://axio.com/",
          selected: false
        },
        {
          id: 1,
          title: "Where To Watch",
          subTitle: "Vue school project",
          imgSrc: WhereToWatch,
          link: "https://lobonode.ddns.net/WhereToWatch/",
          selected: false
        },
        {
          id: 2,
          title: "Fantasy Football",
          subTitle: "Wordpress school project",
          imgSrc: Fantasy,
          link: "https://lobonode.ddns.net/wordpress/",
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({ items });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>{" "}
      </Container>
    );
  }
}
export default Carousel;
