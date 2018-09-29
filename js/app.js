'use strict';

const social = document.querySelector('.social'),
btn = document.querySelector('.btn');

const data = [
  {
    name: 'Duolingo',
    icon: '🌐',
    description: 'Learn a language for free. Forever.',
    url: 'duolingo.com/vasiljevs'
  },
  {
    name: 'Endomondo',
    icon: '🚴',
    description: 'Free your endorphins running, walking, cycling and more.',
    url: 'endomondo.com/profile/34596180'
  },
  {
    name: 'Goodreads',
    icon: '📚',
    description: 'Meet your next favorite book.',
    url: 'goodreads.com/vasiljevs'
  },
  {
    name: 'GitHub',
    icon: '💻',
    description: 'The world\'s leading software development platform.',
    url: 'github.com/vasiljevs'
  },
  {
    name: 'LinkedIn',
    icon: '🤵',
    description: 'The world\'s largest professional network.',
    url: 'linkedin.com/in/vasiljevs'
  },
  {
    name: 'Meetup',
    icon: '🤝',
    description: 'Meet people near you who share your interests.',
    url: 'meetup.com/members/217255260'
  },
  {
    name: 'TypeRacer',
    icon: '🏁',
    description: 'Test your typing speed and learn to type faster.',
    url: 'data.typeracer.com/pit/profile?user=vasiljevs'
  }
];

let output = '';

for (let i = 0; i < data.length; i++) {
  output += `
  <div class="social-item">
    <a class="social-link" href="https://${data[i]['url']}" title="${data[i]['name']}" target="_blank" rel="noopener">
      <h2 class="social-name">${data[i]['icon']} ${data[i]['name']}</h2>
    </a>
    <p class="social-desc">${data[i]['description']}</p>
  </div>
  `;
} 

social.innerHTML = output;

btn.addEventListener('click', () => {

  if (window.innerWidth > 1024) {
    window.location.href = 'https://www.facebook.com/feed';
  } else {
    window.location.href = 'fb://feed/%@';
  }
});