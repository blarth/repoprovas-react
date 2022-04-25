import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import * as S from "./style";
import { LABELS } from "./labels";
import { Hide, View } from "grommet-icons";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import { Box, Button, Form, FormField, TextInput } from "grommet";
import api from "../../services/api";

export default function SignIn() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [reveal, setReveal] = useState(false);
  const {auth, signin} = useAuth()
  async function handleSubmit(e) {
    e.preventDefault();

    if (email === "" || password === "")
      alert("Please fill the fields");
    const user = { email, password };

    try {
       const {data} = await api.login(user);
       
       signin(data.token)

       navigate("/disciplines")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(auth) navigate("/disciplines")
  }, [])
  

  return (
    <S.Container>
      <S.WrapperImage>
        <img src={logo} alt={LABELS.ALT_IMAGE} />
      </S.WrapperImage>
      <Box width="medium" align="center">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormField name="email">
            <Box
              width="medium"
              direction="row"
              margin="large"
              align="center"
              border
            >
              <TextInput
                placeholder="Email"
                align="start"
                plain
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Box>
          </FormField>
          <FormField name="password">
            <Box
              width="medium"
              direction="row"
              margin="large"
              align="center"
              border
            >
              <TextInput
                placeholder="Password"
                plain
                type={reveal ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button
                icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
                onClick={() => setReveal(!reveal)}
              />
            </Box>
          </FormField>
          <Box direction="row" justify="between" margin={{ top: "medium" }}>
            <Button type="submit" label="Submit" primary />
            <Button
              onClick={() => {
                navigate("/");
              }}
              label="Don't have an account? Sign-up!"
              primary
            />
          </Box>
        </Form>{" "}
      </Box>
    </S.Container>
  );
}
