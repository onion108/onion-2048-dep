const VERSION_NUMBER = "1.0.1";

let key_downs = [false, false, false, false];
function random() {
	return Math.round(Math.random() * 1000);
}

let normal_mode = true;

let data = [
	[-1, -1, -1, -1],
	[-1, -1, -1, -1],
	[-1, -1, -1, -1],
	[-1, -1, -1, -1]
];

function render_victory() {
	let canvas = document.getElementById("main").getContext("2d");
	canvas.fillStyle = "#000000";
	canvas.fillRect(0, 0, 400, 400);
	canvas.fillStyle = "#FFFFFF";
	canvas.font = "bold 75px Arial";
	canvas.fillText("VICTORY!", 27, 200);
	canvas.font = "15px Arial";
	canvas.fillText("Please refresh the game to start a new one.", 60, 250);
}

function render_dirty_hacker() {
	let canvas = document.getElementById("main").getContext("2d");
	canvas.fillStyle = "#000000";
	canvas.fillRect(0, 0, 400, 400);
	canvas.fillStyle = "#FFFFFF";
	canvas.font = "bold 75px Arial";
	canvas.fillText("HEY YOU!", 27, 200);
	canvas.font = "15px Arial";
	canvas.fillText(
		"* You, the dirty hacker! Yes I'm talking about you! Human!",
		10,
		250
	);
}

function random_board() {
	const nums = [
		-1,
		-1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		-1,
		1,
		1,
		1,
		-1,
		1,
		-1,
		1,
		-1,
		2,
		4,
		8,
		16,
		32,
		64,
		-1,
		-1,
		-1,
		-1,
		-1,
		128,
		-1,
		-1,
		2,
		2,
		2,
		2,
		2,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		256,
		-1,
		-1,
		-1,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		-1,
		-1,
		-1,
		-1,
		-1,
		8,
		8,
		8,
		512
	];
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			data[i][j] = nums[random() % nums.length];
			data[i][j];
		}
	}
	render();
}

document.getElementById("rab").onclick = (e) => {
	if (normal_mode) {
		random_board();
	}
};

document.getElementById("rb").onclick = (e) => {
	window.location.href = window.location.href;
};

document.getElementById("hide-result").onclick = (e) => {
	document.getElementById("svb_result").style.display = "none";
};

document.getElementById("svb").onclick = (e) => {
	let res = document.getElementById("svb_result");
	res.style.display = "inline-block";
	let d = "";
	// Generate save string
	for (const i of data) {
		for (const j of i) {
			d += `${j}|`;
		}
		d += ",";
	}
	res.value = btoa(d);
	console.log(data);
};

function validate_data(ar) {
	if (ar.length != 4) {
		return false;
	} else {
		for (const i of ar) {
			if (i.length != 4) {
				return false;
			}
		}
		return true;
	}
}

document.getElementById("ldb").onclick = (e) => {
	let k_raw = prompt("Please input the save key: ");
	if (k_raw.trim().toUpperCase() == "ASGORE") {
		alert("MERCY: What the fu-");
		return;
	}
	if (k_raw.trim().toUpperCase() == "SANS") {
		alert("* ");
		alert("* (This guy is too lazy to talk.)");
		return;
	}
	if (k_raw.trim().toUpperCase() == "DETERMINATION") {
		alert("* You're filled with deTEMination.");
	}
	if (
		k_raw.trim().toUpperCase() == "TEMMIE" ||
		k_raw.trim().toUpperCase() == "TEM"
	) {
		alert("* hOI! iM teM!");
		alert("* waaat! wtf whY amI in a 2058 gaM!!?>");
		alert("* godby! iM gOIng bak tOOO uNdatemle!");
	}
	if (k_raw.trim().toUpperCase() == "TORIEL") {
		alert("* What's up, my chi");
	}
	if (k_raw.trim().toUpperCase() == "UNDYNE") {
		alert("* NGAHHHH! Let's play 2048!!");
		alert("* Wait human! Fight with me first!");
		document.querySelector("html").innerHTML = "";
	}
	if (
		k_raw.trim().toUpperCase() == "QUZIHAO" ||
		k_raw.trim().toUpperCase() == "WINDOWSAERO"
	) {
		alert("* (Just a feelingless commit robot.)");
	}
	if (
		k_raw.trim().toUpperCase() == "27ONION" ||
		k_raw.trim().toUpperCase() == "ONION108" ||
		k_raw.trim().toUpperCase() == "ZHUZHENYU" ||
		k_raw.trim().toUpperCase() == "ONION"
	) {
		alert("* Yes! I'm the true author! ");
	}
	if (k_raw.trim().toUpperCase() == "FRISK") {
		alert("* You're trying to talk with them.");
		alert("-_-");
		alert("* ...but you failed.");
	}
	if (k_raw.trim().toUpperCase() == "CHARA") {
		alert("* Let's erase this meaningless world, and move to the next.");
		let ori = document.querySelector("html").innerHTML;
		document.querySelector("html").innerHTML = "";
		setTimeout(() => {
			alert("* ???Wait what");
			alert("* Oh I'm sorry, I'm in the wrong world.");
			alert("* Well, I'm going to go back. Enjoy yourself! =)");
			document.querySelector("html").innerHTML = ori;
			render();
		}, 1000);
	}
	let k = atob(k_raw);
	let a = k.split(",");
	let b = [];
	for (const i of a) {
		b.push(i.split("|"));
	}
	console.log(b);
	data = [];
	for (const i of b) {
		let cur = [];
		console.log(i);
		if (i.length == 0 || i[0] == "") {
			continue;
		}
		for (const j of i) {
			if (j == "") {
				continue;
			}
			cur.push(Number.parseInt(j));
		}
		data.push(cur);
	}
	if (!validate_data(data)) {
		console.log(data);
		data = [
			[-1, -1, -1, -1],
			[-1, -1, -1, -1],
			[-1, -1, -1, -1],
			[-1, -1, -1, -1]
		];
		render();
		alert("Invalid save key!");
	} else {
		console.log(data);
		render();
	}
	console.log(data);
};

