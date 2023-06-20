import React from "react";

import Title from "../Title/Title";
import SubscribeContainer from "../Subscribe/Subscribe";
import BooksList from "../BooksList/BooksList";

interface NewReleasesProps {
  title: string;
  booksList: any;
}

const NewReleases: React.FC<NewReleasesProps> = ({title, booksList}) => {
  return (
    <div>
      <Title title={title} size="large" />
      <BooksList books={booksList} />
      <SubscribeContainer />
    </div>
  );
};

export default NewReleases;
