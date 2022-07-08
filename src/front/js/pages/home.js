import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Planets } from "../component/planets";
import { People } from "../component/people";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <Planets></Planets>
      <People></People>
    </div>
  );
};