function x_of_str(str, x) {
	if (str.length == 1) {
		return x + 15 + 25;
	} else if (str.length == 2) {
		return x + 10 + 23;
	} else if (str.length == 3) {
		return x + 10 + 15;
	} else if (str.length == 4) {
		return x + 10 + 5;
	}
}

function render() {
	let x_counter = 0;
	let y_counter = 0;
	let canvas = document.getElementById("main").getContext("2d");
	canvas.fillStyle = "#000000";
	canvas.fillRect(0, 0, 400, 400);
	for (const i of data) {
		for (const j of i) {
			if (j != -1) {
				// console.log("HO")
				canvas.fillStyle = "#ffffff";
				canvas.fillRect(x_counter + 10, y_counter + 10, 80, 80);
				canvas.fillStyle = "#000000";
				canvas.font = "bold 30px Arial";
				canvas.fillText(`${j}`, x_of_str(`${j}`, x_counter), y_counter + 10 + 51);
				// console.log(`x: ${x_counter}, y: ${y_counter}`)
			}
			x_counter += 100;
		}
		x_counter = 0;
		y_counter += 100;
	}
}

function stick_up() {
	for (let p = 0; p < 4; p++) {
		for (let i = 0; i < 4; i++) {
			for (let j = 3; j >= 0; j--) {
				if (data[j][i] == -1 && j != 3) {
					data[j][i] = data[j + 1][i];
					data[j + 1][i] = -1;
				}
			}
		}
	}
}

function stick_down() {
	for (let p = 0; p < 4; p++) {
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (data[j][i] == -1 && j != 0) {
					data[j][i] = data[j - 1][i];
					data[j - 1][i] = -1;
				}
			}
		}
	}
}

function stick_left() {
	for (let p = 3; p >= 0; p--) {
		for (let i = 0; i < 4; i++) {
			for (let j = 3; j >= 0; j--) {
				if (data[i][j] == -1 && j != 3) {
					data[i][j] = data[i][j + 1];
					data[i][j + 1] = -1;
				}
			}
		}
	}
}

function stick_right() {
	for (let p = 3; p >= 0; p--) {
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (data[i][j] == -1 && j != 0) {
					data[i][j] = data[i][j - 1];
					data[i][j - 1] = -1;
				}
			}
		}
	}
}

function merge_up() {
	console.log(data);
	for (let i = 0; i < 4; i++) {
		for (let j = 3; j >= 0; j--) {
			console.log(`${j}, ${i}`);
			try {
				if (
					data[j][i] == data[j + 1][i] &&
					data[j][i] != -1 &&
					data[j + 1][i] != -1 &&
					j != 3
				) {
					data[j][i] = 2 * data[j + 1][i];
					data[j + 1][i] = -1;
				}
			} catch (e) {}
		}
	}
}

function merge_down() {
	console.log(data);
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			try {
				if (
					data[j][i] == data[j - 1][i] &&
					data[j][i] != -1 &&
					data[j - 1][i] != -1 &&
					j != 0
				) {
					data[j][i] = 2 * data[j - 1][i];
					data[j - 1][i] = -1;
				}
			} catch (e) {}
		}
	}
}

function merge_left() {
	console.log(data);
	for (let i = 0; i < 4; i++) {
		for (let j = 3; j >= 0; j--) {
			try {
				if (
					data[i][j] == data[i][j + 1] &&
					data[i][j] != -1 &&
					data[i][j + 1] != -1 &&
					j != 3
				) {
					data[i][j] = 2 * data[i][j + 1];
					data[i][j + 1] = -1;
				}
			} catch (e) {}
		}
	}
}

function merge_right() {
	console.log(data);
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			try {
				if (
					data[i][j] == data[i][j - 1] &&
					data[i][j] != -1 &&
					data[i][j - 1] != -1 &&
					j != 0
				) {
					data[i][j] = 2 * data[i][j - 1];
					data[i][j - 1] = -1;
				}
			} catch (e) {}
		}
	}
}

function r_up() {
	let i = random() % 4;
	if (data[0][i] == -1) {
		data[0][i] = 1;
	}
}

