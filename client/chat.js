const io = require('socket.io-client');

const socket = io('http://localhost:4000');

const chatForm = get('.msger-inputarea');
const chatInput = get('.msger-input');
const chats = get('.msger-chat');

const USER_IMG = 'https://image.flaticon.com/icons/svg/145/145867.svg';

function get(selector, root = document) {
  return root.querySelector(selector);
}

const current_user = 'JOHN';

chatForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const textMessage = chatInput.value;

  appendMessage(current_user, USER_IMG, 'right', textMessage);

  // send message to other users
  socket.emit('chat-message', { message: textMessage, username: 'Shobhit' });

  chatInput.value = '';
});

function formatDate(date) {
  const h = '0' + date.getHours();
  const m = '0' + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function appendMessage(name, img, side, text) {
  const msgHTML = `
      <div class="msg ${side}-msg">
        <div class="msg-img" style="background-image: url(${img})"></div>
  
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">${name}</div>
            <div class="msg-info-time">${formatDate(new Date())}</div>
          </div>
  
          <div class="msg-text">${text}</div>
        </div>
      </div>
    `;

  chats.insertAdjacentHTML('beforeend', msgHTML);
  chats.scrollTop += 500;
}

socket.on('server-chat-message', (data) => {
  appendMessage(data.username, USER_IMG, 'left', data.message);
});
