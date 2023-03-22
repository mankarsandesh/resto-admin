/* This example requires Tailwind CSS v2.0+ */

export default function PageHeader(props) {
	return (
		<>
			<div className="sm:flex sm:items-center ">
				<div className="sm:flex-auto -ml-6">
					<h1 className="text-xl font-semibold text-gray-900">{props.title}</h1>
					<p className="mt-2 text-sm text-gray-700">
						A list of all the users in your account including their name, title,
						email and role.
					</p>
				</div>
				<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">{props.button}</div>
			</div>
		</>
	)
}
