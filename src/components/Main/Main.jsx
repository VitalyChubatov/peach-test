import React from 'react'
import styles from './main.module.scss'
import { FiChevronDown } from 'react-icons/fi'
import { motion } from 'framer-motion'
export const Main = () => {


	const [open,setOpen] = React.useState(false)


    const array = [
			{ text: '>30 лет', subtext: 'на IT-рынке' },
			{ text: '4600', subtext: 'сотрудников в России' },
			{ text: '25', subtext: 'городов России' },
			{ text: '2000+', subtext: 'разрабочиков' },
			{ text: '3000+', subtext: 'сотрудников ежегодно проходят оценку и обучение' },
		]

    const button = [
			{ title: 'Все' },
			{ title: 'Москва' },
			{ title: 'Центр' },
			{ title: 'Северо-Запад' },
			{ title: 'Юг' },
			{ title: 'Волга' },
			{ title: 'Урал' },
			{ title: 'Сибирь' },
			{ title: 'Дальний Восток' },
		]


	const handleClickGorod = (e) => {
		e.preventDefault()
		const btn = e.target
		let img = document.getElementById('1')
		let ul = document.createElement('ul')
		if (btn.innerHTML === button[0].title) {
			setTimeout(() => img.replaceChildren(ul), 1)
			let img = document.getElementById('1')
			let ul = document.createElement('ul')
			//MOSKOV
			let moskov = document.createElement('li')
			//ЦЕНТР
			let Belgorod = document.createElement('li')
			let Voronej = document.createElement('li')
			let Yaraslavl = document.createElement('li')
			//СЕВЕРО-ЗАПАД
			let Piter = document.createElement('li')
			let Kaliningrad = document.createElement('li')
			//ЮГ
			let RostovSurLeDon = document.createElement('li')
			let Krasnodar = document.createElement('li')
			let Volgograd = document.createElement('li')
			//ВОЛГА
			let NijniNovgorod = document.createElement('li')
			let Orenbourg = document.createElement('li')
			let Kazan = document.createElement('li')
			let Samara = document.createElement('li')
			let Oufa = document.createElement('li')
			//УРАЛ
			let Ekaterinbourg = document.createElement('li')
			let Tcheliabinsk = document.createElement('li')
			let permien = document.createElement('li')
			let Sourgout = document.createElement('li')
			let Tioumen = document.createElement('li')
			let Ijevsk = document.createElement('li')
			//СИБИРЬ
			let Novossibirsk = document.createElement('li')
			let Omsk = document.createElement('li')
			let Tomsk = document.createElement('li')
			let Krasnoïarsk = document.createElement('li')
			let Irkoutsk = document.createElement('li')
			//ДАЛЬНИЙ ВОСТОК
			let Khabarovsk = document.createElement('li')
			let Vladivostok = document.createElement('li')

			//ЦЕНТР
			Belgorod.innerHTML = 'Белгород'
			Belgorod.classList.add(styles.Belgorod) //
			//СЕВЕРО-ЗАПАД
			Piter.innerHTML = 'Санкт-Петербург'
			Piter.classList.add(styles.Piter) //

			Kaliningrad.innerHTML = 'Калининград'
			Kaliningrad.classList.add(styles.Kaliningrad) //
			//ЮГ
			RostovSurLeDon.innerHTML = 'Ростов-на-Дону'
			RostovSurLeDon.classList.add(styles.RostovSurLeDon) //

			Krasnodar.innerHTML = 'Краснодар'
			Krasnodar.classList.add(styles.Krasnodar) //

			Volgograd.innerHTML = 'Волгоград'
			Volgograd.classList.add(styles.Volgograd) //
			//ВОЛГА
			NijniNovgorod.innerHTML = 'Н.Новгород'
			NijniNovgorod.classList.add(styles.NijniNovgorod) //

			Orenbourg.innerHTML = 'Оренбург'
			Orenbourg.classList.add(styles.Orenbourg) //

			Kazan.innerHTML = 'Казань'
			Kazan.classList.add(styles.Kazan) //

			Samara.innerHTML = 'Самара'
			Samara.classList.add(styles.Samara) //

			Oufa.innerHTML = 'Уфа'
			Oufa.classList.add(styles.Oufa) //
			//УРАЛ
			Ekaterinbourg.innerHTML = 'Екатеринбург'
			Ekaterinbourg.classList.add(styles.Ekaterinbourg) //

			Tcheliabinsk.innerHTML = 'Челябинск'
			Tcheliabinsk.classList.add(styles.Tcheliabinsk) //

			permien.innerHTML = 'Пермь'
			permien.classList.add(styles.permien) //

			Sourgout.innerHTML = 'Сургут'
			Sourgout.classList.add(styles.Sourgout) //

			Tioumen.innerHTML = 'Тюмень'
			Tioumen.classList.add(styles.Tioumen)

			Ijevsk.innerHTML = 'Ижевск'
			Ijevsk.classList.add(styles.Ijevsk)
			//СИБИРЬ
			Novossibirsk.innerHTML = 'Новосибирск'
			Novossibirsk.classList.add(styles.Novossibirsk)

			Omsk.innerHTML = 'Омск'
			Omsk.classList.add(styles.Omsk)

			Tomsk.innerHTML = 'Томск'
			Tomsk.classList.add(styles.Tomsk)

			Krasnoïarsk.innerHTML = 'Красноярск'
			Krasnoïarsk.classList.add(styles.Krasnoïarsk)
			//ДАЛЬНИЙ ВОСТОК
			Irkoutsk.innerHTML = 'Иркутск'
			Irkoutsk.classList.add(styles.Irkoutsk)

			Khabarovsk.innerHTML = 'Хабаровск'
			Khabarovsk.classList.add(styles.Khabarovsk)

			Vladivostok.innerHTML = 'Владивосток'
			Vladivostok.classList.add(styles.Vladivostok)
			//ЦЕНТР
			Yaraslavl.innerHTML = 'Ярославль'
			Yaraslavl.classList.add(styles.Yaraslavl)
			Voronej.innerHTML = 'Воронеж'
			Voronej.classList.add(styles.Voronej)
			ul.appendChild(Belgorod)
			ul.appendChild(Voronej)
			ul.appendChild(Yaraslavl)

			ul.appendChild(Piter)
			ul.appendChild(Kaliningrad)
			//ЮГ
			ul.appendChild(RostovSurLeDon)
			ul.appendChild(Krasnodar)
			ul.appendChild(Volgograd)
			//VOLGA
			ul.appendChild(NijniNovgorod)
			ul.appendChild(Orenbourg)
			ul.appendChild(Kazan)
			ul.appendChild(Samara)
			ul.appendChild(Oufa)

			ul.appendChild(Ekaterinbourg)
			ul.appendChild(Tcheliabinsk)
			ul.appendChild(permien)
			ul.appendChild(Sourgout)
			ul.appendChild(Tioumen)
			ul.appendChild(Ijevsk)

			ul.appendChild(Novossibirsk)
			ul.appendChild(Omsk)
			ul.appendChild(Tomsk)
			ul.appendChild(Krasnoïarsk)
			ul.appendChild(Irkoutsk)

			ul.appendChild(Vladivostok)
			ul.appendChild(Khabarovsk)
			moskov.innerHTML = 'Москва'
			moskov.classList.add(styles.moskov)
			ul.appendChild(moskov)
			img.appendChild(ul)
			img.appendChild(ul)
			ul.classList.add(styles.all)
			if (img.childNodes.length > 1) {
				img.removeChild(ul)
			}
		}
		if (btn.innerHTML === button[1].title) {
			let moskov = document.createElement('li')
			setTimeout(() => img.replaceChildren(ul), 0.2)
			moskov.innerHTML = 'Москва'
			moskov.classList.add(styles.moskovs)
			ul.appendChild(moskov)
			img.appendChild(ul)
		}
		if (btn.innerHTML === button[2].title) {
			setTimeout(() => img.replaceChildren(ul), 1)
			let Belgorod = document.createElement('li')
			let Voronej = document.createElement('li')
			let Yaraslavl = document.createElement('li')
			Belgorod.innerHTML = 'Белгород'
			Belgorod.classList.add(styles.Belgorod)
			Yaraslavl.innerHTML = 'Ярославль'
			Yaraslavl.classList.add(styles.Yaraslavl)
			Voronej.innerHTML = 'Воронеж'
			Voronej.classList.add(styles.Voronej)
			ul.appendChild(Belgorod)
			ul.appendChild(Voronej)
			ul.appendChild(Yaraslavl)
			img.appendChild(ul)
		}
		// ПО ГОРОДАМ
		if (btn.innerHTML === 'Ярославль') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Yaraslavl = document.createElement('li')
			Yaraslavl.innerHTML = 'Ярославль'
			Yaraslavl.classList.add(styles.Yaraslavl)
			ul.appendChild(Yaraslavl)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Белгород') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let img = document.getElementById('1')
			let ul = document.createElement('ul')
			let Belgorod = document.createElement('li')
			Belgorod.innerHTML = 'Белгород'
			Belgorod.classList.add(styles.Belgorod)
			ul.appendChild(Belgorod)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Воронеж') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let img = document.getElementById('1')
			let ul = document.createElement('ul')
			let Voronej = document.createElement('li')
			Voronej.innerHTML = 'Воронеж'
			Voronej.classList.add(styles.Voronej)
			ul.appendChild(Voronej)
			img.appendChild(ul)
		}
		// СЕВЕРО_ЗАПАД
		if (btn.innerHTML === button[3].title) {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let img = document.getElementById('1')
			let ul = document.createElement('ul')
			let Piter = document.createElement('li')
			let Kaliningrad = document.createElement('li')
			Piter.innerHTML = 'Санкт-Петербург'
			Piter.classList.add(styles.Piters)
			Kaliningrad.innerHTML = 'Калининград'
			Kaliningrad.classList.add(styles.Kaliningrads)
			ul.appendChild(Piter)
			ul.appendChild(Kaliningrad)
			img.appendChild(ul)
		}
		// ПО ГОРОДАМ
		if (btn.innerHTML === 'Санкт-Петербург') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Piter = document.createElement('li')
			Piter.innerHTML = 'Санкт-Петербург'
			Piter.classList.add(styles.Piters)
			ul.appendChild(Piter)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Калининград') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Kaliningrad = document.createElement('li')
			Kaliningrad.innerHTML = 'Калининград'
			Kaliningrad.classList.add(styles.Kaliningrads)
			ul.appendChild(Kaliningrad)
			img.appendChild(ul)
		}
		// ЮГ
		if (btn.innerHTML === button[4].title) {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let RostovSurLeDon = document.createElement('li')
			let Krasnodar = document.createElement('li')
			let Volgograd = document.createElement('li')

			RostovSurLeDon.innerHTML = 'Ростов На Дону'
			RostovSurLeDon.classList.add(styles.RostovSurLeDon) //

			Krasnodar.innerHTML = 'Краснодар'
			Krasnodar.classList.add(styles.Krasnodar) //

			Volgograd.innerHTML = 'Волгоград'
			Volgograd.classList.add(styles.Volgograd) //

			ul.classList.add(styles.group_ug)
			ul.appendChild(RostovSurLeDon)
			ul.appendChild(Krasnodar)
			ul.appendChild(Volgograd)
			img.appendChild(ul)
		}
		// по-городам
		if (btn.innerHTML === 'Ростов-на-Дону') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let RostovSurLeDon = document.createElement('li')
			RostovSurLeDon.innerHTML = 'Ростов На Дону'
			RostovSurLeDon.classList.add(styles.RostovSurLeDon) //
			ul.appendChild(RostovSurLeDon)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Краснодар') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Krasnodar = document.createElement('li')
			Krasnodar.innerHTML = 'Краснодар'
			Krasnodar.classList.add(styles.Krasnodar) //
			ul.appendChild(Krasnodar)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Волгоград') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Volgograd = document.createElement('li')
			Volgograd.innerHTML = 'Волгоград'
			Volgograd.classList.add(styles.Volgograd) //
			ul.appendChild(Volgograd)
			img.appendChild(ul)
		}
		// ВОЛГА
		if (btn.innerHTML === button[5].title) {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let NijniNovgorod = document.createElement('li')
			let Orenbourg = document.createElement('li')
			let Kazan = document.createElement('li')
			let Samara = document.createElement('li')
			let Oufa = document.createElement('li')

			NijniNovgorod.innerHTML = 'Н.Новгород'
			NijniNovgorod.classList.add(styles.NijniNovgorod) //

			Orenbourg.innerHTML = 'Оренбург'
			Orenbourg.classList.add(styles.Orenbourg) //

			Kazan.innerHTML = 'Казань'
			Kazan.classList.add(styles.Kazan) //

			Samara.innerHTML = 'Самара'
			Samara.classList.add(styles.Samara) //

			Oufa.innerHTML = 'Уфа'
			Oufa.classList.add(styles.Oufa) //

			ul.classList.add(styles.group_volga)
			ul.appendChild(NijniNovgorod)
			ul.appendChild(Orenbourg)
			ul.appendChild(Kazan)
			ul.appendChild(Samara)
			ul.appendChild(Oufa)
			img.appendChild(ul)
		}
		// по-городам
		if (btn.innerHTML === 'Нижний Новгород') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let NijniNovgorod = document.createElement('li')
			NijniNovgorod.innerHTML = 'Н.Новгород'
			NijniNovgorod.classList.add(styles.NijniNovgorod) //
			ul.appendChild(NijniNovgorod)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Оренбург') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Orenbourg = document.createElement('li')
			Orenbourg.innerHTML = 'Оренбург'
			Orenbourg.classList.add(styles.Orenbourg) //
			ul.appendChild(Orenbourg)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Казань') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Kazan = document.createElement('li')
			Kazan.innerHTML = 'Казань'
			Kazan.classList.add(styles.Kazan) //
			ul.appendChild(Kazan)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Самара') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Samara = document.createElement('li')
			Samara.innerHTML = 'Самара'
			Samara.classList.add(styles.Samara) //
			ul.appendChild(Samara)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Уфа') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Oufa = document.createElement('li')
			Oufa.innerHTML = 'Уфа'
			Oufa.classList.add(styles.Oufa) //
			ul.appendChild(Oufa)
			img.appendChild(ul)
		}
		// УРАЛ
									if (btn.innerHTML === button[6].title) {
										setTimeout(() => img.replaceChildren(ul), 0.2)
										let Ekaterinbourg = document.createElement('li')
										let Tcheliabinsk = document.createElement('li')
										let permien = document.createElement('li')
										let Sourgout = document.createElement('li')
										let Tioumen = document.createElement('li')
										let Ijevsk = document.createElement('li')

										Ekaterinbourg.innerHTML = 'Екатеринбург'
										Ekaterinbourg.classList.add(styles.Ekaterinbourg) //

										Tcheliabinsk.innerHTML = 'Челябинск'
										Tcheliabinsk.classList.add(styles.Tcheliabinsk) //

										permien.innerHTML = 'Пермь'
										permien.classList.add(styles.permien) //

										Sourgout.innerHTML = 'Сургут'
										Sourgout.classList.add(styles.Sourgout) //

										Tioumen.innerHTML = 'Тюмень'
										Tioumen.classList.add(styles.Tioumen)

										Ijevsk.innerHTML = 'Ижевск'
										Ijevsk.classList.add(styles.Ijevsk)

										ul.classList.add(styles.group_ural)
										ul.appendChild(Ekaterinbourg)
										ul.appendChild(Tcheliabinsk)
										ul.appendChild(permien)
										ul.appendChild(Sourgout)
										ul.appendChild(Tioumen)
										ul.appendChild(Ijevsk)
										img.appendChild(ul)
									}
		// по-городам
		if (btn.innerHTML === 'Екатеринбург') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Ekaterinbourg = document.createElement('li')
			Ekaterinbourg.innerHTML = 'Екатеринбург'
			Ekaterinbourg.classList.add(styles.Ekaterinbourg) //
			ul.appendChild(Ekaterinbourg)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Челябинск') {
				setTimeout(() => img.replaceChildren(ul), 0.2)
				let Tcheliabinsk = document.createElement('li')
				Tcheliabinsk.innerHTML = 'Челябинск'
				Tcheliabinsk.classList.add(styles.Tcheliabinsk) //
				ul.appendChild(Tcheliabinsk)
				img.appendChild(ul)
			}
		if (btn.innerHTML === 'Пермь') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let permien = document.createElement('li')
			permien.innerHTML = 'Пермь'
			permien.classList.add(styles.permien) //
			ul.appendChild(permien)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Сургут') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Sourgout = document.createElement('li')
			Sourgout.innerHTML = 'Сургут'
			Sourgout.classList.add(styles.Sourgout) //
			ul.appendChild(Sourgout)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Тюмень') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Tioumen = document.createElement('li')
			Tioumen.innerHTML = 'Тюмень'
			Tioumen.classList.add(styles.Tioumen) //
			ul.appendChild(Tioumen)
			img.appendChild(ul)
		}
		if (btn.innerHTML === 'Ижевск') {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Ijevsk = document.createElement('li')
			Ijevsk.innerHTML = 'Ижевск'
			Ijevsk.classList.add(styles.Ijevsk) //
			ul.appendChild(Ijevsk)
			img.appendChild(ul)
		}

		// СИБИРЬ
		if (btn.innerHTML === button[7].title) {
			setTimeout(() => img.replaceChildren(ul), 0.2)
			let Novossibirsk = document.createElement('li')
			let Omsk = document.createElement('li')
			let Tomsk = document.createElement('li')
			let Krasnoïarsk = document.createElement('li')
			let Irkoutsk = document.createElement('li')

			Novossibirsk.innerHTML = 'Новосибирск'
			Novossibirsk.classList.add(styles.Novossibirsk)

			Omsk.innerHTML = 'Омск'
			Omsk.classList.add(styles.Omsk)

			Tomsk.innerHTML = 'Томск'
			Tomsk.classList.add(styles.Tomsk)

			Krasnoïarsk.innerHTML = 'Красноярск'
			Krasnoïarsk.classList.add(styles.Krasnoïarsk)

			Irkoutsk.innerHTML = 'Иркутск'
			Irkoutsk.classList.add(styles.Irkoutsk)

			ul.classList.add(styles.group_sibir)
			ul.appendChild(Novossibirsk)
			ul.appendChild(Omsk)
			ul.appendChild(Tomsk)
			ul.appendChild(Krasnoïarsk)
			ul.appendChild(Irkoutsk)
			img.appendChild(ul)
		}
