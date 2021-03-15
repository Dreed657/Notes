import axios from "axios";

const getNotes = (limit) => {
  return axios.get("http://localhost:9999/notes");
};

const getNote = (id) => {
  return axios.get(`http://localhost:9999/notes/${id}`);
};

const createNote = ({ title, content }) => {
  return axios.post("http://localhost:9999/notes", { title, content });
};

const updateNote = ({ id, title, content }) => {
  return axios.put(`http://localhost:9999/notes/${id}`, { title, content });
};

const deleteNote = ({ id }) => {
  return axios.delete(`http://localhost:9999/notes/${id}`);
};

export { getNotes, getNote, createNote, updateNote, deleteNote };
