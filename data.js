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
	},

	question2Options: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Англия и Венгрия', callback_data: '5'}],
				[{text: 'Уэльс и Швейцария', callback_data: '6'}],
				[{text: 'Ирландия и Болгария', callback_data: '7'}],
				[{text: 'Египет и Ирландия', callback_data: '8'}],
			]
		})
	},

	question3Options: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Лошадь', callback_data: '9'}],
				[{text: 'Заяц', callback_data: '10'}],
				[{text: 'Выдра', callback_data: '11'}],
				[{text: 'Лебедь', callback_data: '12'}],
			]
		})
	},

	question4Options: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Невилл Долгопупс', callback_data: '13'}],
				[{text: 'Седрик Диггори', callback_data: '14'}],
				[{text: 'Гермиона Грейнджер', callback_data: '15'}],
				[{text: 'Нимфадора Тонкс', callback_data: '16'}],
			]
		})
	},

	question5Options: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Рог двурога', callback_data: '17'}],
				[{text: 'Настойка полыни', callback_data: '18'}],
				[{text: 'Шкура бумсланга', callback_data: '19'}],
				[{text: 'Златоглазки', callback_data: '20'}],
			]
		})
	},

	question6Options: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Билл Уизли', callback_data: '21'}],
				[{text: 'Чжоу Чанг', callback_data: '22'}],
				[{text: 'Винсент Крэбб', callback_data: '23'}],
				[{text: 'Минерва МакГонагалл', callback_data: '24'}],
			]
		})
	},

	question7Options: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Персиваль и Кендра', callback_data: '25'}],
				[{text: 'Аберфорт и Кендра', callback_data: '26'}],
				[{text: 'Аберфорт и Ариана', callback_data: '27'}],
				[{text: 'Персиваль и Меропа', callback_data: '28'}],
			]
		})
	},

	question8Options: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'В Ордене Феникса был предатель', callback_data: '29'}],
				[{text: 'Гарри выдала Букля', callback_data: '30'}],
				[{text: 'Гарри выдало заклинание Экспеллиармус', callback_data: '31'}],
				[{text: 'Гарри выдало то, что он летел с Хагридом', callback_data: '32'}],
			]
		})
	},

	question9Options: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Снитч', callback_data: '33'}],
				[{text: 'Венгерская хвосторога', callback_data: '34'}],
				[{text: 'Молния', callback_data: '35'}],
				[{text: 'Лев', callback_data: '36'}],
			]
		})
	},

	question10Options: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Волан-де-Морт', callback_data: '37'}],
				[{text: 'Регулус Блэк', callback_data: '38'}],
				[{text: 'Невилл Долгопупс', callback_data: '39'}],
				[{text: 'Альбус Дамблдор', callback_data: '40'}],
			]
		})
	},

	answers: {
		1: {
			'1': 'Именно так! Гермиона получила 11 оценок «Превосходно» и одну «Выше ожидаемого» — по Защите от Тёмных Искусств',
			'2': 'Несмотря на свою отвязную внешность, Билл был старостой школы и отличным студентом, набравшим 12 «Превосходно» на СОВ. А вот Гермиона получила 11 оценок «Превосходно» и одну «Выше ожидаемого» — по Защите от Тёмных Искусств',
			'3': 'Ну уж нет, «идеальный» Перси был идеален во всём, в том числе на СОВ. 11 «Превосходно» и 1 «Выше ожидаемого» (по Защите от Тёмных Искусств) получила Гермиона',
			'4': 'Вообще-то тёмные маги тоже отлично учатся!) Иногда набирают 12 «Превосходно». А вот Гермиона получила 11 оценок «Превосходно» и одну «Выше ожидаемого» — по Защите от Тёмных Искусств'
		},
		2: {
			'1': 'Нет. Англия в финал не прошла, и наши герои, конечно же, болели за Ирландию. Которая играла против болгар и против самого Виктора Крама',
			'2': 'Нет. Уэльс в финал не прошёл, и наши герои, конечно же, болели за Ирландию. Которая играла против болгар и против самого Виктора Крама',
			'3': 'Отлично!',
			'4': 'Нет-нет. Ирландия играла с Болгарией, и именно на этом матче мы познакомились с Виктором Крамом. Правда, Египет тоже был на поле — оттуда родом был судья'
		},
		3: {
			'1': 'Это Патронус Джинни Уизли. Патронус Чжоу - лебедь',
			'2': 'Это Патронус Полумны Лавгуд. Патронус Чжоу - лебедь',
			'3': 'Это Патронус Гермионы Грейнджер. Патронус Чжоу - лебедь',
			'4': 'Верно!'
		},
		4: {
			'1': 'Нет. Белластриса Лестрейндж пытала Невилла тем же заклятием, которым довела до сумасшествия его родителей. Круциатус не применяли к Нимфадоре Тонкс',
			'2': 'Круциатус не применяли к Нимфадоре Тонкс. Седрика незадолго до смерти пытал в лабиринте Виктор Крам, находясь под действием заклятия Империус',
			'3': 'Круциатус не применяли к Нимфадоре Тонкс. Гермиону пытала Беллатриса Лестрейндж в особняке Малфоев',
			'4': 'Верно!'
		},
		5: {
			'1': 'Нет. Рог двурога — один из запрещённых ингредиентов, которые украла для зелья Гермиона. Златоглазки можно было найти в школьном шкафу. А вот настойка полыни для Оборотного зелья не нужна, она входит в состав напитка Живой смерти',
			'2': 'Верно! Снегг гордился бы тобой)',
			'3': 'Шкура бумсланга — один из запрещённых ингредиентов, которые украла для зелья Гермиона. Златоглазки можно было найти в школьном шкафу. А вот настойка полыни для Оборотного зелья не нужна, она входит в состав напитка Живой смерти',
			'4': 'Нет. Златоглазки нужны, но красть их на втором курсе Гермионе не пришлось — они и так были в школьном шкафу ингредиентов. А вот настойка полыни для Оборотного зелья не нужна, она входит в состав напитка Живой смерти'
		},
		6: {
			'1': 'Верно! Билл был отличником и старостой, но в квиддич не играл',
			'2': 'Конечно, нет! Чжоу отлично играла в квиддич, и Гарри влюбился в неё на игре Гриффиндор против Когтеврана. А вот Билл Уизли в квиддич не играл',
			'3': 'Вот и нет. Крэбб и Гойл были загонщиками в сборной Слизерина, видать, их «протащил» туда Драко Малфой, который был ловцом. А вот Билл Уизли в квиддич не играл',
			'4': 'Нет. В квиддич не играл Билл Уизли. А профессор МакГонагалл в своё время была отличным игроком. Видимо, поэтому сразу разглядела талант и в Гарри'
		},
		7: {
			'1': 'Нет, так звали родителей Дамблдора. Брата звали Аберфорт, а сестру — Ариана',
			'2': 'Не совсем. Брата действительно звали Аберфорт, а сестру — Ариана. Кендра — это имя матери Дамблдора',
			'3': 'Верно! Засахаренную лимонную дольку тебе)',
			'4': 'Нет. Их звали Аберфорт и Ариана. Персиваль — отец Дамблдора, Меропа — мать Волан-де-Морта'
		},
		8: {
			'1': 'Нет. Гарри выдало его «фирменное» заклинание Экспеллиармус, он предпочитал разоружать Пожирателей, а не убивать их',
			'2': 'Неверно. Хотя в фильме преподнесли именно эту версию. На самом деле Гарри выдало его «фирменное» заклинание Экспеллиармус, он предпочитал разоружать Пожирателей, а не убивать их',
			'3': 'Верно! Как здорово, что ты это помнишь, несмотря на то что в фильме была версия про Буклю!)',
			'4': 'Нет. Гарри выдало его «фирменное» заклинание Экспеллиармус, он предпочитал разоружать Пожирателей, а не убивать их'
		},
		9: {
			'1': 'Верно!',
			'2': 'Нет. Торт был в форме снитча. Венгерская хвосторога была на свитере, который миссис Уизли связала для Гарри',
			'3': 'Нет. Торт был в форме снитча. Вряд ли торт в форме молнии порадовал бы Гарри, у него было неоднозначное отношение к своему шраму',
			'4': 'Неверно. Хоть и принадлежность к факультету Гриффиндор значила для Гарри очень много, торт был всё же в форме снитча'
		},
		10: {
			'1': 'Волан-де-Морт уничтожил крестраж внутри Гарри. А вот Регулус не смог уничтожить медальон, и завещал это Кикимеру',
			'2': 'Верно! Хотя Регулус точно был этого достоин',
			'3': 'Нет, Невилл убил Нагайну мечом Годрика Гриффиндора. А вот Регулус не смог уничтожить медальон, и завещал это Кикимеру',
			'4': 'Дамблдор уничтожил кольцо Марволо. А вот Регулус не смог уничтожить медальон, и завещал это Кикимеру'
		}
	},

	continueOptions: {
		'1': {
			reply_markup: JSON.stringify({
				inline_keyboard: [
					[{text: 'Следующий вопрос', callback_data: `question2`}],
				]
			})
		},
		'2': {
			reply_markup: JSON.stringify({
				inline_keyboard: [
					[{text: 'Следующий вопрос', callback_data: `question3`}],
				]
			})
		},
		'3': {
			reply_markup: JSON.stringify({
				inline_keyboard: [
					[{text: 'Следующий вопрос', callback_data: `question4`}],
				]
			})
		},
		'4': {
			reply_markup: JSON.stringify({
				inline_keyboard: [
					[{text: 'Следующий вопрос', callback_data: `question5`}],
				]
			})
		},
		'5': {
			reply_markup: JSON.stringify({
				inline_keyboard: [
					[{text: 'Следующий вопрос', callback_data: `question6`}],
				]
			})
		},
		'6': {
			reply_markup: JSON.stringify({
				inline_keyboard: [
					[{text: 'Следующий вопрос', callback_data: `question7`}],
				]
			})
		},
		'7': {
			reply_markup: JSON.stringify({
				inline_keyboard: [
					[{text: 'Следующий вопрос', callback_data: `question8`}],
				]
			})
		},
		'8': {
			reply_markup: JSON.stringify({
				inline_keyboard: [
					[{text: 'Следующий вопрос', callback_data: `question9`}],
				]
			})
		},
		'9': {
			reply_markup: JSON.stringify({
				inline_keyboard: [
					[{text: 'Следующий вопрос', callback_data: `question10`}],
				]
			})
		},
		'10': {
			reply_markup: JSON.stringify({
				inline_keyboard: [
					[{text: 'Узнать результат', callback_data: `finish`}],
				]
			})
		},
	},

	testQuestions: {
		'1': 'Вопрос 1 из 10.\n Кто из этих персонажей не получил высшие баллы по всем 12 предметам на СОВ?',
		'2': 'Вопрос 2 из 10.\n Сборные каких стран играли в финале Чемпионата мира по квиддичу в «Кубке Огня»?',
		'3': 'Вопрос 3 из 10.\n Какой Патронус у Чжоу Чанг?',
		'4': 'Вопрос 4 из 10.\n Кого из этих персонажей не пытали Круциатусом?',
		'5': 'Вопрос 5 из 10.\n Что из этого не входит в состав Оборотного зелья?',
		'6': 'Вопрос 6 из 10.\n Кто из этих персонажей не был игроком в квиддич?',
		'7': 'Вопрос 7 из 10.\n Как звали брата и сестру Дамблдора?',
		'8': 'Вопрос 8 из 10.\n Когда семеро Поттеров поднялись в ночное небо и отправились в «Нору», как Пожиратели Смерти узнали, какой из Поттеров — настоящий?',
		'9': 'Вопрос 9 из 10.\n Торт в форме чего испекла миссис Уизли для Гарри в честь его совершеннолетия?',
		'10': 'Вопрос 10 из 10.\n Кто из этих персонажей никогда не уничтожал крестраж?'
	},

	images: {
		'1': 'image/1.jpg',
		'2': 'image/2.png',
		'3': 'image/3.jpg',
		'4': 'image/4.jpg',
		'5': 'image/5.jpg',
		'6': 'image/6.jpg',
		'7': 'image/7.jpg',
		'8': 'image/8.webp',
		'9': 'image/9.webp',
		'10': 'image/10.jpg'
	},

	ranges: {
		1: ['1', '2', '3', '4'],
		2: ['5', '6', '7', '8'],
		3: ['9', '10', '11', '12'],
		4: ['13', '14', '15', '16'],
		5: ['17', '18', '19', '20'],
		6: ['21', '22', '23', '24'],
		7: ['25', '26', '27', '28'],
		8: ['29', '30', '31', '32'],
		9: ['33', '34', '35', '36'],
		10: ['37', '38', '39', '40']
	}
}