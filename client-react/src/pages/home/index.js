import React, { useEffect, useState } from "react";
import { getNotes } from "../../utils/notesService";

import PageLayout from "../../components/page-layout";
import Note from "../../components/note/index";
import Loader from "../../components/loader";

const HomePage = (props) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then((promise) => {
      setNotes(promise.data.Notes);
    });
  }, []);

  return (
    <PageLayout>
      {notes.length > 0 ? (
        <div>
          {notes.map((note) => (
            <Note key={note._id} note={note} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </PageLayout>
  );
};

export default HomePage;
