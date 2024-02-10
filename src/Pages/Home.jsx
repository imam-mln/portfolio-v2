// THIRD-PARTY MODULE
import {useEffect} from "react"
import {useNavigate, Link} from "react-router-dom"
import {Helmet, HelmetProvider} from "react-helmet-async"
import {Typewriter} from "react-simple-typewriter"

// ICONS & SVG
import gradShape2 from "../assets/grad-shape.svg"
import {MdOutlineWeb} from "react-icons/md"
import {FaCode} from "react-icons/fa6"
import {RiRobot2Fill, RiShape2Fill} from "react-icons/ri"

// DATAS
import Projects from "../Components/Projects"

// IMAGES
import ImgImam from "../assets/imam.png"

// CUSTOM COMPONENTS
import ServiceCard from "../Components/ServiceCard"

export default function Home() {
	const navigate = useNavigate()
	useEffect(() => {
		// window.scrollTo(0, 0)
		window.addEventListener("scroll", () => {
			if (window.scrollY > 0) {
				let navbar = document.getElementById("navbar")
				navbar.classList.add("md:border-b-2", "md:border-b-gray-300")
			} else {
				let navbar = document.getElementById("navbar")
				navbar.classList.remove("md:border-b-2", "md:border-b-gray-300")
			}
		})
	}, [])
	return (
		<>
			{/* HEADER */}
			<HelmetProvider>
				<Helmet>
					<title>IMM-MLN - Home</title>
				</Helmet>
			</HelmetProvider>
			{/* HERO IMAGE */}
			<section id='hero'>
				<div className='relative overflow-hidden'>
					{/* SHAPES */}
					<svg className='absolute -scale-x-200 md:-scale-x-100 fill-indigo-600 bottom-0 z-10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
						<path d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' className='shape-fill'></path>
					</svg>

					{/* ELEMENTS */}
					<div className='hero w-full text-black md:max-w-6xl m-auto'>
						<div className='flex hero-content md:max-w-6xl lg:flex-row-reverse'>
							<div className='relative'>
								<img src={ImgImam} className='w-[200px] md:w-[1000px] md:max-w-sm select-none' />
								<img src={gradShape2} className='hidden md:block absolute -right-16 bottom-20 max-w-lg select-none -z-10' />
							</div>
							<div className='text-xs md:text-lg'>
								<span className='text-[8px] md:text-lg font-semibold'>Hello There! 👋 I am</span>
								<h1 className='text-2xl md:text-6xl font-bold tracking-wide'>Imam Maulana</h1>
								<h1 className='text-[10px] md:text-2xl md:my-2'>
									<span className='text-gray-400 '>Freelancer {` `}</span>
									<span className='font-semibold'>
										<Typewriter words={["Web Developer", "Graphic Designer"]} loop={false} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
									</span>
								</h1>
								<p className='leading-normal text-[7px] max-w-[200px] md:text-lg md:max-w-lg my-2 md:my-7 text-gray-400'>
									<span>Always enthusiastic and challenged to learn new things.</span>
									<span className='md:hidden'>{` `}</span>
									<br className='hidden md:block' />
									<span>Let's find your problem solution with me!</span>
								</p>
								<button className='btn btn-xs md:btn-md bg-indigo-700 border-none text-white font-normal text-[7px] md:text-lg'>Contact Me</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section id='services' className='bg-indigo-600 text-white'>
				<div className='max-w-6xl m-auto py-20'>
					{/* HEADER MY SERVICES */}
					<div className='flex flex-col m-auto pt-10 pb-16'>
						<h1 className='text-3xl m-auto md:text-5xl font-extrabold pb-5'>My Services</h1>
						<h1 className='m-auto text-xs md:text-xl text-white text-center'>
							<span>These are some of the services I provide for clients,</span>
							<br />
							<span>and surely I'm always open to other projects.</span>
						</h1>
					</div>

					{/* BODY SERVICES */}
					<div className='grid grid-cols-2 md:grid-cols-4 gap-10 pb-20 px-10'>
						<div>
							{/* WEB DEV SERVICE */}
							<ServiceCard title='Web Dev' desc='Frontend Web Developer with ReactJS, tailwind and other UI library' icon={<MdOutlineWeb className='w-8 md:w-14 h-auto fill-white' />} />
						</div>
						<div>
							{/* WEB SCRAPER SERVICE */}
							<ServiceCard title='Web Scraper' desc='Lorem ipsum bunhankam eaa ea buka sitik joss anjay mabar' icon={<FaCode className='w-8 md:w-14 h-auto fill-white' />} />
						</div>
						<div>
							{/* CHAT BOT SERVICE */}
							<ServiceCard title='Chat Bot' desc='Lorem ipsum bunhankam eaa ea buka sitik joss anjay mabar' icon={<RiRobot2Fill className='w-8 md:w-14 h-auto fill-white' />} />
						</div>
						<div>
							{/* GRAPHIC DESIGN SERVICE */}
							<ServiceCard title='Graphic Design' desc='Lorem ipsum bunhankam eaa ea buka sitik joss anjay mabar' icon={<RiShape2Fill className='w-8 md:w-14 h-auto fill-white' />} />
						</div>
					</div>
				</div>
			</section>

			{/* SECTION RECENT PROJECTS */}
			<section id='recent-projects'>
				<div className='pb-16'>
					{/* WAVE DIVIDER */}
					<div className=''>
						<svg className='fill-indigo-600' viewBox='0 0 1200 120' preserveAspectRatio='none'>
							<path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'></path>
						</svg>
					</div>
					{/* RECENT PROJECT */}
					<div className='max-w-6xl m-auto'>
						{/* HEADER RECENT PROJECTS */}
						<div className='flex flex-col m-auto py-10 md:pb-16 text-black'>
							<h1 className='text-3xl m-auto md:text-5xl font-extrabold pb-2 md:pb-5'>Recent Projects</h1>
							<h1 className='m-auto text-xs md:text-xl text-gray-400 text-center'>
								<span>These are my recent projects and</span>
								<br />
								<span> several of them are publicly accessible.</span>
							</h1>
						</div>
						<Projects itr={3} />

						{/* FOOTER RECENT PROJECTS */}
						<div className='flex justify-end'>
							<div className='pt-5 pr-10'>
								<Link to='/portfolio' className='hidden md:block hover:underline text-sky-600 cursor-pointer font-semibold'>
									Show all projects ➜
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
