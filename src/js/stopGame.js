export default function stopGame(intervalId) {
  const stopButton = document.querySelector('.stop');
  stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
  });
}
