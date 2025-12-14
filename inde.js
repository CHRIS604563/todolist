let thisEl = document.querySelector('#add-el')
let todoEl = document.querySelector('.todoEl')
let inputEl = document.querySelector('.inputEl')



thisEl.addEventListener('click', () => {
  

  // create a wrapper (p tag in your case)
  let paraEl = document.createElement('p');
  paraEl.className = 'paraEl';

  // add text + button inside
  paraEl.innerHTML = `
    ${inputEl.value}
    <button class="removEl">REMOVE</button>
    <br>
  `;

  // append to body (or better: to todoEl)
  todoEl.appendChild(paraEl);

  // get the button inside THIS paraEl only
  let removEl = paraEl.querySelector('.removEl');

  // add event to remove this paraEl
  removEl.addEventListener('click', () => {
    paraEl.remove()
  });

  // clear input
  inputEl.value = '';
});


