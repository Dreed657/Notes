import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { createNote } from "../../utils/notesService";

import PageLayout from "../../components/page-layout";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    createNote({ title, content })
      .then(() => {
        history.push('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
              type="text"
              value={content}
              onChange={onContentChange}
              name="content"
              placeholder="Content"
              required
            ></Input>
          </FormGroup>
          <Button type="submit">Add to the list</Button>
          <Button onClick={cancelHandler} className="btn btn-danger ml-2">
            Cancel
          </Button>
        </Form>
      </div>
    </PageLayout>
  );
};

export default CreatePage;
