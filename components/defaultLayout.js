import Menu from '../components/menu'

export default function defaultLayout({ children }) {
	return (
		<>
			<div className="min-h-full">{children}</div>
		</>
	)
}
