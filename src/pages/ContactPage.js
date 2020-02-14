import React from "react";
import MyForm from "../components/MyForm";
import Hero from "../components/Hero";
import Content from "../components/Content";

const ContactPage = props => {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <MyForm />
      </Content>
    </div>
  );
};

export default ContactPage;
