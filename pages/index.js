import Login from '../components/Main/login/index'
import LoginLayout from '../components/Layout/LoginLayout'
export default function Index() {
	return (
		<>
			<Login />
		</>
	)
}
Index.getLayout = function (page) {
	return <LoginLayout>{page}</LoginLayout>
}
