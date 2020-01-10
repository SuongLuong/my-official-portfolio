import React from "react";
import { Container } from "components/common";
import dev from "assets/illustrations/skills.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>About</h1>
        <p>
          I'm a web developer based in Toronto, Canada with a serious passion
          for web design and love to create dynamic, intuitive websites. I like
          to work on interesting projects with good people.
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
