import {
  Box,
  Button,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuthStore } from "../api/apiSustand";
import {
  useDeleteTasksMutation,
  useGetTasksCompletasQuery,
  useGetTasksIncompletasQuery,
  useGetTasksQuery,
  usePostTasksMutation,
  useUptdateTasksMutation,
  useUptestadoTasksMutation,
} from "../api/appi";
import "../App.css";
import {
  MensajeActualizarEstadoTarea,
  MensajeActualizarTarea,
  MensajeEliminarTarea,
  MensajeTareaCreada,
} from "../Mensajes/MensajeAccionesTareas";
import AgregarTareas from "./AgregarTareas";
import MostratTaskCompletadas from "./MostrarTaksCompletas";
import MostratTaskIncompletas from "./MostrarTaskIncompletas";
import MostratTask from "./MostratTask";
import { ChevronDownIcon } from "@chakra-ui/icons";
function Tareas() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputs, setInputs] = useState({});
  const [todasTask, setTodasTaks] = useState(true);
  const [actualizar, setActualizar] = useState(false);
  const [completadas, setCompletadas] = useState(false);
  const [incompletas, setIncompletas] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [megDeleteExito, setMegDeleteExito] = useState(false);
  const [megUpdateExito, setMegUpdateExito] = useState(false);
  const [megUpdateEstadoExito, setMegUpdateEstadoExito] = useState(false);
  const [msgCreateExitoso, setMsgCreateExitoso] = useState(false);
  const profileAuth = useAuthStore((state) => state.profile);

  //---------Obtener Tareas----------//
  const { data } = useGetTasksQuery(profileAuth?.token);

  //---------Actualizar Tareas----------//
  const [UpdateTask, { data: msgUpdateTask }] = useUptdateTasksMutation();

  //---------Obtener Completas----------//
  const { data: dataCompletadas } = useGetTasksCompletasQuery(
    profileAuth?.token
  );

  //---------Obtener Incompleta----------//
  const { data: dataIncompletas } = useGetTasksIncompletasQuery(
    profileAuth?.token
  );

  //---------Crear Tareas----------//
  const [crateTaks, { data: msgExitoso }] = usePostTasksMutation();

  //---------Actualizar Estado de Tareas----------//
  const [UpdateEstadoTask, { data: msgUpestadoTask }] =
    useUptestadoTasksMutation();

  //---------Eliminar una Tarea----------//
  const [DeleteTask, { data: msgDeleteTask }] = useDeleteTasksMutation();

  const handleOnchangue = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      estado: false,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const tarea = e.target.tarea.value;
    if (tarea.length < 3) {
      setMsgError(true);
    } else if (tarea.length === 0) {
      setMsgError(true);
    } else {
      setMsgError(false);
      crateTaks({
        dataTasks: inputs,
        token: profileAuth?.token,
      });
      onClose();
      setTimeout(() => {
        setMsgCreateExitoso(true);
        setTimeout(() => {
          setMsgCreateExitoso(false);
        }, 2000);
      }, 0);
    }
  };
  const updateTask = (_id, tarea, descripcion) => {
    UpdateTask({
      _id: _id,
      dataTask: { tarea: tarea, descripcion: descripcion },
      token: profileAuth?.token,
    });
    setActualizar(!actualizar);
    setTimeout(() => {
      setMegUpdateExito(true);
      setTimeout(() => {
        setMegUpdateExito(false);
      }, 1500);
    }, 0);
  };
  const updateEstado = (_id, estado) => {
    UpdateEstadoTask({
      _id,
      dataEstado: { estado: estado },
      token: profileAuth?.token,
    });
    setTimeout(() => {
      setMegUpdateEstadoExito(true);
      setTimeout(() => {
        setMegUpdateEstadoExito(false);
      }, 1500);
    }, 0);
  };
  const deleteTaks = (_id) => {
    DeleteTask({ _id, token: profileAuth?.token });
    setTimeout(() => {
      setMegDeleteExito(true);
      setTimeout(() => {
        setMegDeleteExito(false);
      }, 1500);
    }, 0);
  };
  return (
    <>
      <Box
        width={"100%"}
        height={"93vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap="10px"
      >
        <Box
          display="flex"
          flexDirection="column"
          w="100%"
          h="93vh"
          alignItems={"center"}
          boxShadow="0px 5px 5px #323c4626"
          gap={"20px"}
        >
          <Box
            display={"flex"}
            flexDirection="column"
            position={"absolute"}
            alignItems={"center"}
            w="100%"
            h="93vh"
            backgroundImage={
              "url(https://static-cse.canva.com/blob/755438/04RecursosCanvaClases.png)"
            }
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={"100% 100%"}
            opacity="0.7"
          ></Box>
          <Box
            display={"flex"}
            w="100%"
            justifyContent={"center"}
            alignItems="center"
            flexDirection="column"
            gap={"10px"}
            p="10px"
          >
            <Box textAlign={"end"} position="relative">
              {todasTask ? (
                <Heading fontFamily={"cursive"}>Todas tus tareas</Heading>
              ) : completadas ? (
                <Heading fontFamily={"cursive"}>
                  Lista de tareas Completadas
                </Heading>
              ) : incompletas ? (
                <Heading fontFamily={"cursive"}>
                  Lista de tareas Incompletas
                </Heading>
              ) : null}
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              position="relative"
            >
              <Button onClick={onOpen} colorScheme="facebook">
                Agregar tarea
              </Button>
            </Box>
          </Box>
          <Menu width="100%">
            <Box
              maxWidth={"100%"}
              display="grid"
              flexDirection="column"
              gridTemplateColumns={"repeat(auto-fill, 899px)"}
              gap="10px"
              position={"relative"}
              padding="10px"
            >
              <MenuButton
                px={4}
                py={2}
                as={Button}
                colorScheme="facebook"
                width="15%"
              >
                Filtrar Tareas {<ChevronDownIcon />}
              </MenuButton>
            </Box>
            <MenuList>
              <Box
                width={"100%"}
                display="flex"
                justifyContent={"center"}
                flexDirection="column"
                alignItems={"center"}
                gap="10px"
              >
                <MenuItem display="flex" justifyContent={"center"}>
                  <Button
                    background="transparent"
                    _hover={{ background: "transparent" }}
                    onClick={() => {
                      setTodasTaks(true);
                      setCompletadas(false);
                      setIncompletas(false);
                    }}
                  >
                    Todas las tareas
                  </Button>
                </MenuItem>
                <MenuItem display="flex" justifyContent={"center"}>
                  <Button
                    background="transparent"
                    _hover={{ background: "transparent" }}
                    onClick={() => {
                      setCompletadas(true);
                      setTodasTaks(false);
                      setIncompletas(false);
                    }}
                  >
                    Tareas Completadas
                  </Button>
                </MenuItem>
                <MenuItem display="flex" justifyContent={"center"}>
                  <Button
                    background="transparent"
                    _hover={{ background: "transparent" }}
                    onClick={() => {
                      setIncompletas(true);
                      setCompletadas(false);
                      setTodasTaks(false);
                    }}
                  >
                    Tareas Incompletadas
                  </Button>
                </MenuItem>
              </Box>
            </MenuList>
          </Menu>

          <AgregarTareas
            handleSubmit={handleSubmit}
            onClose={onClose}
            isOpen={isOpen}
            handleOnchangue={handleOnchangue}
            msgError={msgError}
          />
          {todasTask ? (
            <MostratTask
              data={data}
              updateTask={updateTask}
              updateEstado={updateEstado}
              deleteTaks={deleteTaks}
              actualizar={actualizar}
              setActualizar={setActualizar}
            />
          ) : null}
          {completadas ? (
            <MostratTaskCompletadas
              dataCompletadas={dataCompletadas}
              profileAuth={profileAuth}
              updateEstado={updateEstado}
              deleteTaks={deleteTaks}
            />
          ) : null}
          {incompletas ? (
            <MostratTaskIncompletas
              dataIncompletas={dataIncompletas}
              profileAuth={profileAuth}
              updateEstado={updateEstado}
              deleteTaks={deleteTaks}
              updateTask={updateTask}
              actualizar={actualizar}
              setActualizar={setActualizar}
            />
          ) : null}
        </Box>
      </Box>
      {msgCreateExitoso ? <MensajeTareaCreada msgExitoso={msgExitoso} /> : null}
      {megDeleteExito ? (
        <MensajeEliminarTarea msgDeleteTask={msgDeleteTask} />
      ) : null}
      {megUpdateExito ? (
        <MensajeActualizarTarea msgUpdateTask={msgUpdateTask} />
      ) : null}
      {megUpdateEstadoExito ? (
        <MensajeActualizarEstadoTarea msgUpestadoTask={msgUpestadoTask} />
      ) : null}
    </>
  );
}

export default Tareas;
