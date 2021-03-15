import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getNote, updateNote } from "../../utils/notesService";

import PageLayout from "../../components/page-layout";

const UpdatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const params = useParams();
  const onSubmit = (e) => {
    e.preventDefault();

    updateNote({ id: params.id, title, content })
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getNote(params.id).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [params]);

  const cancelHandler = (e) => {
    history.goBack();
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <PageLayout>
      <div className="py-2">
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label>Title</Label>
            <Input
              type="text"
              value={title}
              onChange={onTitleChange}
              name="title"
              placeholder="Title"
              required
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Content</Label>
            <Input
              type="textarea"
              rows="4"
              value={content}
              onChange={onContentChange}
              name="content"
              placeholder="Content"
              required
            ></Input>
          </FormGroup>
          <Button type="submit">Edit</Button>
          <Button onClick={cancelHandler} className="btn btn-danger ml-2">
            Cancel
          </Button>
        </Form>
      </div>
    </PageLayout>
  );
};

export default UpdatePage;
