import defaultLayout from '../../components/defaultLayout'
import Menu from '../../components/menu'
import CreateUsers from '../../components/Main/CreateUsers'
import PageHeader from '../../components/PageHeader'

export default function Create() {
	return (
		<>
			<Menu />
			<PageHeader title="Create Users" />
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					<CreateUsers />
				</div>
			</main>
		</>
	)
}

Create.getLayout = function getLayout(page) {
	return <defaultLayout>{page}</defaultLayout>
}
