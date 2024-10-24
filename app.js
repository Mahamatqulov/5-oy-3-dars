// const rangeInput = document.getElementById("fontSizesoz");
// const heading = document.getElementById("soz");

// rangeInput.addEventListener("input", () => {
//   const fontSize = rangeInput.value + "px";
//   heading.style.fontSize = fontSize;
// });

//1-misol
// const content = document.querySelector("#content");
// const paragraph = document.querySelector("p");
// paragraph.textContent = "This is random image from picsum photos";
// paragraph.classList.add("caption");
// content.appendChild(paragraph);
// content.prependChild(paragraph);

//2-misol

// const button = document.querySelector("#hangeText");
// const text = document.querySelector("#text");
// button.addEventListener("click", () => {
//   text.textContent = "This is new text!";
// });

// 3-misol

// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
// const image = document.querySelector("#image");

// button1.addEventListener("click", () => {
//   image.src = "https://picsum.photos/id/2/1200";
// });
// button2.addEventListener("click", () => {
//   image.src = "https://picsum.photos/id/3/1200";
// });

// 4-misol
// const styledText = document.querySelector("#styledText");
// const styleButton = document.querySelector("#styleButton");

// styleButton.addEventListener("click", () => {
//   const randomFontSize = Math.floor(Math.random() * 15) + 50;
//   const colors = ["blue", "red", "green", "purple", "orange", "teal"];
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   styledText.style.color = randomColor;
//   styledText.style.fontSize = `${randomFontSize}px`;
// });

//5-misol

// const button = document.querySelector("#button");
// const input = document.querySelector("#input");
// const ul = document.querySelector("#ul");

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = input.value.trim();

//   if (li.textContent) {
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

// 6-misol

// const toggleButton = document.querySelector("#toggleButton");
// const toggleText = document.querySelector("#toggleText");

// toggleButton.addEventListener("click", () => {
//   if (toggleText.style.display === "none") {
//     toggleText.style.display = "block";
//   } else {
//     toggleText.style.display = "none";
//   }
// });

//7-misol

//8-misol

// setInterval(() => {
//   const now = new Date().toLocaleTimeString();
//   document.querySelector("#clock").textContent = now;
// }, 1000);

//9-misol
// const button = document.querySelector("#colorButton");
// button.addEventListener("click", () => {
//   const randomColor = `rgb(${Math.floor(Math.random() * 256)},
//   ${Math.floor(Math.random() * 256)},
//   ${Math.floor(Math.random() * 256)})`;

//   document.body.style.backgroundColor = randomColor;
// });

//10-misol
// const taskInput = document.querySelector("#taskInput");
// const addTaskButton = document.querySelector("#addTask");
// const taskList = document.querySelector("#taskList");

// addTaskButton.addEventListener("click", () => {
//   const taskText = taskInput.value.trim();
//   if (taskText === "") return;

//   const li = document.createElement("li");
//   li.textContent = taskText;

//   li.addEventListener("click", () => {
//     li.classList.toggle("completed");
//   });

//   taskList.appendChild(li);
//   taskInput.value = "";
// });
