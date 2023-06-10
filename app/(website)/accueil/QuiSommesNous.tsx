import styles from './styles.module.css';
import Image from 'next/image';

export default function QuiSommesNous () {
	return (
		<article className={styles.quiSommesNousArticle}>
			<section className={`${styles.quiSommesNousArticle__section} ${styles.quiSommesNousArticle__section__left}`}>
				<h2>Qui sommes-nous ?</h2>
				<p className={styles.quiSommesNousArticle__section__left__text}>
					Inspiré(e) par les mouvements sociaux du passé, Rivières du monde a vu le jour en 2000 lorsque
					certains membres de Paris ont décidé de s'organiser pour faire changer les choses. Très vite,
					ce groupe spontané s'est transformé en un mouvement à part entière. Notre Mouvement écologique
					questionne nos dirigeants en leur rappelant leur responsabilité, et lutte pour proposer des
					solutions qui transformeront la société.
				</p>
			</section>
			<section className={`${styles.quiSommesNousArticle__section} ${styles.quiSommesNousArticle__section__right}`}>
				<Image
					src={'/oiseaux.webp'}
					alt="Photographie d'oiseaux"
					fill={true}
					className={styles.quiSommesNousArticle__section__right__image}
				/>
			</section>
		</article>
	)
}