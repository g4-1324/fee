const newSection2 = document.createElement("section");
newSection2.id="b";
newSection2.textContent = "😎😍 Section 2";

newSection2.classList.add("box");
newSection2.classList.add("bg1");
newSection2.classList.add("box","bg1");

document.body.appendChild(newSection2);
newSection2.style.color="white";
newSection2.textContent += "😎😁";