import React from "react";

const Jumbotron = ({ img, name, text1, text2, text3 }) => {
  return (
    <div class="jumbotron">
      <div className="row">
        <div class="col-md-6 how-img">
          <img
            src={img ? img : "https://via.placeholder.com/600/400"}
            className="jumbotron-img-top"
          />
        </div>
        <div class="col-md-6">
          <h1 class="jumbotron-title display-4 text-danger">
            {name ? name : "This is filler"}
          </h1>
          <p class="jumbotron-bio lead">
            The Star Wars story has been presented in a series of American
            films, which have spawned a large quantity of books and other media,
            which have formed the Expanded Universe. The Star Wars mythos is
            also the basis of many toys and games of varying types. The films
            and novels employ common science-fiction motifs.
          </p>
        </div>
      </div>
      <hr class="my-4" />
      <div className="jumbotron-items list-group list-group-horizontal-xl mt-overflow-auto">
        <div className="jumbotron-item1 text-danger">
          <strong>{name ? name : "This is filler"}</strong>
        </div>
        <div className="jumbotron-item2 text-danger">
          <strong>{text1 ? text1 : "This is filler"}</strong>
        </div>
        <div className="jumbotron-item3 text-danger">
          <strong>{text2 ? text2 : "This is filler"}</strong>
        </div>
        <div className="jumbotron-item4 text-danger">
          <strong>{text3 ? text3 : "This is filler"}</strong>
        </div>
      </div>
    </div>
  );
};
export { Jumbotron };
