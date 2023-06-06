import Link from "next/link";

export default function NavBar() {
	return(
		<nav>
			<Link href="/accueil">Accueil</Link>
			<Link href="/journal">Le journal</Link>
			<Link href="/actualites">Actualités</Link>
			<Link href="/soutenir">Nous soutenir</Link>
			<Link href="/contacter">Nous contacter</Link>
		</nav>
	)
}