
"use strict"

//===================Menyu Burger==============================

const iconMenu = document.querySelector('.header__menu__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

const wrapper = document.querySelector('.wrapper');
const nashi = document.querySelector('.nashi');
const chto = document.querySelector('.chtovi');
const partner = document.querySelector('.partneri');
const mylist = document.querySelector('.menu__list');

nashi.addEventListener('click', function (e) {
	e.preventDefault();
	let mypartner = document.querySelector('.partner');
	let mychto = document.querySelector('.chto');
	let mynash = document.querySelector('.nash');
	let myhome = document.querySelector('.home');
	let myproton = document.querySelector('.proton');
	if (mypartner) { mypartner.classList.add('zet') };
	if (mynash) { mynash.classList.remove('zet') };
	if (mychto) { mychto.classList.add('zet') };
	myproton.classList.add('zet');
	if (!myhome) {
		mylist.insertAdjacentHTML('afterbegin', `
			<li class="menu__item home">
				<a href="#" class="menu__link nashi">Главная</a>
			</li>
		`)
	};
	if (!mynash) {
		wrapper.insertAdjacentHTML('afterbegin', `
		<div class="nash">
		<div class="container">
			<div class="nash__body">
				<div class="nash__column">
					<div class="nash__item item__1">
						<h2 class="nash__big-title">Наши возможности</h2>
					</div>
				</div>
				<div class="nash__column">
					<div class="nash__item">
						<div class="nash__logo"><img src="img/nv-1.png" alt=""></div>
						<h3 class="nash__title">Покажем тренды</h3>
						<div class="nash__text">Робот-помощник анализирует актив и дает рекомендации по направлению
							торговли на нескольких таймфреймах: H1, М30 и М15</div>
						<h3 class="nash__title">Как использовать</h3>
						<div class="nash__text">Не рекомендовано торговать в шорт если бот рекомендует торговать в лонг на
							всех таймфреймах.</div>
					</div>
				</div>
				<div class="nash__column">
					<div class="nash__item">
						<div class="nash__logo"><img src="img/nv-2.png" alt=""></div>
						<h3 class="nash__title">Stop lose & Take Profit</h3>
						<div class="nash__text">Робот-помощник анализирует волатильность актива за несколько дней,
							рассчитывает размер Stop lose и многоуровневый Take profit для возможности максимизации прибыль
							и минимизации убытков.</div>
						<h3 class="nash__title">Как использовать</h3>
						<div class="nash__text">Получив рассчитанные Stop lose и Take profit вам остается выставить ордера.
						</div>
					</div>
				</div>
				<div class="nash__column">
					<div class="nash__item">
						<div class="nash__logo"><img src="img/nv-3.png" alt=""></div>
						<h3 class="nash__title">Волатильность</h3>
						<div class="nash__text">Робот-помощник анализирует актив и показывает волатильность в процентах и
							пунктах.</div>
						<h3 class="nash__title">Как использовать</h3>
						<div class="nash__text">Чем больше/меньше волатильность, тем больше/меньше должны быть стоп-лос и
							тейк-профиты.</div>
					</div>
				</div>
				<div class="nash__column">
					<div class="nash__item">
						<div class="nash__logo"><img src="img/nv-4.png" alt=""></div>
						<h3 class="nash__title">Ближайшие уровни</h3>
						<div class="nash__text">Робот-помощник анализирует актив и показывает два ближайших ценовых уровня
							в рамках 500 свечей</div>
						<h3 class="nash__title">Как использовать</h3>
						<div class="nash__text">Необходимо нанести на график уровни показанные ботом. На этих ценовых
							уровнях скапливается большая ликвидность. От этих ценовых уровнях будут сильные движения.</div>
					</div>
				</div>
				<div class="nash__column">
					<div class="nash__item">
						<div class="nash__logo"><img src="img/nv-1.png" alt=""></div>
						<h3 class="nash__title">Актуальная информация</h3>
						<div class="nash__text">Отображает цену актива в долларах и биткойнах.</div>
						<h3 class="nash__title">Как использовать</h3>
						<div class="nash__text">Помогает следить за ценой выбранного актива. если вы не за компьютером.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	`)
	}
});

chto.addEventListener('click', function (e) {
	e.preventDefault();
	let mypartner = document.querySelector('.partner');
	let mychto = document.querySelector('.chto');
	let mynash = document.querySelector('.nash');
	let myhome = document.querySelector('.home');
	let myproton = document.querySelector('.proton');
	if (mypartner) { mypartner.classList.add('zet') };
	if (mynash) { mynash.classList.add('zet') };
	if (mychto) { mychto.classList.remove('zet') };
	myproton.classList.add('zet');
	if (!myhome) {
		mylist.insertAdjacentHTML('afterbegin', `
			<li class="menu__item home">
				<a href="#" class="menu__link home">Главная</a>
			</li>
		`)
	};
	if (!mychto) {
		wrapper.insertAdjacentHTML('afterbegin', `
		<section class="chto">
				<div class="chto__container container">
					<div class="chto__wrap">
						<div class="chto__column">
							<div class="chto__item">
								<div class="chto__content">
									<h2 class="chto__title">Что вы получаете</h2>
									<div class="chto__subtitle">Увеличится % положительных сделок</div>
									<div class="chto__text">При следовании рекомендациям робота-помощника все ваши сделки будут по
										тренду, что увеличит % положительных сделок.</div>
								</div>
							</div>
						</div>
						<div class="chto__column">
							<div class="chto__item">
								<div class="chto__img"><img src="img/vipo1.png" alt=""></div>
							</div>
						</div>
					</div>
					<div class="chto__wrap wrap2">
						<div class="chto__column">
							<div class="chto__item">
								<div class="chto__img"><img src="img/vipo2.png" alt=""></div>
							</div>
						</div>
						<div class="chto__column">
							<div class="chto__item">
								<div class="chto__content">
									<div class="chto__subtitle">Понятный риск-менеджмент</div>
									<div class="chto__text">Всегда правильные стоп-лос и тейк-профит, расчитаный на основании
										волатильности инструмента, а не мифические и не понятные 5%, 20%, 30% неизвестно от чего.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="chto__wrap">
						<div class="chto__column">
							<div class="chto__item">
								<div class="chto__content">
									<div class="chto__subtitle">Уменьшение количества убыточных сделок</div>
									<div class="chto__text">За счет автоматического поиска уровней, вы сможете сократить число не
										системных сделок совершая сделки от ценовых уровней.</div>
								</div>
							</div>
						</div>
						<div class="chto__column">
							<div class="chto__item">
								<div class="chto__img"><img src="img/vipo3.png" alt=""></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			`)
	}
});

partner.addEventListener('click', function (e) {
	e.preventDefault();
	let mypartner = document.querySelector('.partner');
	let mychto = document.querySelector('.chto');
	let mynash = document.querySelector('.nash');
	let myhome = document.querySelector('.home');
	let myproton = document.querySelector('.proton');
	if (mypartner) { mypartner.classList.remove('zet') };
	if (mynash) { mynash.classList.add('zet') };
	if (mychto) { mychto.classList.add('zet') };
	myproton.classList.add('zet');
	if (!myhome) {
		mylist.insertAdjacentHTML('afterbegin', `
			<li class="menu__item home">
				<a href="#" class="menu__link nashi">Главная</a>
			</li>
		`)
	};
	if (!mypartner) {
		wrapper.insertAdjacentHTML('afterbegin', `
		<div class="partner">
				<div class="container">
					<div class="partner__wrap">
						<div class="partner__content">
							<div class="partner__title">Партнеры</div>
							<div class="partner__text">Биржи с которыми мы сотрудничаем</div>
						</div>
						<div class="partner__partner">
							<div class="partner__img"><img src="img/partn1.png" alt=""></div>
							<div class="partner__img"><img src="img/partn2.png" alt=""></div>
							<div class="partner__img"><img src="img/partn3.png" alt=""></div>
							<div class="partner__img"><img src="img/partn4.png" alt=""></div>
							<div class="partner__img img__5"><img src="img/partn5.png" alt=""></div>
							<div class="partner__img"><img src="img/partn6.png" alt=""></div>
						</div>
					</div>
				</div>
				<div class="svyaz">
				<div class="container">
					<div class="svyaz__wrap">
						<div class="svyaz__content">
							<div class="svyaz__title">Для связи с нами</div>
							<div class="svyaz__text">Можете задать нам любой вопрос про бота</div>
						</div>
						<div class="svyaz__form">
							<form action="#" class="forma">
								<input type="text" class="imya" placeholder="Имя">
								<input type="email" class="email" placeholder="Email">
								<textarea placeholder="Сообшение" class="massaga"></textarea>
							</form>
							<p>Нажимая на кнопку «Отправить вопрос», вы даете согласие на обработку персональных данных.</p>
							<div class="svyaz__link proton__link">
								<a class="svyaz__btn proton__btn" href="">Отправить вопрос</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
	`)
	}
});

mylist.addEventListener('click', function (event) {
	let mytarget = event.target;
	let myproton = document.querySelector('.proton');
	let mypartner = document.querySelector('.partner');
	let mychto = document.querySelector('.chto');
	let mynash = document.querySelector('.nash');
	if (mytarget.closest('.home')) {
		myproton.classList.remove('zet');
		if (mypartner) { mypartner.classList.add('zet') };
		if (mynash) { mynash.classList.add('zet') };
		if (mychto) { mychto.classList.add('zet') };
	}
});

mylist.addEventListener('click', function (e) {
	let linktarget = e.target;
	if (linktarget.closest('.menu__link')) {
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
		document.body.classList.remove('_lock');
	}
})