import { Route, Routes } from "react-router";
import { AuthLayout } from "./layouts/auth-layout";
import About from './pages/about';
import Home from './pages/home';
import Login from "./pages/login";

export default () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />

  <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    {/* <Route path="register" element={<Register />} /> */}
  </Route>

  {/* <Route path=
  \ */}
  </Routes>

)