import CreateUsers from '../../components/Main/CreateUsers'
import PageHeader from '../../components/PageHeader'

export default function Create() {
	return (
		<>
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-2 ">
					<div className="px-4 sm:px-6 lg:px-8 ">
						<PageHeader title="Create Users" />
						<CreateUsers />
					</div>
				</div>
			</main>
		</>
	)
}
