import { Alert, AlertIcon, Box } from "@chakra-ui/react";

export const MensajeLogueError = ({ error }) => {
  return (
    <Box
      width="100%"
      display={"flex"}
      justifyContent="center"
      position="absolute"
      top={"77%"}
    >
      {error ? (
        <Alert
          status="error"
          display="flex"
          justifyContent="flex-end"
          width={"auto"}
        >
          <AlertIcon />
          <b>{error?.data?.msg}</b>
        </Alert>
      ) : null}
    </Box>
  );
};
