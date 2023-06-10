import styles from '../styles.module.css';

export default function ArticleHeader(
	{
		title,
		subtitle
	} :
	{
        title : string,
        subtitle : string
    }
) {
	return (
		<header className={styles.articleHeader}>
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</header>
	)
}