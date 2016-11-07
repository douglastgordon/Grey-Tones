import Note from './util/note';
import $ from 'jquery';

window.Note = Note;





const playNote = (note) => {
  note.start();
  window.setTimeout(() => stopNote(note), 1000);
};

const stopNote = (note) => {
  note.stop();
};


const note1 = new Note(300,"square");
const note2 = new Note(500,"sine");
const note3 = new Note(400,"triangle");
const note4 = new Note(700,"sawtooth");
const note5 = new Note(200,"square");
const note6 = new Note(800,"sine");
const note7 = new Note(400,"triangle");
const note8 = new Note(500,"sawtooth");
const note9 = new Note(800,"square");

$("#top-left").on("click", () => playNote(note1));
$("#top-center").on("click", () => playNote(note2));
$("#top-right").on("click", () => playNote(note3));
$("#middle-left").on("click", () => playNote(note4));
$("#middle-center").on("click", () => playNote(note5));
$("#middle-right").on("click", () => playNote(note6));
$("#bottom-left").on("click", () => playNote(note7));
$("#bottom-center").on("click", () => playNote(note8));
$("#bottom-right").on("click", () => playNote(note9));
