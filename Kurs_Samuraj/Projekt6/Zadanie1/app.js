const btn = document.querySelector('button');
const div = document.querySelector('div')

const names = ['Monika', 'Ania', 'Magdalena', 'Gabrysia', 'Dominika', 'Klaudia', 'Kasia']
const prefixes = ['Myślę', 'Mam wrażenie', 'Szczerze uważam']

const nameGenerator = () => {
    const randIndex = Math.floor(Math.random() * names.length);
    const randPrefix =
    div.textContent = `${prefixes[Math.floor(Math.random() * prefixes.length)]}, że najfajniejsze imie to ${names[randIndex]}`;
}

btn.addEventListener('click', nameGenerator);