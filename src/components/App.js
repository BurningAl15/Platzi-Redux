import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Usuarios from "./Usuarios/index";
import Menu from "./Menu";
import Publicaciones from "./Publicaciones/index";

const Tareas = () => <div> Tareas </div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path="/" component={Usuarios} />
      <Route exact path="/tareas" component={Tareas} />
      <Route exact path="/publicaciones/:key" component={Publicaciones} />
    </div>
  </BrowserRouter>
);

export default App;
