$(() => {
  $("#videoPlay").YTPlayer();
});
let isTyping = false;

const typing = (element, sentence) => {
  if (isTyping) return;
  isTyping = true;

  document.querySelector(element).textContent = "";
  [...sentence].forEach((character, index) => {
    setTimeout(() => {
      document.querySelector(element).textContent += character;
      if (index === sentence.length - 1) {
        setTimeout(() => {
          isTyping = false;
        }, 500);
      }
    }, 80 * index);
  });
};
typing("#typing", "welcome to my portfolio");
