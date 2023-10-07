const TelegramApi = require('node-telegram-bot-api');

const token ='6173423791:AAEg-GTufUbz8tTrallnBsX0Mt3zsX5dc9w';

const bot = new TelegramApi(token, {polling: true});

const {question1Options, question2Options} = require('./data');

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

const firstQuestion = (msg) => {
	const data = msg.data;
	const chatId = msg.message.chat.id;
	let reply = '';
	if (data >= 1 && data <= 4) {
		const rightAnswer = '1';
		bot.editMessageReplyMarkup({inline_keyboard: generateInlineKeyboard(question1Options, data, rightAnswer)}, {chat_id: chatId, message_id: msg.message.message_id})
		.then(() => {
			return bot.sendPhoto(chatId, 'image/1.jpg');
		})
		.then(() => {
			switch(data) {
				case '1': 
				reply = 'Именно так! Гермиона получила 11 оценок «Превосходно» и одну «Выше ожидаемого» — по Защите от Тёмных Искусств';
				break;
				case '2':
					reply = 'Несмотря на свою отвязную внешность, Билл был старостой школы и отличным студентом, набравшим 12 «Превосходно» на СОВ. А вот Гермиона получила 11 оценок «Превосходно» и одну «Выше ожидаемого» — по Защите от Тёмных Искусств';
					break;
				case '3':
					reply = 'Ну уж нет, «идеальный» Перси был идеален во всём, в том числе на СОВ. 11 «Превосходно» и 1 «Выше ожидаемого» (по Защите от Тёмных Искусств) получила Гермиона';
					break;
				case '4':
					reply = 'Вообще-то тёмные маги тоже отлично учатся!) Иногда набирают 12 «Превосходно». А вот Гермиона получила 11 оценок «Превосходно» и одну «Выше ожидаемого» — по Защите от Тёмных Искусств';
					break;
				default:
					reply = '';
			}
			return bot.sendMessage(chatId, reply, continueOptions[0]);
		})
	}
};

const secondQuestion = (chatId) => {
	bot.sendMessage(chatId, 'Второй вопрос', question2Options);
	let reply = '';
	bot.on('callback_query', msg => {
		const data = msg.data;
		if (data >= 5 && data <= 8) {
			const rightAnswer = '6';
			bot.editMessageReplyMarkup({inline_keyboard: generateInlineKeyboard(question2Options, data, rightAnswer)}, {chat_id: chatId, message_id: msg.message.message_id})
			.then(() => {
				return bot.sendPhoto(chatId, 'image/1.jpg');
			})
			.then(() => {
				switch(data) {
					case '5': 
					reply = 'Именно так! Гермиона получила 11 оценок «Превосходно» и одну «Выше ожидаемого» — по Защите от Тёмных Искусств';
					break;
					case '6':
						reply = 'Несмотря на свою отвязную внешность, Билл был старостой школы и отличным студентом, набравшим 12 «Превосходно» на СОВ. А вот Гермиона получила 11 оценок «Превосходно» и одну «Выше ожидаемого» — по Защите от Тёмных Искусств';
						break;
					case '7':
						reply = 'Ну уж нет, «идеальный» Перси был идеален во всём, в том числе на СОВ. 11 «Превосходно» и 1 «Выше ожидаемого» (по Защите от Тёмных Искусств) получила Гермиона';
						break;
					case '8':
						reply = 'Вообще-то тёмные маги тоже отлично учатся!) Иногда набирают 12 «Превосходно». А вот Гермиона получила 11 оценок «Превосходно» и одну «Выше ожидаемого» — по Защите от Тёмных Искусств';
						break;
					default:
						reply = '';
				}
				return bot.sendMessage(chatId, reply, continueOptions[1]);
			})
		}
	});
}

const continueOptions = [
	{
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Следующий вопрос', callback_data: `question2`}],
			]
		})
	},
	{
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Следующий вопрос', callback_data: `question3`}],
			]
		})
	},
	{
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Следующий вопрос', callback_data: `question4`}],
			]
		})
	},
	{
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Следующий вопрос', callback_data: `question5`}],
			]
		})
	},
	{
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Следующий вопрос', callback_data: `question6`}],
			]
		})
	},
	{
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Следующий вопрос', callback_data: `question7`}],
			]
		})
	},
	{
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Следующий вопрос', callback_data: `question8`}],
			]
		})
	},
	{
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Следующий вопрос', callback_data: `question9`}],
			]
		})
	},
	{
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Следующий вопрос', callback_data: `question10`}],
			]
		})
	},
]

const start = () => {
	bot.setMyCommands([
		{command: '/start', description: 'Начальное приветствие'},
		{command: '/info', description: 'Информация о тесте'},
		{command: '/game', description: 'Начать тест'},
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
			return bot.sendMessage(chatId, 'Вопрос 1 из 10. Кто из этих персонажей не получил высшие баллы по всем 12 предметам на СОВ?', question1Options);
		}

		return bot.sendMessage(chatId, 'Я всего лишь бот, я не знаю такой команды, попробуйте ещё раз!)');
	});

	bot.on('callback_query', msg => {
		const chatId = msg.message.chat.id;
		firstQuestion(msg);
		switch(msg.data) {
			case 'question2':
				secondQuestion(chatId);
				break;
		}
	});
};

start();