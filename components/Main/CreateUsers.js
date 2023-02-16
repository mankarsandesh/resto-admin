import axios from 'axios'
export default function CreateUsers() {
	return (
		<div className="px-4 sm:px-6 lg:px-8">
			<form action="#" method="POST">
				<div className="overflow-hidden shadow sm:rounded-md">
					<div className="bg-white px-4 py-5 sm:p-6">
						<div className="grid grid-cols-3 gap-6">
							<div className="col-span-6 sm:col-span-3 lg:col-span-2">
								<label
									htmlFor="last-name"
									className="block text-sm font-medium text-gray-700"
								>
									User name
								</label>
								<input
									type="text"
									name="last-name"
									id="last-name"
									autoComplete="family-name"
									className="border py-2 px-2  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>

							<div className="col-span-6 sm:col-span-3 lg:col-span-2">
								<label
									htmlFor="email-address"
									className="block text-sm font-medium text-gray-700"
								>
									Email address
								</label>
								<input
									type="text"
									name="email-address"
									id="email-address"
									autoComplete="email"
									className=" border py-2 px-2  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>

							<div className="col-span-6 sm:col-span-2 lg:col-span-2">
								<label
									htmlFor="region"
									className="block text-sm font-medium text-gray-700"
								>
									Password
								</label>
								<input
									type="text"
									name="region"
									id="region"
									autoComplete="address-level1"
									className=" border py-2 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>

							<div className="col-span-6 sm:col-span-3 lg:col-span-2">
								<label
									htmlFor="postal-code"
									className="block text-sm font-medium text-gray-700"
								>
									Conform Password
								</label>
								<input
									type="text"
									name="postal-code"
									id="postal-code"
									autoComplete="postal-code"
									className=" border py-2 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>
					</div>
					<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
						<button
							type="submit"
							className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Create Users
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}
