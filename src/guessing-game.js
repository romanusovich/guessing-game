class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let L = this.min;
        let R = this.max;
        let m = Math.ceil((L + R) / 2);
        return m;
    }

    lower() {
        let L = this.min;
        let R = this.max;
        let m = Math.ceil((L + R) / 2);
        this.max = m;
    }

    greater() {
        let L = this.min;
        let R = this.max;
        let m = Math.ceil((L + R) / 2);
        this.min = m;
    }
}

module.exports = GuessingGame;
