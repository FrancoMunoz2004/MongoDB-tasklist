import { Box, Heading, Img, Text } from "@chakra-ui/react";

function Contact() {
  return (
    <>
      <Box
        width="100%"
        height="88%"
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flexDirection="column"
          height="90%"
          width="80%"
          opacity={"0.8"}
        >
          <Img
            src="https://www.inesem.es/revistadigital/gestion-empresarial/files/2016/05/lista-de-tareas-pendientes.jpg"
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
              Sobre Nosotros
            </Heading>
            <Text>
              La apliacion de tareas nos ayuda a listar nuestras taras de forma
              ordenada y asi poder tener una agenda de las tareas que hemos
              realizados con el nombre y descripcion
            </Text>
            <Text fontFamily={"cursive"} fontWeight={700}>
              Simplificación de la administración de tareas
            </Text>
            <Text>
              Desglosa las tareas en pasos simples, agrega fechas de vencimiento
              y define avisos para llevar un seguimiento de tu lista de tareas
              diarias.
            </Text>
            <Text textAlign={"end"} fontWeight={700}>
              Autor: Franco Muñoz, Desarrollador de Software.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Contact;
