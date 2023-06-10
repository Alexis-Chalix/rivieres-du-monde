import styles from "@/app/(website)/accueil/styles.module.css";
import Image from "next/image";

export default function ImpliquezVousRow(
	{
		image_src,
		title,
		text,
		inverted
	} :
	{
        image_src : string,
        title : string,
        text : string,
		inverted : boolean
    }
) {
	return (
		<section className={styles.impliquezVousRow} style={{ flexDirection: inverted ? 'row-reverse' : 'row' }}>
			<div className={styles.impliquezVousRow__left}>
				<Image
					src={`/${image_src}`}
					alt="Photographie d'une rivière"
					fill={true}
					className={styles.bannerSection__image}
				/>
			</div>
			<div className={styles.impliquezVousRow__right}>
				<h4>{title}</h4>
				<p>{text}</p>
			</div>
		</section>
	)
}