# Grey Tones

###[Live] (http://www.douglasgordon.me/Grey-Tones/)

Grey Tones is a soothing, yet haunting simon-says game built using JavaScript and the AudioContext API.

###Screenshot:
![screenshot]

###Technical Details:  

Grey Tones relies on aysnchronous callbacks, first to play the notes in order and then to check the user-input notes. In the code snippet below, the play function will play a number of notes equal to the round (gameCount) by passing an increasingly larger delay to the playOrderedNote function. The playOrderedNote function asynchronously plays a note stored in the ORDER array. After enough time, the player's response is checked.

```javascript
const play = () => {
  let delay = 0;
  let i = 0;
  while (i <= gameCount) {
    playOrderedNote(i, delay);
    i += 1;
    delay += 1000;
  }
  gameCount += 1;
  setTimeout(() => checkResponse(), delay+(delay*1.2));
};

const playOrderedNote = (i, delay) => {
  setTimeout(() => $(ORDER[i]).trigger("click"), delay);
};
```

[screenshot]: ./images/screenshot-greytones.png
