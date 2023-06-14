import React from "react";

import Title from "../Title/Title";
import SubscribeContainer from "../Subscribe/Subscribe";
import BooksList from "../BooksList/BooksList";

interface NewReleasesProps {
  title: string;
  booksList: any;
}

const NewReleases: React.FC<NewReleasesProps>= (props) => {
  return (
    <div>
      <Title title={props.title} size="large" />
      <BooksList books={props.booksList} />
      <SubscribeContainer />
    </div>
  );
};

export default NewReleases;