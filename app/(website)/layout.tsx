import '../globals.css'
import { Inter } from 'next/font/google'
import NavBar from "@/app/(website)/navbar/NavBar";
import Footer from "@/app/(website)/footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Rivières Du Monde',
	description: 'Rivières du monde',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="fr">
			<body className={inter.className}>
				<NavBar />
				{children}
			    <Footer />
			</body>
		</html>
	)
}
