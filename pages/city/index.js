import defaultLayout from '../../components/defaultLayout'
import Menu from '../../components/menu'
import PageHeader from '../../components/PageHeader'

export default function City() {
	return (
		<>
			<Menu />
			<PageHeader title="City" />
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					{/* Replace with your content */}
					<div className="px-4 py-4 sm:px-0">
						<div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
					</div>
					{/* /End replace */}
				</div>
			</main>
		</>
	)
}

City.getLayout = function getLayout(page) {
	return <defaultLayout>{page}</defaultLayout>
}
