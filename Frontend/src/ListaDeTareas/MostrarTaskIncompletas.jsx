import {
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import ConfirmarEliminar from "./confirmarEliminar";
export default function MostratTaskIncompletas({
  dataIncompletas,
  updateTask,
  setActualizar,
  actualizar,
  deleteTaks,
  updateEstado,
}) {
  const [tarea, setTarea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [indexEdit, setIndexEdit] = useState("");
  const [indexConfirmEstado, setIndexConfirmEstado] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [indexConfirm, setIndexConfirm] = useState("");
  const EditTarea = (e) => {
    e.preventDefault();
    setTarea(e.target.value);
  };
  const EditDescripcion = (e) => {
    e.preventDefault();
    setDescripcion(e.target.value);
  };
  return (
    <>
      {dataIncompletas == "" ? (
        <Box
          height={"100%"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <Heading fontFamily={"cursive"} fontWeight={700}>
            No tienes tareas Incompletas
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
            {dataIncompletas?.map((tasks, i) => {
              return indexEdit == tasks._id && actualizar ? (
                <Card
                  maxW="sm"
                  boxShadow="0px 0px 20px  #323c4626"
                  key={i}
                  display="flex"
                  w="100%"
                  flexDirection={"column"}
                  padding={"10px"}
                  marginBottom="10px"
                  gap="10px"
                >
                  <CardBody display={"flex"} justifyContent="center">
                    <Box>
                      <Image
                        src="https://img.freepik.com/psd-premium/icono-lista-tareas-bloc-notas-lista-tareas-completada-renderizado-3d-lapiz-psd-premium_471402-258.jpg?w=2000"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                        boxSize="130px"
                      />
                    </Box>
                  </CardBody>
                  <Box>
                    <Text fontWeight={"700"} fontFamily={"cursive"}>
                      Tarea:
                    </Text>
                    <Input
                      value={tarea}
                      name="tarea"
                      onChange={EditTarea}
                    ></Input>
                  </Box>
                  <Box>
                    <Text fontWeight={"700"}>Descripcion:</Text>
                    <Textarea
                      value={descripcion}
                      name="descripcion"
                      onChange={EditDescripcion}
                    ></Textarea>
                  </Box>
                  <Box display={"flex"} justifyContent="flex-end" gap="10px">
                    <Button
                      size="sm"
                      onClick={() => {
                        setActualizar(!actualizar);
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      size="sm"
                      type="submit"
                      colorScheme={"facebook"}
                      onClick={(e) => {
                        updateTask(tasks._id, tarea, descripcion);
                      }}
                    >
                      Save
                    </Button>
                  </Box>
                </Card>
              ) : (
                <Card
                  maxW="sm"
                  key={i}
                  boxShadow="0px 0px 20px  #323c4626"
                  display="flex"
                  w="100%"
                  flexDirection={"column"}
                  padding={"10px"}
                  marginBottom="10px"
                  gap="10px"
                >
                  <CardBody display={"flex"} justifyContent="center">
                    <Box>
                      <Image
                        src="https://img.freepik.com/psd-premium/icono-lista-tareas-bloc-notas-lista-tareas-completada-renderizado-3d-lapiz-psd-premium_471402-258.jpg?w=2000"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                        boxSize="130px"
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

                    <Text color="red" fontWeight="bold">
                      Incompleta
                    </Text>
                  </Box>
                  <Box>
                    <Text fontWeight={"700"}>Creado en:</Text>
                    <Text>{tasks.FechaRegistro}</Text>
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
                    <Button
                      size="sm"
                      colorScheme={"facebook"}
                      onClick={() => {
                        setActualizar(!actualizar);
                        setIndexEdit(tasks._id);
                        setDescripcion(tasks.descripcion);
                        setTarea(tasks.tarea);
                      }}
                    >
                      <AiFillEdit />
                    </Button>
                    {tasks.estado == false ? (
                            <Button
                            size="sm"
                            colorScheme={"green"}
                              onClick={() => {
                                setIndexConfirmEstado(1)
                                setIndexConfirm(tasks._id);
                                onOpen()
                              }}
                            >
                              Completar
                            </Button>
                          ) : null}
                  </Box>
                  {onOpen ? (
                    indexConfirm == tasks._id ? (
                      <ConfirmarEliminar
                        isOpen={isOpen}
                        indexConfirmEstado={indexConfirmEstado}
                        updateEstado={updateEstado}
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
