import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { BiTrash, BiEditAlt } from "react-icons/bi";
import { getNote, deleteNote } from "../../utils/notesService";

import PageLayout from "../../components/page-layout";
import Loader from "../../components/loader";

const NotePage = (props) => {
  const [note, setNote] = useState();

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    getNote(params.id)
      .then((promise) => {
        setNote(promise.data);
      })
      .catch((err) => {
        console.error(err);
        history.push("/");
      });
  }, [params, history]);

  const deleteHandler = () => {
    deleteNote({ id: note._id }).then(() => {
      history.push('/');
    });
  }

  return (
    <PageLayout>
      {note ? (
        <div className="my-2 border p-2">
          <div className="row">
            <div className="col">
              <h3> {note.title} </h3>
              <p>{note.content}</p>
            </div>
            <div className="col-auto">
              <div className="my-2">
                <Link to={"/edit/" + note._id}>
                  <Button color="warning mr-2">
                    <BiEditAlt />
                  </Button>
                </Link>
                <Button onClick={deleteHandler} color="danger">
                  <BiTrash />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </PageLayout>
  );
};

export default NotePage;
