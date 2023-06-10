import { Metadata } from 'next';
import Banniere from "@/app/(website)/accueil/Banniere";
import NotreCause from "@/app/(website)/accueil/NotreCause";
import ImpliquezVous from "@/app/(website)/accueil/ImpliquezVous";
import QuiSommesNous from "@/app/(website)/accueil/QuiSommesNous";

export const metadata: Metadata = {
	title: 'Accueil | Rivières du monde',
	description: '...',
};

export default function Page() {
	return (
		<main>
			<Banniere />
			<QuiSommesNous />
			<NotreCause />
			<ImpliquezVous />
		</main>
	)
};