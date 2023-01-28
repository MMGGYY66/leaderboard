// Leaderboard APP
import './styles/main.css'
import leaderboard from './images/leaderboard1.png'
import Github from './images/github.svg'

const loadLeaderHead = () => {
  const leaderHead = document.getElementById('leader');
  leaderHead.src = leaderboard;
  leaderHead.alt = 'leaderboard';
  leaderHead.setAttribute('class', 'header-icon');
};

const loadGithubIcon = () => {
  const github = document.getElementById('github');
  github.src = Github;
  github.alt = 'github';
  github.setAttribute('class', 'github-icon');
};


window.onload = () => {
  loadLeaderHead();
  loadGithubIcon();
};