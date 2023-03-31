const h1 = document.querySelector('h1');
const par = document.getElementsByClassName('par');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  par,
  parrafito,
  pid,
  input
});

h1.innerHTML = 'Patito';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = "Loki";

const img = document.createElement('img');
img.setAttribute('src', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d94eabf-4257-437f-a08d-5ee63b69705f/ddmp56o-97465794-a84e-445b-aa24-f28ff8e53982.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRkOTRlYWJmLTQyNTctNDM3Zi1hMDhkLTVlZTYzYjY5NzA1ZlwvZGRtcDU2by05NzQ2NTc5NC1hODRlLTQ0NWItYWEyNC1mMjhmZjhlNTM5ODIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kR0qtItE9GfwrsQ9vKEGjklacgnTmbmjnVj2yllVEZ8');

console.log(img);


pid.innerHTML = "";
pid.appendChild(img);


