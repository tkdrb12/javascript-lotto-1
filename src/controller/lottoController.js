const LottoGame = require("../domain/LottoGame");
const Validation = require("../domain/Validation");
const InputView = require("../view/inputView");
const OutputView = require("../view/outputView");

const LottoController = {
  /** @type {LottoGame} */
  lottoGame: undefined,

  async playLotto() {
    this.lottoGame = new LottoGame();
    await this.purchaseLotto();
    await this.LotteryTicket();
    await this.restart();
  },

  async purchaseLotto() {
    const money = await this.readMoney();

    this.lottoGame.makeLottos(money);

    OutputView.printLottoCount(this.lottoGame.lottoCount);
    OutputView.printPurchaseLottos(this.lottoGame.lottos);
  },

  async LotteryTicket() {
    const winNumbers = await this.readWinNumbers();
    const bonusNumber = await this.readBonusNumber(winNumbers);

    this.lottoGame.makeWinLotto(winNumbers, bonusNumber);
    const rankResult = this.lottoGame.calculateRankResult();
    const revenue = this.lottoGame.calculateRevenueRate(rankResult);

    OutputView.printRankResult(rankResult);
    OutputView.printRevenue(revenue);
  },

  async restart() {
    try {
      const command = await InputView.readCommandRestart();
      Validation.validateRestartCommand(command);
      return command === "y" ? this.playLotto() : InputView.close();
    } catch (e) {
      OutputView.printErrorMessage(e.message);
      return this.restart();
    }
  },

  async readMoney() {
    try {
      const money = await InputView.readMoney();
      Validation.validateMoney(money);
      return money;
    } catch (e) {
      OutputView.printErrorMessage(e.message);
      return this.readMoney();
    }
  },

  async readWinNumbers() {
    try {
      const input = await InputView.readWinNumbers();
      const winNumbers = input.split(",").map((num) => parseInt(num));
      Validation.validateWinNumber(winNumbers);
      return winNumbers;
    } catch (e) {
      OutputView.printErrorMessage(e.message);
      return this.readWinNumbers();
    }
  },

  async readBonusNumber(winLotto) {
    try {
      const input = await InputView.readBonusNumber();
      const bonusNumber = parseInt(input);
      Validation.validateBonusNumber(winLotto, bonusNumber);
      return bonusNumber;
    } catch (e) {
      OutputView.printErrorMessage(e.message);
      return this.readBonusNumber(winLotto);
    }
  },
};

module.exports = LottoController;
