import React, { useState } from "react";
import "./App.css";
import Note from "./Note";

export type NoteSchema = {
  id: number;
  title: string;
  description: string;
};
const App: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState<NoteSchema[]>([]);

  // let notes: NoteSchema[] = [];

  let submit = (e: any): void => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title or description missing");
      return;
    }

    setNotes([...notes, createNote()]);
    console.log(notes);
    setTitle("");
    setDescription("");
  };

  let deleteNote = (id: number): void => {
    const newNotes: any[] = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  let createNote = (): NoteSchema => {
    const tempNote: NoteSchema = {
      id: notes.length + 1,
      title: title,
      description: description,
    };
    return tempNote;
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>DEMO-NOTES</h1>
      <form
        action=""
        onSubmit={(e) => submit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          value={title}
          style={{
            resize: "none",
            width: "200px",
            padding: "5px",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
          required
        />
        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          style={{
            resize: "none",
            width: "200px",
            height: "80px",
            padding: "5px",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
          value={description}
          required
        ></textarea>
        <button
          style={{
            width: "80px",
            padding: "5px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            outline: "none",
          }}
          type="submit"
        >
          SUBMIT
        </button>
      </form>
      <div
        className="display"
        style={{
          height: "50vh",
          width: "400px",
          display: "flex",
          flexWrap: "wrap",
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        {notes.map((note, key) => (
          <Note note={note} deleteNote={deleteNote} key={key} />
        ))}
      </div>
    </div>
  );
};

export default App;
