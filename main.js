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

const ORDER = [
  ".top-left",
  ".top-right",
  ".middle-right",
  ".bottom-left",
  ".middle-right",
  ".bottom-left"
];

let gameCount = 1;

const playOrderedNote = (i, timeout) => {
  setTimeout(() => $(ORDER[i]).trigger("mouseenter"), timeout);
};

const play = () => {
  let timeout = 0;
  let i = 0;
  while (i < gameCount) {
    console.log(timeout);
    playOrderedNote(i, timeout);
    i += 1;
    timeout += 1000;
  }
  gameCount += 1;
};

$(".play").on("click",() => play());

const note1 = new Note(130.81,"sawtooth");
const note2 = new Note(233.08,"sawtooth");
const note3 = new Note(164.81,"sawtooth");
const note4 = new Note(329.63,"sawtooth");
const note5 = new Note(415.30,"sawtooth");
const note6 = new Note(146.83,"sawtooth");
const note7 = new Note(261.63,"sawtooth");
const note8 = new Note(207.65,"sawtooth");
const note9 = new Note(185,"sawtooth");


const tilePairs = [
  [".top-left", note1],
  [".top-center", note2],
  [".top-right", note3],
  [".middle-left", note4],
  [".middle-center", note5],
  [".middle-right", note6],
  [".bottom-left", note7],
  [".bottom-center", note8],
  [".bottom-right", note9]
];

tilePairs.forEach((pair)=>{
  $(pair[0]).on("mouseenter", () => {
    playNote(pair[1]);
    $(pair[0]).addClass("selected");
    setTimeout(() => $(pair[0]).removeClass("selected"), 1000);
  });
});
