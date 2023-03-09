import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import React from "react";

export const MensajeTareaCreada = ({ msgExitoso }) => {
  return (
    <Box
      width="100%"
      display={"flex"}
      justifyContent="center"
      position="absolute"
      top={"85%"}
    >
      {msgExitoso ? (
        <Alert
          status="success"
          display="flex"
          justifyContent="flex-end"
          width={"auto"}
        >
          <AlertIcon />
          {msgExitoso.msg}
        </Alert>
      ) : null}
    </Box>
  );
};
export const MensajeEliminarTarea = ({ msgDeleteTask }) => {
  return (
    <Box
      width="100%"
      display={"flex"}
      justifyContent="center"
      position="absolute"
      top={"85%"}
    >
      {msgDeleteTask ? (
        <Alert
          status="success"
          display="flex"
          justifyContent="flex-end"
          width={"auto"}
        >
          <AlertIcon />
          {msgDeleteTask.msg}
        </Alert>
      ) : null}
    </Box>
  );
};
export const MensajeActualizarTarea = ({ msgUpdateTask }) => {
  return (
    <Box
      width="100%"
      display={"flex"}
      justifyContent="center"
      position="absolute"
      top={"85%"}
    >
      {msgUpdateTask ? (
        <Alert
          status="success"
          display="flex"
          justifyContent="flex-end"
          width={"auto"}
        >
          <AlertIcon />
          {msgUpdateTask.msg}
        </Alert>
      ) : null}
    </Box>
  );
};
export const MensajeActualizarEstadoTarea = ({ msgUpestadoTask }) => {
  return (
    <Box
      width="100%"
      display={"flex"}
      justifyContent="center"
      position="absolute"
      top={"85%"}
    >
      {msgUpestadoTask ? (
        <Alert
          status="info"
          display="flex"
          justifyContent="flex-end"
          width={"auto"}
        >
          <AlertIcon />
          {msgUpestadoTask.msg}
        </Alert>
      ) : null}
    </Box>
  );
};
