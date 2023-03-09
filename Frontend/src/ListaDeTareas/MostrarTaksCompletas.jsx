import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import ConfirmarEliminar from "./confirmarEliminar";
export default function MostratTaskCompletadas({
  dataCompletadas,
  updateEstado,
  deleteTaks,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [indexConfirm, setIndexConfirm] = useState("");
  const [indexConfirmEstado, setIndexConfirmEstado] = useState(1);
  return (
    <>
      {dataCompletadas == "" ? (
        <Box
          height={"100%"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <Heading fontFamily={"cursive"} fontWeight={700}>
            No tienes tareas Completadas
          </Heading>
        </Box>
      ) : (
        <>
          <Box
            maxWidth={"100%"}
            display="grid"
            flexDirection="column"
            gridTemplateColumns={"repeat(auto-fill, 500px)"}
            justifyItems="center"
            alignItems="center"
            gap="10px"
            position={"relative"}
            overflowY={"auto"}
            padding="10px"
          >
            {dataCompletadas?.map((tasks, i) => {
              return (
                <Card
                  maxW="sm"
                  key={i}
                  display="flex"
                  w="100%"
                  boxShadow="0px 0px 20px  #323c4626"
                  flexDirection={"column"}
                  padding={"10px"}
                  marginBottom="10px"
                  bg="#90b7db"
                  gap="10px"
                >
                  <CardBody display={"flex"} justifyContent="center">
                    <Box>
                      <Image
                        src="https://img.freepik.com/psd-premium/icono-lista-tareas-bloc-notas-lista-tareas-completada-renderizado-3d-lapiz-psd-premium_471402-258.jpg?w=2000"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                        boxSize="150px"
                      />
                    </Box>
                  </CardBody>
                  <Box>
                    <Text
                      fontWeight={"700"}
                      fontFamily={"cursive"}
                      fontSize="20px"
                    >
                      Tarea:
                    </Text>
                    <Text>{tasks.tarea}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight={"700"}>Descripcion:</Text>
                    <Text>{tasks.descripcion}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight={"700"}>Estado de la tarea:</Text>
                    <Text color="green" fontWeight="bold">
                      Completada
                    </Text>
                  </Box>
                  <Box display={"flex"} justifyContent="flex-end" gap="10px">
                    <Button
                      size="sm"
                      colorScheme={"red"}
                      onClick={() => {
                        onOpen();
                        setIndexConfirm(tasks._id);
                        setIndexConfirmEstado(2)
                      }}
                    >
                      <AiFillDelete />
                    </Button>
                    <Button size="sm" colorScheme={"facebook"} isDisabled>
                      <AiFillEdit />
                    </Button>
                  </Box>
                  {onOpen ? (
                    indexConfirm == tasks._id ? (
                      <ConfirmarEliminar
                        isOpen={isOpen}
                        indexConfirmEstado={indexConfirmEstado}
                        onClose={onClose}
                        tasks={tasks}
                        deleteTaks={deleteTaks}
                      />
                    ) : null
                  ) : null}
                </Card>
              );
            })}
          </Box>
        </>
      )}
    </>
  );
}
