const app = document.getElementById('app');

const button = document.createElement('button');
button.type = "button";
button.innerText = "randomize hue"

const saturationButton = document.createElement('button');
saturationButton.type = "button";
saturationButton.innerText = "randomize saturation"

const output = document.createElement('h2');
const saturationOutput = document.createElement('h2');

app.appendChild(button)
app.appendChild(saturationButton);
app.appendChild(output);
app.appendChild(saturationOutput);

button.addEventListener('click', () => {
    const value = Math.random() * 360;

    output.innerText = value.toFixed(0);
})

saturationButton.addEventListener('click', () => {
    const value = Math.random() * 100;

    saturationOutput.innerText = value.toFixed(0);
})