import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Card } from "../component/card";

const Planets = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="container text-light">
      <div className="cardRow">
        {store.planets.map((planet, idx) => {
          return (
            <div className="col" key={idx}>
              <Card
                imgSrc={planet.img}
                title={planet.name}
                text={`${planet.name} is a planet with a gravity of ${planet.gravity}, and it has a ${planet.climate} climate.`}
                link={planet.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { Planets };
