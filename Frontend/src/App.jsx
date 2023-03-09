import "./App.css";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useAuthStore } from "./api/apiSustand";
import { ProtectedRoute } from "./RouteProtected";
import { Suspense, useEffect, useState } from "react";
import { RouteProtectedIsLogin } from "./RouteProtectedIsLogin";
import Spinner from "./spinner/spinner";
import { lazy } from "react";
const Login = lazy(() => import("./Login/Login"));
const Tareas = lazy(() => import("./ListaDeTareas/Tareas"));
const Home = lazy(() => import("./components/Home"));
const Contact = lazy(() => import("./components/Contact"));
const SignUp = lazy(() => import("./Registro/SignUp"));
const Nav = lazy(() => import("./nav"));
function App() {
  const profileAuth = useAuthStore((state) => state.profile);
  const [usuario, setUsuario] = useState({
    email: null,
  });
  
  useEffect(() => {
    const userLoged = JSON.parse(localStorage.getItem("auth"));
    if (userLoged) {
      setUsuario(userLoged);
    } else {
      setUsuario({
        email: null,
      });
    }
  }, []);
  
  return (
    <Box width="100%" height="100%">
      <Suspense fallback={<Spinner/>}>
      <BrowserRouter>
        <>
          <Nav />
        </>
        <Routes>
        <Route
            element={
              <RouteProtectedIsLogin
                isAllowed={!!usuario.email}
                redirectTo={usuario ? "/User" : "/"}
              />
            }
          >
            <Route index element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Route>
          <Route
            element={
              <ProtectedRoute
                isAllowed={!!profileAuth?.usuario && profileAuth?.usuario}
                redirectTo="/"
              />
            }
          >
          <Route path="/User" element={<Home />}></Route>
          <Route path="/Tarea" element={<Tareas />}></Route>
          <Route path="/SobreNosotros" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Suspense>
    </Box>
  );
}

export default App;
