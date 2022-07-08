import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { useParams } from "react-router-dom";
import { Jumbotron } from "./jumbotron";

const Person = (idx, person) => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPerson(id);
    console.log(store.person);
  }, [id]);

  return (
    <div className="jumbotron">
      <h1 className="display-4"></h1>
      <p className="lead"></p>
      <hr className="my-4" />
      <Jumbotron
        key={idx}
        name={store.person.name}
        text1={`Gender: ${store.person.gender}`}
        text2={`Birth Year: ${store.person.birth_year}`}
        text3={`Height: ${store.person.height}`}
      />
    </div>
  );
};
export { Person };
