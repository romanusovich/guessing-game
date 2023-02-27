class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let L = this.min;
        let R = this.max;
        let m = Math.floor((L + R) / 2);
        return m;
    }

    lower() {
        let L = this.min;
        let R = this.max;
        let m = Math.floor((L + R) / 2);
        this.max = m - 1;
    }

    greater() {
        let L = this.min;
        let R = this.max;
        let m = Math.floor((L + R) / 2);
        this.min = m + 1;
    }
}

module.exports = GuessingGame;
