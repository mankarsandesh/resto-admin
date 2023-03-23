import Link from 'next/link'
function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function DataTable(props) {
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
											className="capitalize sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
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
											{person.name}
										</td>
										<td
											className={classNames(
												personIdx !== props.data.length - 1
													? 'border-b border-gray-200'
													: '',
												'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'
											)}
										>
											{person.title}
										</td>
										<td
											className={classNames(
												personIdx !== props.data.length - 1
													? 'border-b border-gray-200'
													: '',
												'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'
											)}
										>
											{person.email}
										</td>
										<td
											className={classNames(
												personIdx !== props.data.length - 1
													? 'border-b border-gray-200'
													: '',
												'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
											)}
										>
											{person.role}
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
												Edit<span className="sr-only">, {person.name}</span>
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
