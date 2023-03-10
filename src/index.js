// Leaderboard APP
import Github from './images/github.svg';
import Leaderboard from './modules/leaderboard.js';
import leaderboardImg from './images/leaderboard1.png';

import UI from './modules/ui.js';
import './styles/main.css';

const addForm = document.querySelector('form');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const refresh = document.querySelector('#refresh-button');

const leaderboard = new Leaderboard();
const ui = new UI();

let gameId;
const startGame = () => {
  leaderboard
    .startGame('chess')
    .then((response) => response.result.split(' '))
    .then((res) => {
      [gameId] = [res[3]];
    });
};

const getScores = () => {
  leaderboard.getScores(gameId)
    .then((response) => ui.addToUI(response.result));
};

const postScore = (e) => {
  leaderboard.postScore(gameId, nameInput.value, scoreInput.value);
  ui.cleanInputs();
  e.preventDefault();
};

function loadGithubIcon() {
  const github = document.getElementById('github');
  github.src = Github;
  github.alt = 'github';
  github.setAttribute('class', 'github-icon');
}

const loadLeaderHead = () => {
  const leaderHead = document.getElementById('leader');
  leaderHead.src = leaderboardImg;
  leaderHead.alt = 'leaderboard';
  leaderHead.setAttribute('class', 'header-icon');
};

window.onload = () => {
  loadLeaderHead();
  loadGithubIcon();
};

document.addEventListener('DOMContentLoaded', startGame);
addForm.addEventListener('submit', postScore);
refresh.addEventListener('click', getScores);
