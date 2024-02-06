export default function Footer() {
	return (
		<div className='bg-neutral'>
			<footer className='footer items-center p-4  text-neutral-content max-w-6xl m-auto justify-between'>
				<aside className='items-center grid-flow-col'>
					<img className='grayscale w-10' src='/logo-imm.png' alt='' />
					<p>
						<span>© 2024 Imam Maulana.</span>
						<br />
						<span>
							{`Built with `}
							<a className='text-sky-400 hover:underline' href='https://react.dev/' target='_blank'>
								ReactJS
							</a>
						</span>
					</p>
				</aside>

				<nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
					<div className='flex-row'>
						<h1 className='font-semibold text-white'>Get to know more about me :</h1>
						<div className='flex flex-col'>
							{/* PLATFORMS */}
							<div className='flex gap-3 justify-start pb-4 pt-1'>
								{/* INSTAGRAM */}
								<a href='https://www.instagram.com/imm.mln/' target='_blank'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='w-10 fill-gray-400 hover:fill-white' alt='Instagram Icon'>
										<path d='m349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1 -93.34 93.34h-186.66a93.62 93.62 0 0 1 -93.34-93.34v-186.66a93.62 93.62 0 0 1 93.34-93.34zm0-37.33h-186.66c-71.87 0-130.67 58.8-130.67 130.67v186.66c0 71.87 58.8 130.67 130.67 130.67h186.66c71.87 0 130.67-58.8 130.67-130.67v-186.66c0-71.87-58.8-130.67-130.67-130.67z' />
										<path d='m377.33 162.67a28 28 0 1 1 28-28 27.94 27.94 0 0 1 -28 28z' />
										<path d='m256 181.33a74.67 74.67 0 1 1 -74.67 74.67 74.75 74.75 0 0 1 74.67-74.67m0-37.33a112 112 0 1 0 112 112 112 112 0 0 0 -112-112z' />
									</svg>
								</a>
								{/* LINKEDIN */}
								<a href='https://www.linkedin.com/in/imammay24/' target='_blank' alt='Linkedin'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='w-10 fill-gray-400 hover:fill-white'>
										<path d='m444.17 32h-373.89c-20.43 0-38.28 14.7-38.28 34.89v374.72c0 20.3 17.85 38.39 38.28 38.39h373.78c20.54 0 35.94-18.21 35.94-38.39v-374.72c.12-20.19-15.4-34.89-35.83-34.89zm-273.3 373.43h-64.18v-199.55h64.18zm-29.87-229.89h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18v-109.11c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18v-199.55h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z' />
									</svg>
								</a>
								{/* FACEBOOK */}
								<a href='https://www.facebook.com/imm.mln' target='_blank'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='w-10 fill-gray-400 hover:fill-white'>
										<path d='m480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29v-156.52h-56.89v-64.77h56.89v-49.35c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13h-28.26c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77h-52.19v156.54c107.1-16.81 189-109.48 189-221.31z' fillRule='evenodd' />
									</svg>
								</a>
								{/* GITHUB */}
								<a href='https://github.com/imam-mln' target='_blank'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='w-10 fill-gray-400 hover:fill-white'>
										<path d='m256 32c-123.7 0-224 102.9-224 229.7 0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1 -22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4c89.1-30.4 153.2-116.5 153.2-217.9 0-126.8-100.3-229.7-224-229.7z' />
									</svg>
								</a>
							</div>
							{/* EMAIL */}
							<div>
								<h1>
									<span className='font-semibold text-white'>{`Email : `}</span>
									<span>
										<a target='_blank' className='hover:underline hover:text-white' href='mailto:imammaul2405@gmail.com'>
											imammaul2405@gmail.com
										</a>
									</span>
								</h1>
							</div>
						</div>
					</div>
				</nav>
			</footer>
		</div>
	)
}
