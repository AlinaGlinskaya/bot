module.exports = {
	question1Options: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Гермиона Грейнджер', callback_data: '1'}],
				[{text: 'Билл Уизли', callback_data: '2'}],
				[{text: 'Перси Уизли', callback_data: '3'}],
				[{text: 'Барти Крауч младший', callback_data: '4'}],
			],
		}),
	}
}