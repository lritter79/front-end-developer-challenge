export function makeSound(frequency: number) {
  const audio = new window.AudioContext();
  const gainNode = audio.createGain();
  gainNode.gain.value = 0.05;
  gainNode.connect(audio.destination);
  const oscillator = audio.createOscillator();
  oscillator.type = "square";
  oscillator.connect(gainNode);
  oscillator.frequency.value = frequency;
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
    //off by 1 millisecond in order to not trigger the set interval a fourth time and get an out of index error
  }, 150);
}

export function makeGlissando(
  startFrequency: number,
  endFrequency: number,
  duration: number
) {
  const audio = new window.AudioContext();
  const gainNode = audio.createGain();
  gainNode.gain.value = 0.05;
  gainNode.connect(audio.destination);

  const oscillator = audio.createOscillator();
  oscillator.type = "square";
  oscillator.connect(gainNode);

  oscillator.frequency.value = startFrequency;
  oscillator.frequency.linearRampToValueAtTime(
    endFrequency,
    audio.currentTime + 0.15
  ); // 0.15 seconds for the glissando effect

  oscillator.start();
  setTimeout(
    () => {
      oscillator.stop();
    },
    150 * Math.ceil(duration / 2)
  ); // 150 milliseconds
}
