function sendMessage() {
    const input = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');

    if (input.value.trim() !== "") {
        const userMessage = `<p><strong>Ти:</strong> ${input.value}</p>`;
        chatBox.innerHTML += userMessage;

        // Простий відповідь асистента
        const assistantResponse = `<p><strong>Асистент:</strong> Я обробляю твоє питання...</p>`;
        chatBox.innerHTML += assistantResponse;

        chatBox.scrollTop = chatBox.scrollHeight; // Авто-прокрутка вниз
        input.value = "";
    }
}
