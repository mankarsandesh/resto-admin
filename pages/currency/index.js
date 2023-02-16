import defaultLayout from '../../components/defaultLayout'
import Menu from '../../components/menu'
import PageHeader from '../../components/PageHeader'

export default function currency() {
	return (
		<>
			<Menu />
			<PageHeader title="Category" />
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-4 sm:px-0">Category</div>
				</div>
			</main>
		</>
	)
}

currency.getLayout = function getLayout(page) {
	return <defaultLayout>{page}</defaultLayout>
}
