const TelegramApi = require('node-telegram-bot-api');

const token = '6173423791:AAEg-GTufUbz8tTrallnBsX0Mt3zsX5dc9w';

const bot = new TelegramApi(token, { polling: true });

const {
	question1Options,
	question2Options,
	question3Options,
	question4Options,
	question5Options,
	question6Options,
	question7Options,
	question8Options,
	question9Options,
	question10Options,
	continueOptions,
	testQuestions,
	images,
	ranges,
	answers } = require('./data');

let result = 0;

const generateInlineKeyboard = (options, data, rightAnswer) => {
	const keyboard = JSON.parse(options.reply_markup).inline_keyboard;
	keyboard.map((el) => {
		if (el[0].callback_data === data) {
			if (data === rightAnswer) {
				el[0].text += ' ✅';
			} else {
				el[0].text += ' ❌';
			}
		}
		el[0].callback_data = 'finished';
	});
	return keyboard;
};

const generateQuestion = (
	chatId,
	rightAnswer,
	questionOptions,
	questionNumber
) => {
	if (questionNumber === 1) {
		result = 0;
	}
	bot.sendMessage(chatId, testQuestions[questionNumber], questionOptions);
	let reply = '';
	bot.on('callback_query', msg => {
		const data = msg.data;
		if (data === rightAnswer) {
			result++;
		}
		if (ranges[questionNumber].includes(data)) {
			bot.editMessageReplyMarkup({ inline_keyboard: generateInlineKeyboard(questionOptions, data, rightAnswer) }, { chat_id: chatId, message_id: msg.message.message_id })
				.then(() => {
					return bot.sendPhoto(chatId, images[questionNumber]);
				})
				.then(() => {
					switch (data) {
						case ranges[questionNumber][0]:
							reply = answers[questionNumber][1];
							break;
						case ranges[questionNumber][1]:
							reply = answers[questionNumber][2];
							break;
						case ranges[questionNumber][2]:
							reply = answers[questionNumber][3];
							break;
						case ranges[questionNumber][3]:
							reply = answers[questionNumber][4];
							break;
						default:
							reply = '';
					}
					return bot.sendMessage(chatId, reply, continueOptions[questionNumber]);
				})
		}
	})
}

const calculateResult = (chatId) => {
	bot.sendMessage(chatId, `Ваш результат: ${result} из 10`);
	if (result <= 3) {
		bot.sendMessage(chatId, 'Безобразие! Кажется, ты совсем забыл о мире Гарри, или вовсе не читал книг. Это нужно срочно исправить, а то чё как магл!');
		return bot.sendPhoto(chatId, './image/final1.jpg');
	}
	if (result > 3 && result <= 6) {
		bot.sendMessage(chatId, 'Неплохой результат для такого сложного теста! Гарри доволен)');
		return bot.sendSticker(chatId, './image/final2.jpg');
	}
	if (result > 6 && result <= 9) {
		bot.sendMessage(chatId, 'Отлично! Ты прекрасен как Гермиона Грейнджер (книжная!) ;)');
		return bot.sendSticker(chatId, './image/final3.jpg');
	}
	if (result === 10) {
		bot.sendMessage(chatId, 'Вау!!!! 100 баллов Гриффиндору!!! Ты великолепен!');
		return bot.sendSticker(chatId, './image/final4.webp');
	}
};

const start = () => {
	bot.setMyCommands([
		{ command: '/start', description: 'Начальное приветствие' },
		{ command: '/info', description: 'Информация о тесте' },
		{ command: '/game', description: 'Начать тест' },
	]);

	bot.on('message', async msg => {
		const text = msg.text;
		const chatId = msg.chat.id;

		if (text === '/start') {
			await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/656/5cf/6565cf8c-df52-38ad-9982-b4f3fdb92873/4.webp');
			return bot.sendMessage(chatId, `Добро пожаловать, ${msg.chat.first_name}! Это тест по нашему любимому Гарри Поттеру ❤️`);
		}

		if (text === '/info') {
			return bot.sendMessage(chatId, 'Для настоящих фанатов, которые читали книги');
		}

		if (text === '/game') {
			await bot.sendMessage(chatId, 'Погнали!');
			result = 0;
			generateQuestion(chatId, '1', question1Options, 1);
			return;
		}

		return bot.sendMessage(chatId, 'Я всего лишь бот, я не знаю такой команды, попробуй ещё раз!)');
	});

	bot.on('callback_query', msg => {
		const chatId = msg.message.chat.id;
		switch (msg.data) {
			case 'question1':
				generateQuestion(chatId, '1', question1Options, 1);
				break;
			case 'question2':
				generateQuestion(chatId, '7', question2Options, 2);
				break;
			case 'question3':
				generateQuestion(chatId, '12', question3Options, 3);
				break;
			case 'question4':
				generateQuestion(chatId, '16', question4Options, 4);
				break;
			case 'question5':
				generateQuestion(chatId, '18', question5Options, 5);
				break;
			case 'question6':
				generateQuestion(chatId, '21', question6Options, 6);
				break;
			case 'question7':
				generateQuestion(chatId, '27', question7Options, 7);
				break;
			case 'question8':
				generateQuestion(chatId, '31', question8Options, 8);
				break;
			case 'question9':
				generateQuestion(chatId, '33', question9Options, 9);
				break;
			case 'question10':
				generateQuestion(chatId, '38', question10Options, 10);
				break;
			case 'finish':
				calculateResult(chatId);
				break;
		}
	});
};

start();