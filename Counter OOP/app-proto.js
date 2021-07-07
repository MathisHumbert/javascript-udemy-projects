function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Counter(element, value) {
  this.counter = element;
  this.value = value;

  this.valueDOM = element.querySelector('.value');
  this.decreaseBtn = element.querySelector('.decrease');
  this.resetBtn = element.querySelector('.reset');
  this.increaseBtn = element.querySelector('.increase');

  this.reset = this.reset.bind(this);
  this.decrease = this.decrease.bind(this);
  this.increase = this.increase.bind(this);

  this.resetBtn.addEventListener('click', this.reset);
  this.increaseBtn.addEventListener('click', this.increase);
  this.decreaseBtn.addEventListener('click', this.decrease);
  this.valueDOM.textContent = this.value;
}

Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
