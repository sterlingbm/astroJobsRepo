import React from "react";
import "./styles.css";
import Form from "./Form";
import {
  Button,
  Checkbox,
  Container,
  Icon,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Label
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function About() {
  return (
    <div>
      <Header as="h1" inverted color="purple" icon>
        <Icon name="rocket" />
        <Header.Content>
          Astro Jobs
          <Header.Subheader>34,932,123 jobs & counting</Header.Subheader>
          <Header.Subheader>interstellar ai job hunting</Header.Subheader>
        </Header.Content>
      </Header>
      <br />
      <Label color="green">
        <Icon name="dollar" />
        free
      </Label>
      <Label color="teal">
        <Icon name="clock" />
        15 day expiration
      </Label>
      <Label color="blue">
        <Icon name="chat" />
        sms & email
      </Label>
      <Label color="pink">
        <Icon name="dna" />
        ai-powered
      </Label>
    </div>
  );
}
