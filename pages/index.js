import swal from 'sweetalert'
import React, { useState } from 'react'
// Login users Auth
async function loginUser(credentials) {
	return fetch(process.env.BASE_URL + 'auth/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json())
}

export default function Index() {
	const [loading, SetLoading] = useState(false)
	const [userEmail, setUserEmail] = useState()
	const [password, setPassword] = useState()
	const [error, setError] = useState('')

	// Login Admin Panel
	const handleSubmit = async (e) => {
		SetLoading(true)
		e.preventDefault()
		const response = await loginUser({
			userEmail,
			password,
		})
		console.log(response, 'response')
		if (response.code === 200) {
			// swal('Success', response.message, 'success', {
			// 	buttons: false,
			// 	timer: 2000,
			// }).then((value) => {})
			localStorage.setItem('accessToken', response.data.access_token)
			localStorage.setItem('user', JSON.stringify(response.data))
			// localStorage.setItem('user', JSON.stringify(response.data))
			setError('')
			window.location.href = '/home'
		} else {
			setError(response.error)
			// swal('Failed', response.error, 'error')
		}
		SetLoading(false)
	}

	return (
		<>
			<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<img
						className="mx-auto h-12 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
						Admin Panel
					</h2>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="text-center text-red-600">{error}</div>
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<form
							className="space-y-6"
							action="#"
							method="POST"
							onSubmit={handleSubmit}
						>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email address
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										onChange={(e) => setUserEmail(e.target.value)}
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700"
								>
									Password
								</label>
								<div className="mt-1">
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-sm text-gray-900"
									>
										Remember me
									</label>
								</div>

								<div className="text-sm">
									<a
										href="#"
										className="font-medium text-indigo-600 hover:text-indigo-500"
									>
										Forgot your password?
									</a>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									{loading ? 'Connecting...' : 'Sign in'}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
