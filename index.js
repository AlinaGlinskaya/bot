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

const firstQuestion = (chatId) => {
	result = 0;
	bot.sendMessage(chatId, testQuestions['1'], question1Options);
	let reply = '';
	bot.on('callback_query', msg => {
		const data = msg.data;
		const chatId = msg.message.chat.id;
		if (data === '1') {
			result++;
		}
		if (data >= 1 && data <= 4) {
			const rightAnswer = '1';
			bot.editMessageReplyMarkup({ inline_keyboard: generateInlineKeyboard(question1Options, data, rightAnswer) }, { chat_id: chatId, message_id: msg.message.message_id })
				.then(() => {
					return bot.sendPhoto(chatId, images['1']);
				})
				.then(() => {
					switch (data) {
						case '1':
							reply = answers.question1[1];
							break;
						case '2':
							reply = answers.question1[2];
							break;
						case '3':
							reply = answers.question1[3];
							break;
						case '4':
							reply = answers.question1[4];
							break;
						default:
							reply = '';
					}
					return bot.sendMessage(chatId, reply, continueOptions['1']);
				})
		}
	})
};

const secondQuestion = (chatId) => {
	bot.sendMessage(chatId, testQuestions['2'], question2Options);
	let reply = '';
	bot.on('callback_query', msg => {
		const data = msg.data;
		if (data === '7') {
			result++;
		}
		if (data >= 5 && data <= 8) {
			const rightAnswer = '7';
			bot.editMessageReplyMarkup({ inline_keyboard: generateInlineKeyboard(question2Options, data, rightAnswer) }, { chat_id: chatId, message_id: msg.message.message_id })
				.then(() => {
					return bot.sendPhoto(chatId, images['2']);
				})
				.then(() => {
					switch (data) {
						case '5':
							reply = answers.question2[1];
							break;
						case '6':
							reply = answers.question2[2];
							break;
						case '7':
							reply = answers.question2[3];
							break;
						case '8':
							reply = answers.question2[4];
							break;
						default:
							reply = '';
					}
					return bot.sendMessage(chatId, reply, continueOptions['2']);
				})
		}
	});
};

const thirdQuestion = (chatId) => {
	bot.sendMessage(chatId, testQuestions['3'], question3Options);
	let reply = '';
	bot.on('callback_query', msg => {
		const data = msg.data;
		if (data === '12') {
			result++;
		}
		if (data >= 9 && data <= 12) {
			const rightAnswer = '12';
			bot.editMessageReplyMarkup({ inline_keyboard: generateInlineKeyboard(question3Options, data, rightAnswer) }, { chat_id: chatId, message_id: msg.message.message_id })
				.then(() => {
					return bot.sendPhoto(chatId, images['3']);
				})
				.then(() => {
					switch (data) {
						case '9':
							reply = answers.question3[1];
							break;
						case '10':
							reply = answers.question3[2];
							break;
						case '11':
							reply = answers.question3[3];
							break;
						case '12':
							reply = answers.question3[4];
							break;
						default:
							reply = '';
					}
					return bot.sendMessage(chatId, reply, continueOptions['3']);
				})
		}
	});
};

const fourthQuestion = (chatId) => {
	bot.sendMessage(chatId, testQuestions['4'], question4Options);
	let reply = '';
	bot.on('callback_query', msg => {
		const data = msg.data;
		if (data === '16') {
			result++;
		}
		if (data >= 13 && data <= 16) {
			const rightAnswer = '16';
			bot.editMessageReplyMarkup({ inline_keyboard: generateInlineKeyboard(question4Options, data, rightAnswer) }, { chat_id: chatId, message_id: msg.message.message_id })
				.then(() => {
					return bot.sendPhoto(chatId, images['4']);
				})
				.then(() => {
					switch (data) {
						case '13':
							reply = answers.question4[1];
							break;
						case '14':
							reply = answers.question4[2];
							break;
						case '15':
							reply = answers.question4[3];
							break;
						case '16':
							reply = answers.question4[4];
							break;
						default:
							reply = '';
					}
					return bot.sendMessage(chatId, reply, continueOptions['4']);
				})
		}
	});
}

const fifthQuestion = (chatId) => {
	bot.sendMessage(chatId, testQuestions['5'], question5Options);
	let reply = '';
	bot.on('callback_query', msg => {
		const data = msg.data;
		if (data === '18') {
			result++;
		}
		if (data >= 17 && data <= 20) {
			const rightAnswer = '18';
			bot.editMessageReplyMarkup({ inline_keyboard: generateInlineKeyboard(question5Options, data, rightAnswer) }, { chat_id: chatId, message_id: msg.message.message_id })
				.then(() => {
					return bot.sendPhoto(chatId, images['5']);
				})
				.then(() => {
					switch (data) {
						case '17':
							reply = answers.question5[1];
							break;
						case '18':
							reply = answers.question5[2];
							break;
						case '19':
							reply = answers.question5[3];
							break;
						case '20':
							reply = answers.question5[4];
							break;
						default:
							reply = '';
					}
					return bot.sendMessage(chatId, reply, continueOptions['5']);
				})
		}
	});
}

