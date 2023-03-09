import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuthStore } from "../api/apiSustand";
import { MdEmail, MdLogout } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { TiUser } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import ConfirmarEliminar from "./confirmarEliminar";
export default function MenuUser({ profileAuth }) {
  const navigate = useNavigate();
  const [indexConfirmEstado, setIndexConfirmEstado] = useState(1);
  const setLogOut = useAuthStore((state) => state.logOut);
  const onClick = () => {
    setLogOut("", null);
    navigate("/");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Menu>
        <MenuButton px={4} py={2} _hover={{ bg: "blue.600" }}>
          <Box
            display={"flex"}
            gap="10px"
            alignItems={"center"}
            borderRadius="50%"
            borderWidth="1px"
          >
            <Avatar
              bg="white"
              color="black"
              name={`${profileAuth?.usuario?.nombre} ${profileAuth?.usuario?.apellidos}`}
            ></Avatar>
          </Box>
        </MenuButton>
        <MenuList px={4} py={2}>
          <Text fontSize={19} textAlign="center" fontFamily={"cursive"}>
            Datos del usuario
          </Text>
          <Box
            px={4}
            py={2}
            borderBottom="1px solid #e6ebf0"
            borderTop="1px solid #e6ebf0"
          >
            <Box display={"flex"} gap="10px" alignItems={"center"}>
              <Box display={"flex"} gap="2px" alignItems={"center"}>
                <TiUser fontSize={20} /> :
              </Box>
              <Box display={"flex"} gap="5px">
                <Text>{profileAuth?.usuario?.nombre}</Text>
                <Text>{profileAuth?.usuario?.apellidos}</Text>
              </Box>
            </Box>
            <Box display={"flex"} gap="10px" alignItems={"center"}>
              <Box display={"flex"} gap="2px" alignItems={"center"}>
                <MdEmail color="#ff5151" fontSize={20} /> :
              </Box>
              <Text>{profileAuth?.usuario?.email}</Text>
            </Box>
          </Box>
          <Box px={4} py={2} display={"flex"} justifyContent="flex-end">
            <Button
              colorScheme="red"
              onClick={() => {
                onOpen();
                setIndexConfirmEstado(3);
              }}
            >
              <MdLogout />
            </Button>
          </Box>
        </MenuList>
      </Menu>
      {onOpen ? (
        <ConfirmarEliminar
          isOpen={isOpen}
          indexConfirmEstado={indexConfirmEstado}
          onClose={onClose}
          onClick={onClick}
        />
      ) : null}
    </Box>
  );
}
