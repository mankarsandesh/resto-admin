import defaultLayout from '../../components/defaultLayout'
import Menu from '../../components/menu'
import UsersTable from '../../components/Main/UsersTable'
import PageHeader from '../../components/PageHeader'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
// Button
const Button = () => {
	return (
		<Link href="listing/create">
			<button
				type="button"
				className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
			>
				Add Listing
			</button>
		</Link>
	)
}
export default function Listing() {
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
					<div className="px-4 sm:px-6 lg:px-8 ">
						<PageHeader title="Listing List" button={<Button />} />
						<UsersTable data={data} rows={rows} />
					</div>
				</div>
			</main>
		</>
	)
}

Listing.getLayout = function getLayout(page) {
	return <defaultLayout>{page}</defaultLayout>
}
