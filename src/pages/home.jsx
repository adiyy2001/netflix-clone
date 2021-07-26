import React from "react";
import { FooterContainer } from "../containers/footer.container";
import { JumbotronContainer } from "../containers/jumbotron.container";
import { FaqsContainer } from "../containers/faqs.container";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
