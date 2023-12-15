import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './footer.module.scss'
import one from '../img/imgfooter/1.png'
import twoo from '../img/imgfooter/2.png'
import three from '../img/imgfooter/3.png'
import fout from '../img/imgfooter/4.png'
import five from '../img/imgfooter/5.png'
import six from '../img/imgfooter/6.png'

//ICONS 

import icon1 from '../img/imgfooter/imgIcon/1.png'
import icon2 from '../img/imgfooter/imgIcon/2.png'
import icon3 from '../img/imgfooter/imgIcon/3.png'
import icon4 from '../img/imgfooter/imgIcon/4.png'
import icon5 from '../img/imgfooter/imgIcon/5.png'
import icon6 from '../img/imgfooter/imgIcon/6.png'
import icon7 from '../img/imgfooter/imgIcon/7.png'
import icon8 from '../img/imgfooter/imgIcon/8.png'




export const Footer = () => {

    const [open,setOpen] = useState(false)

    const bussines = [
			{ key: 1, img: one, text: 'Решения Softline', title_hidden: 'ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.',},
			{ key: 2, img: twoo, text: 'Кибербезопасность', title_hidden: 'Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации. ',},
			{ key: 3, img: three, text: 'Импортозамещение' , title_hidden: 'ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.',},
			{ key: 4, img: fout, text: 'Облачные решения', title_hidden: 'Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.', },
			{ key: 5, img: five, text: 'Цифровая трансформация и разработка ПО', title_hidden: 'Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.',  },
			{ key: 6, img: six, text: 'Техническая поддержка Softline', title_hidden: '200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.',  },
		]

       const icons = [
					{ key: 1, img: icon1, text: 'Дмс' },
					{ key: 2, img: icon2, text: 'Выходной в день рождения' },
					{ key: 3, img: icon3, text: 'Корпоративная мобильная связь' },
					{ key: 4, img: icon4, text: 'Корпоративные скидки на спорт' },
					{ key: 5, img: icon5, text: 'LTI' },
				]
        const icons2 = [ 
            	    { key: 6, img: icon6, text: 'Оргтехники' },
                    { key: 7, img: icon7, text: 'ДМС' },
					{ key: 8, img: icon8, text: 'Ипотеки' },
        ]

		    const cartAnimation = {
			hidden: {
				y: 100,
                opacity: 0,
			},
			visible: custom => ({
                y: 0,
				opacity: [0, 0, 1, 1, 1],
				transition: { delay: custom * 1 },
			}),}
  return (
		<div className={styles.wrapper_footer}>
			<h1 className={styles.h1}>Направление Бизнеса</h1>
			<div className={styles.footer}>
				{bussines.map(el => (
					<motion.div
						variants={cartAnimation}
						viewport={{ amount: 0.2, once: true }}
						initial='hidden'
						whileInView='visible'
						key={el.key}
						className={styles.wrapper}
						onClick={() => setOpen(!open)}
					>
						<p className={open === true ? styles.p_hover : ''}>
							{open === true ? el.title_hidden : el.text}
						</p>

						<img src={el.img} alt='logo' />
					</motion.div>
				))}
			</div>
			<motion.div
				variants={cartAnimation}
				viewport={{ amount: 0.2, once: true }}
				initial='hidden'
				whileInView='visible'
				className={styles.card_wrapper}
			>
				<h1>Компенсационный пакет</h1>
				<div className={styles.card}>
					<div className={styles.card_wrapper_only}>
						{icons.map(el => (
							<motion.div
								variants={cartAnimation}
								viewport={{ amount: 0.2, once: true }}
								initial='hidden'
								whileInView='visible'
								key={el.key}
								className={styles.card_wrapper}
							>
								<div className={styles.circle}>
									<img src={el.img} alt='icons' />
								</div>
								<p>{el.text}</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
			<motion.div
				variants={cartAnimation}
				viewport={{ amount: 0.2, once: true }}
				initial='hidden'
				whileInView='visible'
				className={styles.card_wrapper}
			>
				<h1>Программа дополнительной мотивации</h1>
				<h2>доплата 12% от суммы</h2>
				<div className={styles.card}>
					<div className={styles.card_wrapper_only}>
						{icons2.map(el => (
							<motion.div
								variants={cartAnimation}
								viewport={{ amount: 0.2, once: true }}
								initial='hidden'
								whileInView='visible'
								key={el.key}
								className={styles.card_wrapper}
							>
								<div className={styles.circle}>
									<img src={el.img} alt='icons' />
								</div>
								<p>{el.text}</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</div>
	)
}
