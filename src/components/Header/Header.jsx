import React from 'react'
import styles from './header.module.scss'
import imgLogo from '../img/logo (5) 1.png'

export const Header = () => {
  return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<img src={imgLogo} alt='logo' width={125} height={25} />
				<ul>
					<li>Облочное решение</li>
					<li>Кибербезопастность</li>
					<li>Импортозамешение</li>
					<li>Цифровая трансформация</li>
				</ul>
			</nav>
			<div className={styles.bg}>
				<div className={styles.bgwrapper}>
					<p>
						Поставщик услуг цифровой трансформации <br />и кибербезопасности
					</p>
					<button>
						<a href='https://softline.ru'>На Сайт</a>
					</button>
				</div>
			</div>
		</header>
	)
}
