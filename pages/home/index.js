import defaultLayout from '../../components/defaultLayout'
import Menu from '../../components/menu'
import PageHeader from '../../components/PageHeader'
import Link from 'next/link'
import { useReducer } from 'react'
// Button

const Button = () => {
	return (
		<Link href="users/create">
			<button
				type="button"
				className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
			>
				Add Users
			</button>
		</Link>
	)
}
function reduser(state, action) {
	switch (action.type) {
		case 'incre':
			return state + 1
		case 'decre':
			return state - 1
		default:
			throw new Error()
	}
}
export default function Home() {
	const [state, dispatch] = useReducer(reduser, 0)
	return (
		<>
			<Menu />
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					{/* Replace with your content */}
					<div className="px-4 sm:px-6 lg:px-8 ">
						<PageHeader title="Users List" button={<Button />} />
						<div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
					</div>
					Count {state}
					<button onClick={() => dispatch({ type: 'incre' })}>+</button>
					<button onClick={() => dispatch({ type: 'decre' })}>-</button>
					{/* /End replace */}
				</div>
			</main>
		</>
	)
}

Home.getLayout = function getLayout(page) {
	return <defaultLayout>{page}</defaultLayout>
}
