import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Button } from "reactstrap";
import { BiTrash, BiEditAlt } from "react-icons/bi";

import { deleteNote } from "../../utils/notesService";

const Note = (props) => {
  const history = useHistory();

  const deleteHandler = () => {
    deleteNote({ id: props.note._id }).then(() => {
      history.go("/");
    });
  };

  return (
    <div className="my-2 border p-2">
      <div className="row">
        <div className="col">
          <h3>
            <Link to={"/note/" + props.note._id}>{props.note.title}</Link>
          </h3>
          <p>{props.note.content}</p>
        </div>
        <div className="col-auto">
          <div className="my-2">
            <Link to={"/edit/" + props.note._id}>
              <Button color="warning mr-2">
                <BiEditAlt />
              </Button>
            </Link>
            <Button
              onClick={deleteHandler}
              title={props.note._id}
              color="danger"
            >
              <BiTrash />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
