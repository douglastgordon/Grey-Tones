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
  ".bottom-left",
  ".bottom-right",
  ".top-center",
  ".top-center",
  ".middle-right",
  ".bottom-center",
  ".middle-right",
  ".bottom-left",
  "top-right",
  ".middle-right",
  ".bottom-left",
  "top-right",
  ".middle-right"
];

let gameCount = 0;

const playOrderedNote = (i, timeout) => {
  setTimeout(() => $(ORDER[i]).trigger("click"), timeout);
};

const play = () => {
  $(".play").addClass("hidden");
  notesPlayed = [];
  let timeout = 0;
  let i = 0;
  while (i <= gameCount) {
    playOrderedNote(i, timeout);
    i += 1;
    timeout += 1000;
  }
  gameCount += 1;
  setTimeout(() => checkResponse(), timeout+(timeout*1.2));
};

const checkResponse = () => {
    // debugger
    console.log(ORDER.slice(0, gameCount).slice(0, notesPlayed.length-gameCount));
    console.log(notesPlayed.slice(gameCount));
    if (equal(notesPlayed, ORDER.slice(0, gameCount))){
      if (gameCount == ORDER.length) {
        win();
        return;
      }
      goodRound();
      setTimeout(() => play(), 1000);
    } else if (trueEqual(ORDER.slice(0, gameCount).slice(0, notesPlayed.length-gameCount), notesPlayed.slice(gameCount))){
      tooSlow();
    } else {
      wrong();
    }
};


const gameOver = () => {
  gameCount = 0;
  $(".play").removeClass("hidden");
};

const tooSlow = () => {
  $(".slow").removeClass("hidden");
  setTimeout(()=>$(".slow").addClass("hidden"), 1500);
  gameOver();
};

const wrong = () => {
  $(".wrong").removeClass("hidden");
  setTimeout(()=>$(".wrong").addClass("hidden"), 1500);
  gameOver();
};

const goodRound = () => {
  $(".ok").removeClass("hidden");
  setTimeout(()=>$(".ok").addClass("hidden"), 350);
};

const win = () => {
  $(".win").removeClass("hidden");
  setTimeout(()=>$(".win").addClass("hidden"), 2000);
  gameOver();
};


const trueEqual = (x,y) => {
  let i = 0;
  while (i < x.length){
    if (x[i] !== y[i]){
      return false;
    }
    i++;
  }
  return true;
};

const equal = (response, answer) => {
  let i = 0;
  while (i < answer.length){
    if (response[answer.length+i] !== answer[i]){
      return false;
    }
    i++;
  }
  return true;
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

let notesPlayed = [];



tilePairs.forEach((pair)=>{
  $(pair[0]).on("click", () => {
    notesPlayed.push(pair[0]);
    playNote(pair[1]);
    $(pair[0]).addClass("selected");
    setTimeout(() => $(pair[0]).removeClass("selected"), 1000);
  });
});
