import React from "react";
import SignUpBG from "./signup-bg.js";
import SignInBG from "./signin-bg.js";
import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <SignUpBG />
        <SignInBG />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
