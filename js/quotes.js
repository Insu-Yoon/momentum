const qoutes = [
  {
    qoute: "When you have faults, do not fear to abandon them.",
    author: "Confucius",
  },
  {
    qoute:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    qoute:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    qoute: "This too shall pass.",
    author: "Et hoc transibit",
  },
  {
    qoute: "The die is cast.",
    author: "Julius caesar",
  },
  {
    qoute: "Life is unfair, get used to it.",
    author: "Bill Gates",
  },
  {
    qoute: "Being happy never goes out of style.",
    author: "Lilly Pulitzer",
  },
  {
    qoute:
      "All you need in this life is ignorance and confidence, then success is sure.",
    author: "Mark Twain",
  },
  {
    qoute:
      "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "Maxime Lagacé",
  },
  {
    qoute:
      "Life can only be understood backwards; but it must be lived forwards.",
    author: "Søren Kierkegaard",
  },
];
const qoute = document.querySelector(".qoute span:first-child");
const author = document.querySelector(".qoute span:last-child");

const randomNumber = Math.trunc(Math.random() * qoutes.length);
qoute.innerText = qoutes[randomNumber].qoute;
author.innerText = qoutes[randomNumber].author;
