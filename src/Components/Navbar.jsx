import {useNavigate} from "react-router-dom"

export default function Navbar() {
	const navigate = useNavigate()

	return (
		<div id='navbar' className='sticky top-0 z-50 bg-white bg-opacity-70 backdrop-blur-sm text-black font-bold'>
			<div id='nav-child' className='navbar max-w-6xl m-auto'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
							</svg>
						</div>
						<ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
							<li>
								<a onClick={() => navigate("/")}>Home</a>
							</li>
							<li>
								<a onClick={() => navigate("/about")}>About</a>
							</li>
							<li>
								<a onClick={() => navigate("/project")}>Project</a>
							</li>
							<li>
								<a onClick={() => navigate("/contact")}>Contact</a>
							</li>
						</ul>
					</div>
					<a className='cursor-pointer select-none hover:bg- text-2xl uppercase' onClick={() => navigate("/")}>
						@imm-mln
					</a>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='text-lg menu menu-horizontal px-1 font-normal gap-5'>
						<li>
							<a onClick={() => navigate("/")}>Home</a>
						</li>
						<li>
							<a onClick={() => navigate("/about")}>About</a>
						</li>
						<li>
							<a onClick={() => navigate("/project")}>Project</a>
						</li>
						<li>
							<a onClick={() => navigate("/contact")}>Contact</a>
						</li>
					</ul>
				</div>
				<div className='navbar-end invisible sm:visible'>
					<a className='btn bg-indigo-600 border-none text-white text-lg'>Download CV</a>
				</div>
			</div>
		</div>
	)
}
