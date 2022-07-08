import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { Card } from "../component/card";

const People = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPeople();
  }, []);

  return (
    <div className="container text-light">
      <div className="cardRow">
        {store.people.map((people, idx) => {
          return (
            <div className="col" key={idx}>
              <Card
                imgSrc={people.img}
                title={people.name}
                text={`${people.name} is a ${people.gender}, with a height of ${people.height} cm.`}
                link={people.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { People };
