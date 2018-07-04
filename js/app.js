'use strict';

const social = document.querySelector('.social'),
btn = document.querySelector('.btn');

const data = [
  {
    name: '🌐 Duolingo',
    description: 'Learn a language for free. Forever.',
    url: 'duolingo.com/vasiljevs'
  },
  {
    name: '🚴 Endomondo',
    description: 'Free your endorphins running, walking, cycling and more.',
    url: 'endomondo.com/profile/34596180'
  },
  {
    name: '📚 Goodreads',
    description: 'Meet your next favorite book.',
    url: 'goodreads.com/vasiljevs'
  },
  {
    name: '💻 GitHub',
    description: 'The world\'s leading software development platform.',
    url: 'github.com/vasiljevs'
  },
  {
    name: '🤵 LinkedIn',
    description: 'The world\'s largest professional network.',
    url: 'linkedin.com/in/vasiljevs'
  },
  {
    name: '🤝 Meetup',
    description: 'Meet people near you who share your interests.',
    url: 'meetup.com/members/217255260'
  },
  {
    name: '🏁 TypeRacer',
    description: 'Test your typing speed and learn to type faster.',
    url: 'data.typeracer.com/pit/profile?user=vasiljevs'
  }
];

let output = '';

for (let i = 0; i < data.length; i++) {
  output += `
  <div class="social-item">
    <a class="social-link" href="https://${data[i]['url']}" target="_blank" rel="noopener">
      <h1 class="social-name">${data[i]['name']}</h1>
    </a>
    <p class="social-desc">${data[i]['description']}</p>
  </div>
  `;
} 

social.innerHTML = output;

btn.addEventListener('click', () => {
  window.history.back();
});