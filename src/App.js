import React from "react";
import "./styles.css";
import Form from "./Form";
import About from "./About";
import TermsAndConditions from "./TermsAndConditions";
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

export default function App() {
  return (
    <div className="App">
      <Segment inverted>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 950 }}>
            <About />
            <Form />
            <TermsAndConditions />
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}
