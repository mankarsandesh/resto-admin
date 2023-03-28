import DataTable from '../../components/Main/category/DataTable'
import PageHeader from '../../components/PageHeader'
import { BarsArrowUpIcon, UsersIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
// Button
const Button = () => {
	return (
		<>
			<div className="flex rounded-md shadow-sm mr-4 border h-12">
				<div className="relative flex flex-grow items-stretch focus-within:z-10">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
					</div>
					<input
						type="email"
						name="email"
						id="email"
						className="block w-full rounded-none rounded-l-md border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
						placeholder="Search Category "
					/>
				</div>
				<button
					type="button"
					className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
				>
					<BarsArrowUpIcon
						className="-ml-0.5 h-5 w-5 text-gray-400"
						aria-hidden="true"
					/>
					Search
				</button>
			</div>
			<div className=" h-12">
				<Link href="users/create">
					<button
						type="button"
						className="inline-flex items-center justify-center rounded-md border border-transparent h-12 bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
					>
						Add Category
					</button>
				</Link>
			</div>
		</>
	)
}
export default function Category() {
	const [categorylist, setCategorylist] = useState([])

	useEffect(() => {
		const url = process.env.BASE_URL + 'category'
		const fetchData = async () => {
			try {
				const headers = {
					'Content-Type': 'application/json',
					'x-access-token': localStorage.getItem('accessToken'),
				}
				fetch(url, { headers })
					.then((response) => response.json())
					.then((data) => {
						console.log(data, 'dadsd')
						setCategorylist(data.data)
					})
			} catch (error) {
				console.log('error', error)
			}
		}
		fetchData()
	}, [])
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
	const rows = ['name', 'description', 'created', '']
	return (
		<>
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-2 ">
					<div className="px-4 sm:px-6 lg:px-8 ">
						<PageHeader title="Category List" button={<Button />} />
						<DataTable data={categorylist} rows={rows} />
					</div>
				</div>
			</main>
		</>
	)
}

// Category.getLayout = function getLayout(page) {
// 	return <defaultLayout>{page}</defaultLayout>
// }