const sixthQuestion = (chatId) => {
	bot.sendMessage(chatId, testQuestions['6'], question6Options);
	let reply = '';
	bot.on('callback_query', msg => {
		const data = msg.data;
		if (data === '21') {
			result++;
		}
		if (data >= 21 && data <= 24) {
			const rightAnswer = '21';
			bot.editMessageReplyMarkup({ inline_keyboard: generateInlineKeyboard(question6Options, data, rightAnswer) }, { chat_id: chatId, message_id: msg.message.message_id })
				.then(() => {
					return bot.sendPhoto(chatId, images['6']);
				})
				.then(() => {
					switch (data) {
						case '21':
							reply = answers.question6[1];
							break;
						case '22':
							reply = answers.question6[2];
							break;
						case '23':
							reply = answers.question6[3];
							break;
						case '24':
							reply = answers.question6[4];
							break;
						default:
							reply = '';
					}
					return bot.sendMessage(chatId, reply, continueOptions['6']);
				})
		}
	});
}

const sevenQuestion = (chatId) => {
	bot.sendMessage(chatId, testQuestions['7'], question7Options);
	let reply = '';
	bot.on('callback_query', msg => {
		const data = msg.data;
		if (data === '27') {
			result++;
		}
		if (data >= 25 && data <= 28) {
			const rightAnswer = '27';
			bot.editMessageReplyMarkup({ inline_keyboard: generateInlineKeyboard(question7Options, data, rightAnswer) }, { chat_id: chatId, message_id: msg.message.message_id })
				.then(() => {
					return bot.sendPhoto(chatId, images['7']);
				})
				.then(() => {
					switch (data) {
						case '25':
							reply = answers.question7[1];
							break;
						case '26':
							reply = answers.question7[2];
							break;
						case '27':
							reply = answers.question7[3];
							break;
						case '28':
							reply = answers.question7[4];
							break;
						default:
							reply = '';
					}
					return bot.sendMessage(chatId, reply, continueOptions['7']);
				})
		}
	});
}

const eightQuestion = (chatId) => {
	bot.sendMessage(chatId, testQuestions['8'], question8Options);
	let reply = '';
	bot.on('callback_query', msg => {
		const data = msg.data;
		if (data === '31') {
			result++;
		}
		if (data >= 29 && data <= 32) {
			const rightAnswer = '31';
			bot.editMessageReplyMarkup({ inline_keyboard: generateInlineKeyboard(question8Options, data, rightAnswer) }, { chat_id: chatId, message_id: msg.message.message_id })
				.then(() => {
					return bot.sendPhoto(chatId, images['8']);
				})
				.then(() => {
					switch (data) {
						case '29':
							reply = answers.question8[1];
							break;
						case '30':
							reply = answers.question8[2];
							break;
						case '31':
							reply = answers.question8[3];
							break;
						case '32':
							reply = answers.question8[4];
							break;
						default:
							reply = '';
					}
					return bot.sendMessage(chatId, reply, continueOptions['8']);
				})
		}
	});
}

const nineQuestion = (chatId) => {
	bot.sendMessage(chatId, testQuestions['9'], question9Options);
	let reply = '';
	bot.on('callback_query', msg => {
		const data = msg.data;
		if (data === '33') {
			result++;
		}
		if (data >= 33 && data <= 36) {
			const rightAnswer = '33';
			bot.editMessageReplyMarkup({ inline_keyboard: generateInlineKeyboard(question9Options, data, rightAnswer) }, { chat_id: chatId, message_id: msg.message.message_id })
				.then(() => {
					return bot.sendPhoto(chatId, images['9']);
				})
				.then(() => {
					switch (data) {
						case '33':
							reply = answers.question9[1];
							break;
						case '34':
							reply = answers.question9[2];
							break;
						case '35':
							reply = answers.question9[3];
							break;
						case '36':
							reply = answers.question9[4];
							break;
						default:
							reply = '';
					}
					return bot.sendMessage(chatId, reply, continueOptions['9']);
				})
		}
	});
}

const tenQuestion = (chatId) => {
	bot.sendMessage(chatId, testQuestions['10'], question10Options);
	let reply = '';
	bot.on('callback_query', msg => {
		const data = msg.data;
		if (data === '38') {
			result++;
		}
		if (data >= 37 && data <= 40) {
			const rightAnswer = '38';
			bot.editMessageReplyMarkup({ inline_keyboard: generateInlineKeyboard(question10Options, data, rightAnswer) }, { chat_id: chatId, message_id: msg.message.message_id })
				.then(() => {
					return bot.sendPhoto(chatId, images['10']);
				})
				.then(() => {
					switch (data) {
						case '37':
							reply = answers.question10[1];
							break;
						case '38':
							reply = answers.question10[2];
							break;
						case '39':
							reply = answers.question10[3];
							break;
						case '40':
							reply = answers.question10[4];
							break;
						default:
							reply = '';
					}
					return bot.sendMessage(chatId, reply, continueOptions['10']);
				})
		}
	});
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
			firstQuestion(chatId);
			return;
		}

		return bot.sendMessage(chatId, 'Я всего лишь бот, я не знаю такой команды, попробуйте ещё раз!)');
	});

	bot.on('callback_query', msg => {
		const chatId = msg.message.chat.id;
		switch (msg.data) {
			case 'question1':
				firstQuestion(chatId);
				break;
			case 'question2':
				secondQuestion(chatId);
				break;
			case 'question3':
				thirdQuestion(chatId);
				break;
			case 'question4':
				fourthQuestion(chatId);
				break;
			case 'question5':
				fifthQuestion(chatId);
				break;
			case 'question6':
				sixthQuestion(chatId);
				break;
			case 'question7':
				sevenQuestion(chatId);
				break;
			case 'question8':
				eightQuestion(chatId);
				break;
			case 'question9':
				nineQuestion(chatId);
				break;
			case 'question10':
				tenQuestion(chatId);
				break;
			case 'finish':
				calculateResult(chatId);
				break;
		}
	});
};

start();