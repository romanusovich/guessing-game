class GuessingGame {
  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    const L = this.min;
    const R = this.max;
    const m = Math.ceil((L + R) / 2);
    return m;
  }

  lower() {
    const L = this.min;
    const R = this.max;
    const m = Math.ceil((L + R) / 2);
    this.max = m;
  }

  greater() {
    const L = this.min;
    const R = this.max;
    const m = Math.ceil((L + R) / 2);
    this.min = m;
  }
}

module.exports = GuessingGame;
