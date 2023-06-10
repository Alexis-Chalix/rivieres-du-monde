import Image from "next/image";

export default function NotreCauseSection(
	{
		image_src,
		title,
		description
	} :
	{
        image_src : string,
        title : string,
        description : string
    }
) {
	return(
		<section>
			<Image
				src={`/${image_src}`}
				alt="Photographie nature"
				width={490}
				height={280}
			/>
			<div>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</section>
	)
}