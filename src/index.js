// Leaderboard APP
import './styles/main.css';
import Github from './images/github.svg';

const loadGithubIcon = () => {
  const github = document.getElementById('github');
  github.src = Github;
  github.alt = 'github';
  github.setAttribute('class', 'github-icon');
};

window.onload = () => {
  loadGithubIcon();
};