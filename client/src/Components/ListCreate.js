import React from "react";
import { CREATE_LIST } from "../Graphql/Mutation";
import { getAll } from "../Graphql/Query";
import { useMutation, useQuery } from "@apollo/client";
import { Spinner } from "react-bootstrap";

const ListCreate = ({ listInfo, title, setTitle }) => {
  const getAllLists = useQuery(getAll);

  const [createList] = useMutation(CREATE_LIST);

  if (getAllLists.loading) return <Spinner animation="border" />;

  if (getAllLists.error || listInfo.error) return <h1>Error :</h1>;

  const handleSubmit = (e) => {
    //e.preventDefault();
    if (!listInfo.loading) {
      if (listInfo.data.getList) console.log("list already exists");
      else {
        createList({ variables: { title } });
        setTitle("");
      }
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="List Name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </form>
      {!listInfo.loading && !listInfo.data.getList ? (
        <p>List does not exist : Press Enter to create it </p>
      ) : null}
    </>
  );
};

export default ListCreate;
