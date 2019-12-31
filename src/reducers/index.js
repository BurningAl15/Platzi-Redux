import { combineReducers } from "redux";
import usuariosReducer from "./usuarioReducers";
import publicacionesReducer from "./publicacionesReducer";

export default combineReducers({
  usuariosReducer,
  publicacionesReducer
});
