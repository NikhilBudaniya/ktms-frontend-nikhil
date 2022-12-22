import "./App.css";
import Home from "./components/Home/Home";
import Mess from "./components/Mess/Mess";
import Vendors from "./components/Vendors/Vendors";
import Menu from "./components/Menu/Menu";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import AuthNRedirectStudent from "./components/AuthNRedirect/AuthNRedirectStudent";
import AuthNRedirectVendor from "./components/AuthNRedirect/AuthNRedirectVendor"
import PrivateRoute from "./Utils/PrivateRoute/PrivateRoute";
import { useSelector } from "react-redux";


function App() {
  const { isAuth } = useSelector((state) => state.user);
  return (
    <>
      {isAuth && <Menu />}
      <div class="row justify-content-center">
        {isAuth && (
          <div class="col-3 border border-2 border-success text-center">
            Hii User
          </div>
        )}
        <div class="col-9 text-center">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/">
              <Route
                path="/"
                index
                element={<PrivateRoute element={<LandingPage />} />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/authredirect/vendor" element={<AuthNRedirectVendor />} />
              <Route path="/authredirect/student" element={<AuthNRedirectStudent />} />
              <Route exact path="/mess" element={<Mess />} />
              <Route exact path="/vendors" element={<Vendors />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
