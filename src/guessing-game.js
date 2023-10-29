class GuessingGame {
  setRange(min, max) {
    this.range = {
      min,
      max,
    };

    this.currentMin = min;
    this.currentMax = max;
  }

  guess() {
    this.assumption = Math.round(this.currentMin / 2 + this.currentMax / 2);
    return this.assumption;
  }

  lower() {
    this.currentMax = this.assumption;
  }

  greater() {
    this.currentMin = this.assumption;
  }
}

module.exports = GuessingGame;
