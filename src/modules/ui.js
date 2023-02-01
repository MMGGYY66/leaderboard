class UI {
  constructor() {
    this.list = document.querySelector('#scores');
    this.nameInput = document.querySelector('#name');
    this.scoreInput = document.querySelector('#score');
  }

  addToUI(arr) {
    this.list.innerHTML = '';
    arr.forEach((el) => {
      this.list.innerHTML += `
          <p class="item">${el.user} : ${el.score}</p>
          `;
    });
  }

  cleanInputs() {
    this.nameInput.value = '';
    this.scoreInput.value = '';
  }
}

export default UI;