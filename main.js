import Note from './util/note';
import $ from 'jquery';

window.Note = Note;





const playNote = (note) => {
  note.start();
};


const note1 = new Note(300,"square");
$("#top-left").on("click", () => playNote(note1));
