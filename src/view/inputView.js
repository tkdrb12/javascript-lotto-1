const Console = require("../util/Console");

const InputView = {
  async readMoney() {
    const money = await Console.readline("구입금액을 입력해 주세요.");
    return money;
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readline("당첨 번호를 입력해 주세요.");
    return winningNumbers;
  },

  async readBonusNumber() {
    const bonusNumber = await Console.readline("보너스 번호를 입력해 주세요. ");
    return bonusNumber;
  },

  async readCommandRestart() {
    const bonusNumber = await Console.readline("다시 시작하시겠습니까? (y/n)");
    return bonusNumber;
  },

  close() {
    Console.close();
  },
};

module.exports = InputView;
