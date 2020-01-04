import React from "react";
import publicacionesReducer from "../reducers/publicacionesReducer";

const Post = props => {
  return (
    <div
      className="pub_titulo"
      key={props.key}
      onClick={() => alert(props.id)}
    >
      <h2>{props.title}</h2>
      <h3>{props.body}</h3>
    </div>
  );
};

export default Post;
