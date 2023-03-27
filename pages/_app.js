import '../styles/globals.css'
import Layout from '../components/Layout/'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
	if (Component.getLayout) {
		return Component.getLayout(
			<>
				<Head>
					<title>Resto - Admin Panel</title>
				</Head>
				<Component {...pageProps} />
			</>
		)
	}
	return (
		<Layout>
			<Head>
				<title>Resto - Admin Panel</title>
			</Head>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
