import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Card } from "../component/card";

const People = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPeople();
  }, []);

  return (
    <div className="container text-light">
      <div className="row">
        <div className="col-8 offset-2 d-flex flex-row flex-wrap justify-content-space-between">
          {store.people.map((people, idx) => {
            return (
              <Card
                key={idx}
                imgSrc={people.img}
                title={people.name}
                text={`${people.name} is a ${people.gender}, with a height of ${people.height} cm.`}
                link={people.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { People };