function r_down() {
	let i = random() % 4;
	if (data[3][i] == -1) {
		data[3][i] = 1;
	}
}

function r_left() {
	let i = random() % 4;
	if (data[i][0] == -1) {
		data[i][0] = 1;
	}
}

function r_right() {
	let i = random() % 4;
	if (data[0][3] == -1) {
		data[0][3] = 1;
	}
}

let fucking_tick_interval = -114514;

function tick() {
	let is_victory = false;
	let break_all = false;
	for (const i of data) {
		for (const j of i) {
			if (j == 2048) {
				normal_mode = false;
				is_victory = true;
			}
			if (
				j > 2048 ||
				(j != 1 &&
					j != 2 &&
					j != 4 &&
					j != 8 &&
					j != 16 &&
					j != 32 &&
					j != 64 &&
					j != 128 &&
					j != 256 &&
					j != 512 &&
					j != 1024 &&
					j != 2048 &&
					j != -1)
			) {
				normal_mode = false;
				is_victory = false;
				break_all = true;
				break;
			}
		}
		if (break_all) {
			break;
		}
	}
	if (normal_mode == false && is_victory) {
		render_victory();
		document.getElementById("key_viewer").style.display = "none";
		clearInterval(fucking_tick_interval);
	} else if (normal_mode == false) {
		render_dirty_hacker();
		document.getElementById("key_viewer").style.display = "none";
		clearInterval(fucking_tick_interval);
	}

	if (key_downs[0]) {
		console.log("HERE");
		document
			.getElementById("dis_key_a")
			.style.setProperty("background-color", "#BBB");
		document.getElementById("dis_key_a").style.setProperty("font-weight", "bold");
		document
			.getElementById("dis_key_a")
			.style.setProperty("transform", "scale(1.05)");
	} else {
		document
			.getElementById("dis_key_a")
			.style.setProperty("background-color", "#FFF");
		document
			.getElementById("dis_key_a")
			.style.setProperty("font-weight", "normal");
		document.getElementById("dis_key_a").style.setProperty("transform", "");
	}
	if (key_downs[1]) {
		console.log("HERE");
		document
			.getElementById("dis_key_s")
			.style.setProperty("background-color", "#BBB");
		document.getElementById("dis_key_s").style.setProperty("font-weight", "bold");
		document
			.getElementById("dis_key_s")
			.style.setProperty("transform", "scale(1.05)");
	} else {
		document
			.getElementById("dis_key_s")
			.style.setProperty("background-color", "#FFF");
		document
			.getElementById("dis_key_s")
			.style.setProperty("font-weight", "normal");
		document.getElementById("dis_key_s").style.setProperty("transform", "");
	}
	if (key_downs[2]) {
		console.log("HERE");
		document
			.getElementById("dis_key_d")
			.style.setProperty("background-color", "#BBB");
		document.getElementById("dis_key_d").style.setProperty("font-weight", "bold");
		document
			.getElementById("dis_key_d")
			.style.setProperty("transform", "scale(1.05)");
	} else {
		document
			.getElementById("dis_key_d")
			.style.setProperty("background-color", "#FFF");
		document
			.getElementById("dis_key_d")
			.style.setProperty("font-weight", "normal");
		document.getElementById("dis_key_d").style.setProperty("transform", "");
	}
	if (key_downs[3]) {
		console.log("HERE");
		document
			.getElementById("dis_key_w")
			.style.setProperty("background-color", "#BBB");
		document.getElementById("dis_key_w").style.setProperty("font-weight", "bold");
		document
			.getElementById("dis_key_w")
			.style.setProperty("transform", "scale(1.05)");
	} else {
		document
			.getElementById("dis_key_w")
			.style.setProperty("background-color", "#FFF");
		document
			.getElementById("dis_key_w")
			.style.setProperty("font-weight", "normal");
		document.getElementById("dis_key_w").style.setProperty("transform", "");
	}
}

function r_all() {
	data[random() % 4][random() % 4] = 1;
}

window.onload = (e) => {
	r_all();
	render();
	fucking_tick_interval = setInterval((e) => {
		tick();
	}, Math.ceil(1000 / 60));
	document.getElementById("gv_v").innerText = `${VERSION_NUMBER}`;
};

window.onkeyup = (e) => {
	switch (e.keyCode) {
		case 87:
			key_downs[0] = false;
			break;
		case 83:
			key_downs[1] = false;
			break;
		case 68:
			key_downs[2] = false;
			break;
		case 65:
			key_downs[3] = false;
			break;
	}
};

window.onkeydown = (e) => {
	if (normal_mode) {
		switch (e.keyCode) {
			case 87:
				stick_up();
				merge_up();
				stick_up();
				r_down();
				render();
				key_downs[0] = true;
				break;
			case 83:
				stick_down();
				merge_down();
				stick_down();
				r_up();
				render();
				key_downs[1] = true;
				break;
			case 68:
				stick_right();
				merge_right();
				stick_right();
				r_left();
				render();
				key_downs[2] = true;
				break;
			case 65:
				stick_left();
				merge_left();
				stick_left();
				r_right();
				render();
				key_downs[3] = true;
				break;
		}
	}
};