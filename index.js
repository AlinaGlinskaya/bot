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

const generateQuestion = async (
	chatId,
	questionOptions,
	questionNumber
) => {
	if (questionNumber === 1) {
		result = 0;
	}
	return bot.sendMessage(chatId, testQuestions[questionNumber], questionOptions);
}

const generateAnswer = async (chatId, questionOptions, questionNumber, data, msgId, rightAnswer) => {
	let reply = '';
	if (ranges[questionNumber].includes(data)) {
		await bot.editMessageReplyMarkup({ inline_keyboard: generateInlineKeyboard(questionOptions, data, rightAnswer) }, { chat_id: chatId, message_id: msgId })
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
			})
			.then(() => {
				bot.sendMessage(chatId, reply, continueOptions[questionNumber]);
				if (data === rightAnswer) {
					return result++;
				}
				return result;
			})
	}
};

const calculateResult = (chatId) => {
	bot.sendMessage(chatId, `Ваш результат: ${result} из 10`);
	if (result <= 3) {
		bot.sendMessage(chatId, 'Безобразие! Кажется, ты совсем забыл о мире Гарри, или вовсе не читал книг. Это нужно срочно исправить, а то чё как магл!');
		return bot.sendPhoto(chatId, './image/final1.jpg');
	}
	if (result > 3 && result <= 6) {
		bot.sendMessage(chatId, 'Неплохой результат для такого сложного теста! Гарри доволен)');
		return bot.sendPhoto(chatId, './image/final2.jpg');
	}
	if (result > 6 && result <= 9) {
		bot.sendMessage(chatId, 'Отлично! Ты прекрасен как Гермиона Грейнджер (книжная!) ;)');
		return bot.sendPhoto(chatId, './image/final3.jpg');
	}
	if (result === 10) {
		bot.sendMessage(chatId, 'Вау!!!! 100 баллов Гриффиндору!!! Ты великолепен!');
		return bot.sendPhoto(chatId, './image/final4.webp');
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
		result = 0;

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
			generateQuestion(chatId, question1Options, 1);
			return;
		}

		return bot.sendMessage(chatId, 'Я всего лишь бот, я не знаю такой команды, попробуй ещё раз!)');
	});

	bot.on('callback_query', msg => {
		const chatId = msg.message.chat.id;
		const msgId = msg.message.message_id;
		const data = msg.data;
		if (data >= 1 && data <= 4) {
			generateAnswer(chatId, question1Options, 1, data, msgId, '1');
		}
		if (data >= 5 && data <= 8) {
			generateAnswer(chatId, question2Options, 2, data, msgId, '7');
		}
		if (data >= 9 && data <= 12) {
			generateAnswer(chatId, question3Options, 3, data, msgId, '12');
		}
		if (data >= 13 && data <= 16) {
			generateAnswer(chatId, question4Options, 4, data, msgId, '16');
		}
		if (data >= 17 && data <= 20) {
			generateAnswer(chatId, question5Options, 5, data, msgId, '18');
		}
		if (data >= 21 && data <= 24) {
			generateAnswer(chatId, question6Options, 6, data, msgId, '21');
		}
		if (data >= 25 && data <= 28) {
			generateAnswer(chatId, question7Options, 7, data, msgId, '27');
		}
		if (data >= 29 && data <= 32) {
			generateAnswer(chatId, question8Options, 8, data, msgId, '31');
		}
		if (data >= 33 && data <= 36) {
			generateAnswer(chatId, question9Options, 9, data, msgId, '33');
		}
		if (data >= 37 && data <= 40) {
			generateAnswer(chatId, question10Options, 10, data, msgId, '38');
		}
		switch (data) {
			case 'question1':
				generateQuestion(chatId, question1Options, 1);
				break;
			case 'question2':
				generateQuestion(chatId, question2Options, 2);
				break;
			case 'question3':
				generateQuestion(chatId, question3Options, 3);
				break;
			case 'question4':
				generateQuestion(chatId, question4Options, 4);
				break;
			case 'question5':
				generateQuestion(chatId, question5Options, 5);
				break;
			case 'question6':
				generateQuestion(chatId, question6Options, 6);
				break;
			case 'question7':
				generateQuestion(chatId, question7Options, 7);
				break;
			case 'question8':
				generateQuestion(chatId, question8Options, 8);
				break;
			case 'question9':
				generateQuestion(chatId, question9Options, 9);
				break;
			case 'question10':
				generateQuestion(chatId, question10Options, 10);
				break;
			case 'finish':
				calculateResult(chatId);
				break;
			default:
				return;
		}
	});
};

start();