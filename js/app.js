'use strict';

const accounts = [
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

const displayAccount = (data) => {
  let output = '';

  data.forEach((item) => {
    output += `
      <div class="item">
        <a class="link" href="https://${item.url}" title="${item.name}" target="_blank" rel="noopener">
          <h2 class="name">${item.icon} ${item.name}</h2>
        </a>
        <p class="description">${item.description}</p>
      </div>
    `;
  });

  document.querySelector('.accounts').innerHTML = output;
};

displayAccount(accounts);

document.querySelector('.btn').addEventListener('click', () => {
  if (window.innerWidth > 1024) {
    window.location.href = 'https://www.facebook.com/feed';
  } else {
    window.location.href = 'fb://feed/%@';
  }
});