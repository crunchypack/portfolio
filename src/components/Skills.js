import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ReactImg from "../assets/images/React.png";
import MongoImg from "../assets/images/Mongo.png";
import VueImg from "../assets/images/Vue.png";
import NodeImg from "../assets/images/Node.png";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class Skills extends React.Component {
  getSkills = skills => {
    return skills.map(skill => {
      return (
        <Col key={skill.id}>
          <Image
            className="skill-card"
            src={skill.img}
            alt={skill.img}
            rounded
            fluid
          />
        </Col>
      );
    });
  };
  render() {
    const skills = [
      {
        id: 0,
        img: ReactImg
      },
      {
        id: 1,
        img: VueImg
      },
      {
        id: 2,
        img: MongoImg
      },
      {
        id: 3,
        img: NodeImg
      }
    ];
    return (
      <Container fluid={true}>
        <Row className="justify-content-center pt-5">
          <Col md="auto" className="m-5">
            <h3 className="font-weight-light">Some of my skills</h3>
          </Col>
        </Row>

        <Row className="justify-content-between m-5">{this.getSkills(skills)}</Row>
      </Container>
    );
  }
}

export default Skills;
