import Link from "next/link";
import styles from './styles.module.css';

export default function NavBar() {
	return(
		<nav className={styles.navbar}>
			<h1>Logo</h1>

			<div className={styles.linksContainer}>
				<Link href="/accueil" className={styles.link}>Accueil</Link>
				<Link href="/journal" className={styles.link}>Le journal</Link>
				<Link href="/actualites" className={styles.link}>Actualités</Link>
				<Link href="/soutenir" className={styles.link}>Nous soutenir</Link>
				<Link href="/contacter" className={styles.link}>Nous contacter</Link>
			</div>
		</nav>
	)
}