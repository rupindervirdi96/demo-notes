import { useEffect } from "react";
import { NoteSchema } from "./App";

interface noteProps {
  note: NoteSchema;
  deleteNote(id: number): void;
}

const Note: React.FC<noteProps> = ({ note, deleteNote }): JSX.Element => {
  // useEffect(() => {
  //   console.log(note);
  // }, []);

  return (
    <div
      style={{
        height: "200px",
        width: "45%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid black",
        margin: "5px",
      }}
    >
      <h1>{note.title}</h1>
      <h3>{note.description}</h3>
      <button
        style={{
          width: "80px",
          padding: "5px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          outline: "none",
        }}
        onClick={() => deleteNote(note.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
