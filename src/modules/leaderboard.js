class Leaderboard {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  startGame = async (gameName) => {
    const responseStart = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        name: gameName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const responseData = await responseStart.json();
    return responseData;
  }

  getScores = async (gameId) => {
    const responseStart = await fetch(`${this.url}${gameId}/scores/`);
    const responseData = await responseStart.json();
    return responseData;
  }

  async postScore(gameId, name, score) {
    const feedback = document.querySelector('.feedback');

    if (name === '' || score === '') {
      feedback.innerText = 'Please write down the required fields.';
    }
    const responseStart = await fetch(`${this.url}${gameId}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const responseData = await responseStart.json();
    return responseData;
  }
}

export default Leaderboard;