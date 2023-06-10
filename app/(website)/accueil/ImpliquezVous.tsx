import ArticleHeader from "@/app/(website)/accueil/components/ArticleHeader";
import styles from "@/app/(website)/accueil/styles.module.css";
import ImpliquezVousRow from "@/app/(website)/accueil/components/ImpliquezVousRow";

export default function ImpliquezVous () {
	return (
		<article className={styles.impliquezVousArticle}>
			<ArticleHeader title={"Impliquez-vous"} subtitle={"Passez à l'action"} />
			<div className={styles.impliquezVousArticle__rowsContainer}>
				<ImpliquezVousRow
					image_src={"benevoles.webp"}
					title={"Bénévolat"}
					text={
						"La participation active est un élément essentiel de notre mouvement. " +
						"Bénévolat est un excellent moyen de communiquer avec votre communauté locale, " +
						"et de faire connaitre notre existence et nos objectifs. Avec plusieurs campagnes " +
						"différentes, il vous sera facile de trouver ce qui vous touche profondément."
					}
					inverted={false}
				/>
				<ImpliquezVousRow
					image_src={"donations.webp"}
					title={"Organiser une collecte de fond"}
					text={
						"Chacun a les ressources pour motiver les autres et inspirer un véritable changement. " +
						"Par le biais de Organiser une collecte de fond, vous devenez un élément crucial de " +
						"notre mouvement en veillant à ce que notre mission soit entendue et ait un impact " +
						"puissant et à long terme."
					}
					inverted={true}
				/>
			</div>
		</article>
	)
}