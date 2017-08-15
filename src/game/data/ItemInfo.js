class ItemInfo {
  constructor(name, func) {
    this.name = name;
    this.func = func;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  use(stage, playerName) {
    const playerCell = stage.getPlayerCellController().find(playerName);
    if (playerCell !== null && typeof this.func === 'function') {
      this.func(stage, playerCell);
    }
  }
}

module.exports = ItemInfo;
