let body = document.querySelector('body');
function changeMode(size, weight, transform, background, color) {
    // Modifier les styles du body pour affecter toute la page
    body.style.fontSize = `${size}px`;
    body.style.fontWeight = weight;
    body.style.textTransform = transform;
    body.style.background = background;
    body.style.color = color;
}
function main(){
	let spooky = () => changeMode(9, "bold", "uppercase", "pink", "green");
	let darkMode = () => changeMode(12, "bold", "capitalize", "black", "white");
	let screamMode = () => changeMode(12, "normal", "lowercase", "white", "black");
	let p = document.createElement("p");
	p.textContent = "Welcome Holberton!";
	body.append(p);
	let btn1 = document.createElement("button");
	let btn2 = document.createElement("button");
	let btn3 = document.createElement("button");
	btn1.textContent = "Spooky";
	btn2.textContent = "Dark mode";
	btn3.textContent = "Scream mode";
	btn1.onclick = spooky;
	btn2.onclick = darkMode;
	btn3.onclick = screamMode;
	body.appendChild(btn1);
    body.appendChild(btn2);
    body.appendChild(btn3);
}
main();
