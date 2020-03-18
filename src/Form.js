import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Container,
  Input,
  Icon,
  Form,
  Rating,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Label
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useForm } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";

const distanceInMiles = [
  { key: "ten", text: "10 miles", value: 10 },
  { key: "twentyFive", text: "25 miles", value: 25 },
  { key: "fifty", text: "50 miles", value: 50 },
  { key: "onehundred", text: "100 miles", value: 50 }
];

const FindJobForm = () => {
  const [hasError, setErrors] = useState(false);
  const [giphyResonse, setGiphyResponse] = useState({});

  const { register, handleSubmit, setValue, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  useEffect(() => {}, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />

      <Form inverted onSubmit={handleSubmit(onSubmit)}>
        <Form.Group widths="equal">
          <RHFInput
            as={
              <Form.Input
                size="large"
                fluid
                label="First name"
                placeholder="First name"
              />
            }
            name="firstName"
            setValue={setValue}
            register={register({ required: true, maxLength: 80 })}
          />
          <RHFInput
            as={
              <Form.Input
                size="large"
                fluid
                label="Last name"
                placeholder="Last name"
              />
            }
            name="lastName"
            setValue={setValue}
            register={register({ required: true, maxLength: 80 })}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <RHFInput
            as={
              <Form.Input
                size="large"
                fluid
                label="Phone"
                placeholder="(999)-123-4567"
              />
            }
            name="phone"
            register={register({ required: true, maxLength: 80 })}
            setValue={setValue}
          />
          <RHFInput
            as={
              <Form.Input
                size="large"
                fluid
                label="Email"
                placeholder="hey@astrojobs.com"
              />
            }
            name="email"
            register={register({ required: true, maxLength: 80 })}
            setValue={setValue}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <RHFInput
            as={
              <Form.Input
                fluid
                label="Current Location"
                placeholder="Detroit, Michigan"
              />
            }
            name="currentLocation"
            register={register({ required: true, maxLength: 80 })}
            setValue={setValue}
          />
          <RHFInput
            as={
              <Form.Select
                fluid
                label="Travel Distance"
                options={distanceInMiles}
                placeholder="4,324,765 miles away"
              />
            }
            name="travelDistance"
            register={register({ required: true })}
            setValue={setValue}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <RHFInput
            as={
              <Form.Input
                fluid
                label="Salary"
                labelPosition="right"
                size="large"
                type="text"
                placeholder="134,000"
              >
                <Label color="green" basic>
                  $
                </Label>
                <input />
              </Form.Input>
            }
            name="salary"
            register={register({ required: true })}
            setValue={setValue}
          />
        </Form.Group>
        <RHFInput
          as={
            <Form.TextArea
              label="What is your experience?"
              placeholder="I am a professional interdimensional traveller with 1200 years of experience in saving the world from immenient descruction. I am well versed in 234 alien languages and can synthesize quantum nuclear matter into solid gold with my eyeballs. "
            />
          }
          name="experience"
          register={register({ required: true, maxLength: 80 })}
          setValue={setValue}
        />
        <RHFInput
          as={
            <Form.TextArea
              label="What job do you want?"
              placeholder="I am seeking an employer of substantial means to fund my next mission in harnessing the quark energy of black holes to begin cloning multiple realities of my best life. I look forward to learning space tai-chi and developing new skills in mind control while supporting my colleagues in their endeavors for whold domination. Also unlimited PTO and catereed lunches...  "
            />
          }
          name="jobDescription"
          register={register({ required: true, maxLength: 80 })}
          setValue={setValue}
        />

        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button size="massive" color="purple">
          {" "}
          <Icon name="space shuttle" /> Launch!
        </Form.Button>
      </Form>
    </div>
  );
};

export default FindJobForm;
