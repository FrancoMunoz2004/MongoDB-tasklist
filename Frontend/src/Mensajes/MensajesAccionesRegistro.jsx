import { Alert, AlertIcon, Box } from "@chakra-ui/react";

export const MensajeRegister = ({  msgErrorUsercreated }) => {
  return (
    <Box
      width="100%"
      display={"flex"}
      justifyContent="center"
      position="absolute"
      top={"85%"}
    >
      {msgErrorUsercreated  ? (
      <Alert
      status="error"
      display="flex"
      justifyContent="flex-end"
      width={"auto"}
    >
      <AlertIcon />
      <>{msgErrorUsercreated?.data?.msg}</>
    </Alert>
      ) : (
        null
      )}
    </Box>
  );
};
export const MensajeExitoso = ({  msgCreate }) => {
return (
  <Box
    width="100%"
    display={"flex"}
    justifyContent="center"
    position="absolute"
    top={"85%"}
  >
    {msgCreate  ? (
    <Alert
    status="success"
    display="flex"
    justifyContent="flex-end"
    width={"auto"}
  >
    <AlertIcon />
    <>{msgCreate.msg}</>
  </Alert>
    ) : (
      null
    )}
  </Box>
);
};