// по-городам
if (btn.innerHTML === 'Новосибирск') {
	setTimeout(() => img.replaceChildren(ul), 0.2)
	let Novossibirsk = document.createElement('li')
	Novossibirsk.innerHTML = 'Новосибирск'
	Novossibirsk.classList.add(styles.Novossibirsk) //
	ul.appendChild(Novossibirsk)
	img.appendChild(ul)
}
if (btn.innerHTML === 'Омск') {
	setTimeout(() => img.replaceChildren(ul), 0.2)
	let Omsk = document.createElement('li')
	Omsk.innerHTML = 'Омск'
	Omsk.classList.add(styles.Omsk) //
	ul.appendChild(Omsk)
	img.appendChild(ul)
}
if (btn.innerHTML === 'Томск') {
	setTimeout(() => img.replaceChildren(ul), 0.2)
	let Tomsk = document.createElement('li')
	Tomsk.innerHTML = 'Томск'
	Tomsk.classList.add(styles.Tomsk) //
	ul.appendChild(Tomsk)
	img.appendChild(ul)
}
if (btn.innerHTML === 'Красноярск') {
	setTimeout(() => img.replaceChildren(ul), 0.2)
	let Krasnoïarsk = document.createElement('li')
	Krasnoïarsk.innerHTML = 'Красноярск'
	Krasnoïarsk.classList.add(styles.Krasnoïarsk) //
	ul.appendChild(Krasnoïarsk)
	img.appendChild(ul)
}
if (btn.innerHTML === 'Иркутск') {
	setTimeout(() => img.replaceChildren(ul), 0.2)
	let Irkoutsk = document.createElement('li')
	Irkoutsk.innerHTML = 'Иркутск'
	Irkoutsk.classList.add(styles.Irkoutsk) //
	ul.appendChild(Irkoutsk)
	img.appendChild(ul)
}
// дальний восток 
if (btn.innerHTML === button[8].title) {
	setTimeout(() => img.replaceChildren(ul), 1)
	let img = document.getElementById('1')
	let ul = document.createElement('ul')
	let Khabarovsk = document.createElement('li')
	let Vladivostok = document.createElement('li')
	Khabarovsk.innerHTML = 'Хабаровск'
	Khabarovsk.classList.add(styles.Khabarovsk)

	Vladivostok.innerHTML = 'Владивосток'
	Vladivostok.classList.add(styles.Vladivostok)
	ul.classList.add(styles.group_vostok)
	ul.appendChild(Vladivostok)
	ul.appendChild(Khabarovsk)
	img.appendChild(ul)
}
// по-городам
if (btn.innerHTML === 'Хабаровск') {
	setTimeout(() => img.replaceChildren(ul), 0.2)
	let Khabarovsk = document.createElement('li')
	Khabarovsk.innerHTML = 'Хабаровск'
	Khabarovsk.classList.add(styles.Khabarovsk) //
	ul.appendChild(Khabarovsk)
	img.appendChild(ul)
}
if (btn.innerHTML === 'Владивосток') {
	setTimeout(() => img.replaceChildren(ul), 0.2)
	let Vladivostok = document.createElement('li')
	Vladivostok.innerHTML = 'Владивосток'
	Vladivostok.classList.add(styles.Vladivostok) //
	ul.appendChild(Vladivostok)
	img.appendChild(ul)
}
	}
    

		    const cartAnimation = {
					hidden: {
						y: 100,
						opacity: 0,
					},
					visible: custom => ({
						y: 0,
						opacity: [0, 0, 1, 1, 1],
						transition: { delay: custom * 1 },
					}),
				}

  return (
		<main>
			<article className={styles.article}>
				<p className={styles.article_p}>
					<b>Softline</b> – ведущий поставщик IT-решений и сервисов.* <br />
					Мы предлагаем комплексные IT-решения, облака, программное <br />и
					аппаратное обеспечение, решения по цифровой трансформации <br />и
					кибербезопасности, а также широкий спектр IT-услуг.
				</p>
			</article>
			<div className={styles.group}>
				{array.map((el, index) => (
					<motion.div
						variants={cartAnimation}
						viewport={{ amount: 0.2, once: true }}
						initial='hidden'
						whileInView='visible'
						key={index}
						className={styles.titles}
					>
						<p className={styles.text}>{el.text}</p>
						<p className={styles.subtext}>{el.subtext}</p>
					</motion.div>
				))}
			</div>
			<aside>
				<form>
					<div>
						<p> Oфисы Softline </p>
						<FiChevronDown onClick={() => setOpen(!open)} />
					</div>
					<div className={styles.btn_group}>
						{button.map((el, index) => (
							<button
								key={index}
								className={styles.activated}
								onClick={handleClickGorod}
							>
								{el.title}
							</button>
						))}
					</div>
				</form>
				{open && (
					<div className={styles.menu}>
						{/* МОСКВА */}
						<b onClick={handleClickGorod}>Москва</b>
						{/* ЦЕНТР */}
						<div className={styles.menu_block}>
							<b onClick={handleClickGorod}>Центр</b>
							<p onClick={handleClickGorod}>Воронеж</p>
							<p onClick={handleClickGorod}>Ярославль</p>
							<p onClick={handleClickGorod}>Белгород</p>
						</div>
						{/* СЕВЕРО-ЗАПАД */}
						<div className={styles.menu_block}>
							<b onClick={handleClickGorod}>Северо-Запад</b>
							<p onClick={handleClickGorod}>Санкт-Петербург</p>
							<p onClick={handleClickGorod}>Калининград</p>
						</div>
						{/* ЮГ */}
						<div className={styles.menu_block}>
							<b onClick={handleClickGorod}>Юг</b>
							<p onClick={handleClickGorod}>Ростов-на-Дону</p>
							<p onClick={handleClickGorod}>Краснодар</p>
							<p onClick={handleClickGorod}>Волгоград</p>
						</div>
						{/* ВОЛГА */}
						<div className={styles.menu_block}>
							<b onClick={handleClickGorod}>Волга</b>
							<p onClick={handleClickGorod}>Казань</p>
							<p onClick={handleClickGorod}>Самара</p>
							<p onClick={handleClickGorod}>Уфа</p>
							<p onClick={handleClickGorod}>Оренбург</p>
							<p onClick={handleClickGorod}>Нижний Новгород</p>
						</div>
						{/* УРАЛ */}
						<div className={styles.menu_block}>
							<b onClick={handleClickGorod}>Урал</b>
							<p onClick={handleClickGorod}>Екатеринбург</p>
							<p onClick={handleClickGorod}>Челябинск</p>
							<p onClick={handleClickGorod}>Пермь</p>
							<p onClick={handleClickGorod}>Сургут</p>
							<p onClick={handleClickGorod}>Тюмень</p>
							<p onClick={handleClickGorod}>Ижевск</p>
						</div>
						{/* СИБИРЬ */}
						<div className={styles.menu_block}>
							<b onClick={handleClickGorod}>Сибирь</b>
							<p onClick={handleClickGorod}>Новосибирск </p>
							<p onClick={handleClickGorod}>Омск</p>
							<p onClick={handleClickGorod}>Томск</p>
							<p onClick={handleClickGorod}>Красноярск</p>
							<p onClick={handleClickGorod}> Иркутск</p>
						</div>
						{/* ДАЛЬНИЙ ВОСТОК */}
						<div className={styles.menu_block}>
							<b onClick={handleClickGorod}>Дальний Восток</b>
							<p onClick={handleClickGorod}>Хабаровск</p>
							<p onClick={handleClickGorod}>Владивосток</p>
						</div>
					</div>
				)}
				<div className={styles.img_scroll}>
					<div
						id='1'
						className={open === false ? styles.img : styles.img_hidden}
					></div>
				</div>
			</aside>
			<div className={styles.misson}>
				<div className={styles.misson_img}>
					<div className={styles.left_pattern}></div>
					<div className={styles.misson_title}>
						<h1>Миссия Softline</h1>
						<p>
							Мы помогаем организациям трансформироваться, работать эффективно и
							безопасно в условиях цифровой экономики.
						</p>
					</div>
					<div className={styles.right_pattern}></div>
				</div>
			</div>
		</main>
	)
}
