import styles from './styles.module.css';
import Image from 'next/image';

export default function Banniere() {
	return(
		<section className={styles.bannerSection}>
			<Image
				src={'/banniere.webp'}
				alt="Photographie d'une rivière"
				fill={true}
				className={styles.bannerSection__image}
				priority
			/>
			<h1 className={styles.bannerSection__text}>Rejoignez Rivières du monde</h1>
		</section>
	)
}