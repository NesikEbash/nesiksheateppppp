// Указываем адрес сервера WebSocket (Замените на свой сервер)
const socket = new WebSocket('ws://your-heroku-websocket-server.herokuapp.com');

socket.onopen = () => {
    console.log('Соединение с сервером установлено');
};

socket.onmessage = (event) => {
    // Получаем сообщение от сервера
    const message = event.data;
    const messagesDiv = document.getElementById("messages");

    // Создаем новый элемент для сообщения
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;

    // Добавляем сообщение в чат
    messagesDiv.appendChild(messageElement);

    // Прокручиваем чат вниз
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();

    if (messageText) {
        // Отправка сообщения на сервер
        socket.send(messageText);

        // Очистка поля ввода
        messageInput.value = "";
    }
}
