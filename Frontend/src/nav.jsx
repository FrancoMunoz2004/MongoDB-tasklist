import {
  Box,
  Button,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsLightbulb, BsLightbulbOffFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "./api/apiSustand";
import { useState } from "react";
import MenuUser from "./ListaDeTareas/MenuUser";
function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "black");
  const color = useColorModeValue("black", "white");
  const profileAuth = useAuthStore((state) => state.profile);
  const [route,setRoute]=useState(false);
  const handleButton =()=>{
    if (route) {
      setRoute(false);
    }else{
      setRoute(true)
    }
  }
  return (
    <>
      {profileAuth == null || profileAuth?.msg == "contraseña erronea"? (
        <Box
          color={"black"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="7%"
          overflow="hidden"
          background="#385898"
        >
          <Box display={"flex"} alignItems="center">
            <Switch
              onChange={toggleColorMode}
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              m="10px"
              background={"none"}
            ></Switch>
            {colorMode === "light" ? <BsLightbulbOffFill /> : <BsLightbulb />}
          </Box>
          <Box
            width="90%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            height=" 100%"
          >
            <Text fontWeight={"700"} fontFamily={"cursive"} fontSize="25px" color="#FFFFFF">
              Bienvenido a nuestra aplicacion de Tareas
            </Text>
          </Box>
          <Box>
            
            {route ?<Button onClick={()=>{
              handleButton()
              navigate("/")
            }}>Log in</Button>:<Button onClick={()=>{
              handleButton()
              navigate("/SignUp")
            }}>Sign Up</Button>}
          </Box>
        </Box>
      ) : (
        <Box
          color={"black"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="7%"
          overflow="hidden"
          background="#385898"
        >
          <Box  display={"flex"} alignItems="center">
            <Switch
              onChange={toggleColorMode}
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              m="10px"
              background={"none"}
            ></Switch>
            {colorMode === "light" ? <BsLightbulbOffFill /> : <BsLightbulb />}
          </Box>
          <div className="header">
            <li>
              <Link to="/User">
                <Button
                  colorScheme="gray"
                  _hover={{
                    bg: "blue.400",
                    color: "white",
                    transition:"all 0.2s"
                  }}
                  _focus={{ boxShadow: "outline",bg: "blue.600", color:"white" }}
                >
                  Home
                </Button>
              </Link>
              <br></br>
            </li>
            <li>
              <Link to="/Tarea">
                <Button
                  colorScheme="gray"
                  _hover={{
                    bg: "blue.400",
                    color: "white",
                    transition:"all 0.2s"
                  }}
                  _focus={{ boxShadow: "outline",bg: "blue.600", color:"white" }}
                >
                  Tarea
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/SobreNosotros">
                <Button
                  colorScheme="gray"
                  
                  _hover={{
                    bg: "blue.400",
                    color: "white",
                    transition:"all 0.2s"
                  }}
                  _focus={{ boxShadow: "outline",bg: "blue.600", color:"white" }}
                >
                  Sobre Nosotros
                </Button>
              </Link>
            </li>
            <li>
           <MenuUser profileAuth={profileAuth}/>
            </li>
          </div>
        </Box>
      )}
    </>
  );
}
export default Nav;
