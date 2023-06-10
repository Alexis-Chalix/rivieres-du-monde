import styles from './styles.module.css';
import NotreCauseSection from "@/app/(website)/accueil/components/NotreCauseSection";
import ArticleHeader from "@/app/(website)/accueil/components/ArticleHeader";

export default function NotreCause () {
	return (
		<article className={styles.notreCauseArticle}>
			<ArticleHeader
				title={"Notre cause"}
				subtitle={"Ce que nous faisons"}
			/>
			<div className={styles.notreCauseArticle__sectionsContainer}>
				<NotreCauseSection
					image_src={'panneaux_solaires.webp'}
					title={'Sensibilisation'}
					description={'Tout le monde est important'}
				/>
				<NotreCauseSection
					image_src={'requins.webp'}
					title={'Partenariat'}
					description={'Tout le monde doit être entendu'}
				/>
				<NotreCauseSection
					image_src={'papillon.webp'}
					title={'Plaidoyer'}
					description={'Tout le monde a voix au chapitre'}
				/>
			</div>
		</article>
	)
}