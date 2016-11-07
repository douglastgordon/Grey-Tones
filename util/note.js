const ctx = new (window.AudioContext || window.webkitAudioContext)();

const createOscillator = (freq, type="sine", detune=0) => {
  const osc = ctx.createOscillator();
  osc.type = "square";
  osc.frequency.value = freq;
  osc.detune.value = detune;
  osc.start(ctx.currentTime);
  return osc;
};

const createGainNode = () => {
  const gainNode = ctx.createGain();
  gainNode.gain.value = 0;
  gainNode.connect(ctx.destination);
  return gainNode;
};

class Note {
  constructor(freq, type, detune) {
    this.oscillatorNode = createOscillator(freq, type, detune);
    this.gainNode = createGainNode();
    this.oscillatorNode.connect(this.gainNode);
  }

  start() {
    this.gainNode.gain.value = 0.3;
  }

  stop() {
    this.gainNode.gain.value = 0;
  }
}

export default Note;
