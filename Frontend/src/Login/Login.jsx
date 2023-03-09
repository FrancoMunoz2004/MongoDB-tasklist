import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../api/apiSustand";
import { useGetUserCheckedQuery } from "../api/appi";
import { MensajeLogueError } from "../Mensajes/MensajeAccionesLogueo";
import { ValidEmail } from "./valiEmail";
const Login = () => {
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");
  const [seePassword, setSeePassword] = useState(null);
  const [msg, setMsg] = useState(false);
  const [validatedForm, setValidatedForm] = useState({
    password: null,
    email: null,
  });
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const setProfileAuth = useAuthStore((state) => state.setProfile);
  const {
    data: userChecked,
    isError,
    error,
    isSuccess,
  } = useGetUserCheckedQuery(dataLogin);
  const onChangeForm = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
    if (e.target.name == "email") {
      setValidatedForm({
        ...validatedForm,
        email:
          e.target.value.length === 0
            ? "Value is required"
            : !ValidEmail(e.target.value)
            ? "Email not valid"
            : "",
      });
    }
    if (e.target.name === "password") {
      setDataLogin({
        ...dataLogin,
        password: e.target.value,
      });
      setValidatedForm({
        ...validatedForm,
        password: e.target.value.length < 8 ? "Password too short" : "",
      });
    }
  };
  const onChangePassword = (e) => {
    if (e.target.value.length === 0) {
      setSeePassword(null);
    } else {
      setSeePassword(false);
    }
  };
  const handleSeePassword = () => {
    if (seePassword) {
      setSeePassword(false);
    } else {
      setSeePassword(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSuccess) {
      setProfileAuth(userChecked);
      navigate("/User");
    } else {
      setTimeout(() => {
        setMsg(true);
        setTimeout(() => {
          setMsg(false);
        }, 1500);
      }, 0);
    }
  };
  const isValidedForm = Object.keys(validatedForm).every(
    (key) => validatedForm[key] === ""
  );
  return (
    <>
      <Flex
        height="93%"
        alignItems="center"
        justifyContent="center"
        backgroundImage={
          "linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(https://media.istockphoto.com/id/875247434/es/foto/pasar-de-las-manos-que-hacen-que-la-productividad.jpg?b=1&s=170667a&w=0&k=20&c=2ui0ez51wSW_sWihTkMieRposbh4aARwoWVTr6MTq0c=)"
        }
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"100% 100%"}
      >
        <form
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "340px",
            boxShadow: "0 0.1rem 0.3rem rgb(191 191 191)",
            borderRadius: "5px",
            opacity: "0.9",
          }}
          onSubmit={handleSubmit}
        >
          <Flex
            direction={"column"}
            gap={5}
            p={12}
            background={bg}
            color={color}
          >
            <Heading mb={6} textAlign="center">
              Log In
            </Heading>

            <Input
              placeholder="user@example.com"
              name="email"
              color={color}
              type={"email"}
              variant="filled"
              onChange={onChangeForm}
              autoComplete="on"
              autoFocus
            />
            <Box color="red.300">
              <b>{validatedForm.email}</b>
            </Box>
            <Flex
              direction="row"
              width="100%"
              height="100%"
              rounded={5}
              justifyContent="center"
              alignItems="center"
              _focusWithin={{
                borderColor: "#3182ce",
                border: "2px solid #3182ce",
              }}
            >
              <Input
                placeholder="*********"
                name="password"
                onChange={(e) => {
                  onChangePassword(e);
                  onChangeForm(e);
                }}
                type={seePassword ? "text" : "password"}
                variant="filled"
                width="80%"
                autoComplete="on"
                border="none"
                rounded="none"
              />
              <Box width="20%">
                {seePassword === null ? (
                  <Button
                    width="100%"
                    onClick={handleSeePassword}
                    rounded="none"
                  >
                    <AiOutlineEye />
                  </Button>
                ) : (
                  <Button
                    width="100%"
                    onClick={handleSeePassword}
                    rounded="none"
                  >
                    <AiOutlineEye />
                  </Button>
                )}
              </Box>
            </Flex>
            <Box color="red.300">
              <b>{validatedForm.password} </b>
            </Box>
            <Button
              isDisabled={!isValidedForm}
              type="submit"
              colorScheme="facebook"
              mb={5}
            >
              Log in
            </Button>
          </Flex>
        </form>
      </Flex>
      {!!msg ? <MensajeLogueError error={error} /> : ""}
    </>
  );
};

export default Login;
