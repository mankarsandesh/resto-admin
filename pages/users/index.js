import defaultLayout from '../../components/defaultLayout'
import Menu from '../../components/menu'
import UsersTable from '../../components/Main/UsersTable'
import PageHeader from '../../components/PageHeader'

export default function Users() {
	return (
		<>
			<Menu />
			<PageHeader title="Users List" />
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					<UsersTable />
				</div>
			</main>
		</>
	)
}

Users.getLayout = function getLayout(page) {
	return <defaultLayout>{page}</defaultLayout>
}
