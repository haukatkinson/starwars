import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Card } from "../component/card";
import { useParams } from "react-router-dom";
import { Jumbotron } from "./jumbotron";

const Planet = (idx, planet) => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPlanet(id);
    console.log(store.planet);
  }, [id]);

  return (
    <div className="jumbotron">
      <h1 className="display-4"></h1>
      <p className="lead"></p>
      <hr className="my-4" />
      <Jumbotron
        key={idx}
        name={store.planet.name}
        text1={`Planet Climate is ${store.planet.climate}`}
        text2={`Planet Population is ${store.planet.population}`}
        text3={`Planet Diameter ${store.planet.diameter}`}
      />
    </div>
  );
};
export { Planet };
