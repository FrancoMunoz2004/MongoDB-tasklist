import { Box, Button, Flex, Heading, Input, Select, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useCreateUserMutation } from "../api/appi";
import { ValidEmail } from "../Login/valiEmail";
import {
  MensajeExitoso,
  MensajeRegister,
} from "../Mensajes/MensajesAccionesRegistro";

export default function SignUp() {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");
  const [
    createNewUser,
    {
      data: msgCreate,
      isError: isErrorCreatingUser,
      error: msgErrorUsercreated,
    },
  ] = useCreateUserMutation();
  const [registerErorr, setRegisterErorr] = useState(false);
  const [registerExito, setRegisterExito] = useState(false);
  const [dataUser, setDataUser] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
  });
  const [validateForm, setValidateForm] = useState({
    nombre: undefined,
    apellidos: undefined,
    email: undefined,
    password: undefined,
    passwordCheck: undefined,
  });

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.name === "nombre") {
      setValidateForm({
        ...validateForm,
        nombre: e.target.value.length > 0 ? "" : "Value is Required",
      });
    }
    if (e.target.name === "email") {
      setValidateForm({
        ...validateForm,
        email:
          e.target.value.length === 0
            ? "Value is Required"
            : ValidEmail(e.target.value)
            ? ""
            : "Email invalided",
      });
    }
    if (e.target.name === "apellidos") {
      setValidateForm({
        ...validateForm,
        apellidos: e.target.value.length === 0 ? "Value is Required" : "",
      });
    }
    if (e.target.name === "password") {
      setDataUser({
        ...dataUser,
        password: e.target.value,
      });
    }
    if (e.target.name === "checkPassword") {
      setValidateForm({
        ...validateForm,
        passwordCheck:
          e.target.value !== dataUser.password ? "Password does not match" : "",
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const apellidos = e.target.apellidos.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createNewUser({
      nombre,
      apellidos,
      email,
      password,
    });
    setTimeout(() => {
      setRegisterErorr(true);
      setTimeout(() => {
        setRegisterErorr(false);
      }, 1000);
    }, 0);
    setTimeout(() => {
      setRegisterExito(true);
      e.target.reset();
      setTimeout(() => {
        setRegisterExito(false);
      }, 1000);
    }, 0);
  };

  useEffect(() => {
    if (dataUser.password.length >= 0) {
      setValidateForm((validateForm) => {
        return {
          ...validateForm,
          password:
            dataUser.password.length < 8 && dataUser.password.length > 0
              ? "The password must be at least 8 characters long"
              : dataUser.password.length === 0
              ? "value is required"
              : "",
        };
      });
    }
  }, [dataUser]);
  const isValidedForm = Object.keys(validateForm).every(
    (key) => validateForm[key] === ""
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
            maxWidth: "470px",
            boxShadow: "0 0.1rem 0.3rem rgb(191 191 191)",
            borderRadius: "5px",
            opacity: "0.9",
          }}
          onSubmit={handleSubmit}
          id="form"
        >
          <Flex direction="column" p={12} gap={5} bg={bg}>
            <Heading mb={6} textAlign="center">
              SIGN UP
            </Heading>
            <Box>
              
              <Input
                placeholder="Nombres"
                name="nombre"
                type="text"
                variant="filled"
                onChange={handleChange}
              />
              <span
                style={{ color: "red", width: "100%", pl: "5px" }}
                role={"alert"}
              >
                {validateForm.nombre}
              </span>
            </Box>
            <Box>
              <Input
                placeholder="Apellidos"
                name="apellidos"
                type="text"
                variant="filled"
                onChange={handleChange}
              />
              <span
                style={{ color: "red", width: "100%", pl: "5px" }}
                role={"alert"}
              >
                {validateForm.apellidos}
              </span>
            </Box>
            <Box>
              <Input
                placeholder="Email"
                name="email"
                type="email"
                variant="filled"
                onChange={handleChange}
              />
              <span
                style={{ color: "red", width: "100%", pl: "5px" }}
                role={"alert"}
              >
                {validateForm.email}
              </span>
            </Box>
            <Box>
              <Input
                placeholder="Password"
                name="password"
                type="password"
                variant="filled"
                onChange={handleChange}
              />
              <span
                style={{ color: "red", width: "100%", pl: "5px" }}
                role={"alert"}
              >
                {validateForm.password}
              </span>
            </Box>
            <Box>
              <Input
                placeholder="Check password"
                name="checkPassword"
                type="password"
                variant="filled"
                onChange={handleChange}
              />
              <span
                style={{ color: "red", width: "100%", pl: "5px" }}
                role={"alert"}
              >
                {validateForm.passwordCheck}
              </span>
            </Box>
            <Button
              isDisabled={!isValidedForm}
              type="submit"
              colorScheme="facebook"
              mb={5}
            >
              Sign Up
            </Button>
          </Flex>
        </form>
      </Flex>
      {registerErorr ? (
        <MensajeRegister
          dataUser={dataUser}
          msgErrorUsercreated={msgErrorUsercreated}
        />
      ) : (
        <></>
      )}
      {registerExito ? <MensajeExitoso msgCreate={msgCreate} /> : <></>}
    </>
  );
}
