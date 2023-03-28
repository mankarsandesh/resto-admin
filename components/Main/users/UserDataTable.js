import Link from 'next/link'
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	CheckCircleIcon,
} from '@heroicons/react/20/solid'
function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function UserDataTable(props) {
	// Status add string
	const renderStatusLabel = (status) => {
		if (status === 0) {
			return <button className="font-medium text-yellow-700">Inactive</button>
		} else if (status === 1) {
			return <button className="font-medium text-green-700">Active</button>
		} else {
			return <button className="font-medium text-red-700">Deleted</button>
		}
	}

	return (
		<div className="mt-4 flex flex-col">
			<div className=" sm:-mx-6 px-4 py-5 sm:p-6">
				<div className="inline-block min-w-full py-2 align-middle">
					<div className="shadow-sm ring-1 ring-black ring-opacity-5">
						<table
							className="min-w-full border-separate"
							style={{ borderSpacing: 0 }}
						>
							<thead className="bg-gray-50">
								<tr>
									{props.rows.map((data, id) => (
										<th
											key={id}
											scope="col"
											className="capitalize sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5   text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
										>
											{data}
										</th>
									))}
								</tr>
							</thead>
							<tbody className="bg-white">
								{props.data.map((person, personIdx) => (
									<tr key={personIdx}>
										<td
											className={classNames(
												personIdx !== props.data.length - 1
													? 'border-b border-gray-200'
													: '',
												'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
											)}
										>
											{person.userName}
										</td>
										<td
											className={classNames(
												personIdx !== props.data.length - 1
													? 'border-b border-gray-200'
													: '',
												'whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6 lg:pl-8 flex'
											)}
										>
											{person.userEmail}
											{person.emailActive === 1 ? (
												<CheckCircleIcon
													className="h-5 w-5 text-green-600 ml-2"
													aria-hidden="true"
												/>
											) : (
												<CheckCircleIcon
													className="h-5 w-5 text-red-600 ml-2"
													aria-hidden="true"
												/>
											)}
										</td>
										<td
											className={classNames(
												personIdx !== props.data.length - 1
													? 'border-b border-gray-200'
													: '',
												'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell  sm:pl-6 lg:pl-8 capitalize'
											)}
										>
											{person.userType}
										</td>
										<td
											className={classNames(
												personIdx !== props.data.length - 1
													? 'border-b border-gray-200'
													: '',
												'whitespace-nowrap px-3 py-4 text-sm text-gray-500  sm:pl-6 lg:pl-8 '
											)}
										>
											{renderStatusLabel(person.status)}
										</td>
										<td
											className={classNames(
												personIdx !== props.data.length - 1
													? 'border-b border-gray-200'
													: '',
												'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8'
											)}
										>
											<a
												href="#"
												className="text-indigo-600 hover:text-indigo-900"
											>
												Edit
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className=" mt-5 hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
						<div>
							<p className="text-sm text-gray-700">
								Showing <span className="font-medium">1</span> to{' '}
								<span className="font-medium">10</span> of{' '}
								<span className="font-medium">{props.data.length}</span> results
							</p>
						</div>
						<div>
							<nav
								className="isolate inline-flex -space-x-px rounded-md shadow-sm"
								aria-label="Pagination"
							>
								<a
									href="#"
									className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								>
									<span className="sr-only">Previous</span>
									<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
								</a>
								{/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
								<a
									href="#"
									aria-current="page"
									className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									1
								</a>
								<a
									href="#"
									className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								>
									2
								</a>
								<a
									href="#"
									className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
								>
									3
								</a>
								<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
									...
								</span>
								<a
									href="#"
									className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
								>
									8
								</a>
								<a
									href="#"
									className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								>
									9
								</a>
								<a
									href="#"
									className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								>
									10
								</a>
								<a
									href="#"
									className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								>
									<span className="sr-only">Next</span>
									<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
