import defaultLayout from '../../components/defaultLayout'
import Menu from '../../components/menu'
import DashboardHeader from '../../components/dashboardHeader'
import DataTable from '../../components/Main/DataTable'

import Link from 'next/link'
// Button

export default function Home() {
	const data = [
		{
			name: 'Lindsay Walton',
			title: 'Front-end Developer',
			email: 'lindsay.walton@example.com',
			role: 'Member',
		},
		{
			name: 'Lindsay Walton',
			title: 'Front-end Developer',
			email: 'lindsay.walton@example.com',
			role: 'Member',
		},
		{
			name: 'Lindsay Walton',
			title: 'Front-end Developer',
			email: 'lindsay.walton@example.com',
			role: 'Member',
		},
		{
			name: 'Lindsay Walton',
			title: 'Front-end Developer',
			email: 'lindsay.walton@example.com',
			role: 'Member',
		},
		// More people...
	]
	const rows = ['name', 'title', 'email', 'role', '']
	return (
		<>
			<Menu />
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					<div className="px-4 sm:px-6 lg:px-2 ">
						<DashboardHeader />
						<div className="mt-4">
							<h3 className="text-base font-semibold leading-6 text-gray-900">
								Recent Activity
							</h3>
							<DataTable data={data} rows={rows} />
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

Home.getLayout = function getLayout(page) {
	return <defaultLayout>{page}</defaultLayout>
}
