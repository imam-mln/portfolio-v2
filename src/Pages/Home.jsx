// THIRD-PARTY MODULE
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {Helmet, HelmetProvider} from "react-helmet-async"
import {Typewriter} from "react-simple-typewriter"

// ICONS & SVG
import gradShape2 from "../assets/grad-shape-2.svg"
import webDevSVG from "../assets/web-dev.svg"
import chatBotSVG from "../assets/bot.svg"
import webScraperSVG from "../assets/web-scraper.svg"
import graphicDesignSVG from "../assets/graphic.svg"

// IMAGES
import ImgImam from "../assets/imam.png"
import oviderBot from "../assets/oviderbot.jpeg"
import imgTest from "../assets/image-test.jpg"

// CUSTOM COMPONENTS
import ServiceCard from "../Components/ServiceCard"
import ProjectCard from "../Components/ProjectCard"

export default function Home() {
	const navigate = useNavigate()
	useEffect(() => {
		window.addEventListener("scroll", () => {
			// console.log(window.scrollY)
			if (window.scrollY > 0) {
				let navbar = document.getElementById("navbar")
				navbar.classList.add("border-b-2", "border-b-gray-300")
			} else {
				let navbar = document.getElementById("navbar")
				navbar.classList.remove("border-b-2", "border-b-gray-300")
			}
		})
	}, [])
	return (
		<>
			{/* HEADER */}
			<HelmetProvider>
				<Helmet>
					<title>Portfolio - Home</title>
				</Helmet>
			</HelmetProvider>
			{/* HERO IMAGE */}
			<section id='hero'>
				<div className='relative overflow-hidden'>
					{/* SHAPES */}
					<svg className='absolute -scale-x-100 bg-gradient-to-tr  fill-indigo-600 bottom-0 z-10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
						<path d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' class='shape-fill'></path>
					</svg>
					<img src={gradShape2} className='max-w-lg absolute right-44 bottom-20 max-w-2xl select-none' />

					{/* ELEMENTS */}
					<div className='hero min-h-screen text-black max-w-6xl m-auto'>
						<div className='hero-content flex-col lg:flex-row-reverse gap-40'>
							<img src={ImgImam} className='max-h-full select-none' />
							<div className='text-lg'>
								<span className='font-semibold '>Hello There! 👋 I am</span>
								<h1 className='text-6xl font-bold tracking-wide'>Imam Maulana</h1>
								<h1 className='text-2xl my-2'>
									<span className='text-gray-400 '>Freelancer {` `}</span>
									<span className='font-semibold'>
										<Typewriter words={["Web Developer", "Graphic Designer"]} loop={false} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
									</span>
								</h1>
								<p className='max-w-lg my-7 text-gray-400'>
									<span>Always enthusiastic and challenged to learn new things.</span>
									<br />
									<span> Let's find your problem solution with me!</span>
								</p>
								<button className='btn bg-indigo-700 border-none text-white font-normal text-lg'>Contact Me</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* SERVICES */}
			<section id='services' className='bg-indigo-600 text-white'>
				<div className='max-w-6xl m-auto pb-20'>
					{/* HEADER MY SERVICES */}
					<div className='flex flex-col m-auto pt-10 pb-16'>
						<h1 className='m-auto text-5xl font-extrabold pb-5'>My Services</h1>
						<h1 className='m-auto text-xl text-white text-center'>
							<span>These are some of the services I provide for clients,</span>
							<br />
							<span>and surely I'm always open to other projects.</span>
						</h1>
					</div>

					{/* BODY SERVICES */}
					<div className='flex gap-5 pb-20'>
						{/* WEB DEV SERVICE */}
						<ServiceCard title='Web Dev' desc='Lorem ipsum bunhankam eaa ea buka sitik joss anjay mabar' icon={webDevSVG} />
						{/* WEB SCRAPER SERVICE */}
						<ServiceCard title='Web Scraper' desc='Lorem ipsum bunhankam eaa ea buka sitik joss anjay mabar' icon={webScraperSVG} />
						{/* CHAT BOT SERVICE */}
						<ServiceCard title='Chat Bot' desc='Lorem ipsum bunhankam eaa ea buka sitik joss anjay mabar' icon={chatBotSVG} />
						{/* GRAPHIC DESIGN SERVICE */}
						<ServiceCard title='Graphic Design' desc='Lorem ipsum bunhankam eaa ea buka sitik joss anjay mabar' icon={graphicDesignSVG} />
					</div>
				</div>
			</section>

			{/* SECTION RECENT PROJECTS */}
			<section id='recent-projects'>
				<div className='pb-40'>
					{/* WAVE DIVIDER */}
					<div className=''>
						<svg className='fill-indigo-600' viewBox='0 0 1200 120' preserveAspectRatio='none'>
							<path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'></path>
						</svg>
					</div>
					{/* RECENT PROJECT */}
					<div className='max-w-6xl m-auto'>
						{/* HEADER RECENT PROJECTS */}
						<div className='flex flex-col m-auto pt-10 pb-16 text-black'>
							<h1 className='m-auto text-5xl font-extrabold pb-5'>Recent Projects</h1>
							<h1 className='m-auto text-xl text-gray-400 text-center'>
								<span>These are my recent projects and</span>
								<br />
								<span> several of them are publicly accessible.</span>
							</h1>
						</div>
						{/* BODY RECENT PROJECTS */}
						<div className='flex'>
							<ProjectCard title='Ovider Bot' desc='One Video Downloader (Ovider) is telegram bot which can download video from many platform' img={oviderBot} link='https://t.me/ovider_bot' />
							<ProjectCard title='Remote Control Car Using Hand Gensture' desc='One video downloader lorem ipsum bunhankam' img={imgTest} />
						</div>
						{/* FOOTER RECENT PROJECTS */}
						<div className='flex justify-end'>
							<div className='pt-5 pr-10'>
								<a
									className='hover:underline text-sky-600 cursor-pointer font-semibold'
									onClick={() => {
										navigate("/project")
									}}
								>
									Show all projects ➜
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
