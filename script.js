function startAssistant() {
  const synth = window.speechSynthesis;
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  // Спочатку промовити питання
  const message = new SpeechSynthesisUtterance("Привіт! Про що ти хочеш дізнатися?");
  synth.speak(message);

  // Почекати поки скаже, і почати слухати
  message.onend = () => {
    recognition.lang = 'uk-UA'; // українська мова
    recognition.start();

    recognition.onresult = function(event) {
      const userSpeech = event.results[0][0].transcript.toLowerCase();
      console.log("Користувач сказав:", userSpeech);

      let response = "Вибач, я поки не знаю відповіді на це питання.";

      if (userSpeech.includes('спеціальність')) {
        response = "Щоб вибрати спеціальність, подумай, що тобі цікаво: ІТ, медицина, право чи інше.";
      } else if (userSpeech.includes('університет')) {
        response = "Найпопулярніші університети України: КНУ, КПІ, УКУ, ЛНУ та інші.";
      } else if (userSpeech.includes('привіт')) {
        response = "Привіт! Рада тебе чути!";
      }

      const reply = new SpeechSynthesisUtterance(response);
      synth.speak(reply);
    };

    recognition.onerror = function(event) {
      console.error("Помилка розпізнавання:", event.error);
      const errorResponse = new SpeechSynthesisUtterance("Виникла помилка під час розпізнавання голосу.");
      synth.speak(errorResponse);
    };
  };
}
