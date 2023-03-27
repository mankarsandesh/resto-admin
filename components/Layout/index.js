import MenuBar from '../MenuBar'

export default function Index({ children }) {
	return (
		<>
			<div className="min-h-full">
				<MenuBar />
				{children}
			</div>
		</>
	)
}
