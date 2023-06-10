import styles from './styles.module.css';
import Image from 'next/image';

export default function QuiSommesNous () {
	return (
		<article className={styles.quiSommesNousArticle}>
			<section className={styles.quiSommesNousArticle__left}>
				<h2>Qui sommes-nous ?</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				</p>
			</section>
			<section>

			</section>
		</article>
	)
}