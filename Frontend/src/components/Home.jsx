import { Box, Heading, Img, Text } from "@chakra-ui/react";

function Home() {
  return (
    <>
        <Heading textAlign={"center"}>Bienvenido</Heading>
      <Box
        width="100%"
        height="88%"
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Box display={"flex"} justifyContent="center" alignItems={"center"} flexDirection="column" height="90%" width="80%" >
          <Img
            src="https://img.freepik.com/vector-premium/ilustracion-concepto-lista-tareas_270158-301.jpg?w=2000"
            boxSize="80%"
            objectFit="cover"
            width="90%"
            height="90%"
            border="1px transparent"
            transition="box-shadow 0.3s ease"
            borderRadius="5px"
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          gap={"10px"}
        >
          <Box
            width="50%"
            display={"flex"}
            justifyContent="flex-end"
            alignItems={"center"}
            flexDirection="column"
          >
            <Heading fontFamily={"cursive"}>
              Administración online de una lista de tareas
            </Heading>
            <Text>
              Una aplicación de administración de tareas verdaderamente
              multiplataforma. Tanto si estás en casa usando la aplicación de
              escritorio como si utilizas la aplicación móvil desde cualquier
              lugar, podrás acceder a tu lista de tareas y organizarte bien.
            </Text>
            <Text fontFamily={"cursive"} fontWeight={700}>
              Simplificación de la administración de tareas
            </Text>
            <Text>
              Desglosa las tareas en pasos simples, agrega fechas de vencimiento
              y define avisos para llevar un seguimiento de tu lista de tareas
              diarias.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Home;
