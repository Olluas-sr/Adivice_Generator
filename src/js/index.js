const btn = document.getElementById('btn_dado')
const advice = document.getElementById('advice')
const adviceNumber = document.getElementById('adviceId')

async function geraConselho() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adiviceId = `A D I V I C E # ${adviceContent.slip.id}`;
    const adiviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerHTML = adiviceId;
    advice.innerHTML = adiviceText;
}

btn.addEventListener("click", geraConselho);

geraConselho();
