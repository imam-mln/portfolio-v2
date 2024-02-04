import {Helmet, HelmetProvider} from "react-helmet-async"
import {Typewriter} from "react-simple-typewriter"

import ImgImam from "../assets/imam.png"
import gradShape1 from "../assets/grad-shape-1.svg"
import gradShape2 from "../assets/grad-shape-2.svg"
import webDevSVG from "../assets/web-dev.svg"
import circleGradSVG from "../assets/circle-grad.svg"
import nodejsSVG from "../assets/nodejs.svg"
import pythonSVG from "../assets/python.svg"
import photoshopSVG from "../assets/photoshop.svg"

export default function Home() {
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>Portfolio - Home</title>
				</Helmet>
			</HelmetProvider>
			<section>
				<div className='relative'>
					{/* SHAPES */}
					<svg className='absolute -scale-x-100 bg-gradient-to-tr  fill-indigo-600 bottom-0 z-10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
						<path d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'></path>
					</svg>
					<img src={gradShape2} className='absolute -right-60 bottom-52 max-w-2xl select-none' alt='' />
					<img className='absolute w-52 -top-5 -left-20 select-none' src={gradShape1} alt='' />
					<img className='absolute w-20 top-20 left-36 select-none' src={gradShape1} alt='' />

					{/* ELEMENTS */}
					<div className='hero min-h-screen text-black max-w-6xl m-auto'>
						<div className='hero-content flex-col lg:flex-row-reverse gap-40'>
							{/* <img className='absolute w-16' src={nodejsSVG} alt='NodeJS' />
							<img className='absolute w-16' src={pythonSVG} alt='Python' />
							<img className='absolute w-16' src={photoshopSVG} alt='Adobe Photoshop' /> */}
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
			<section className='bg-indigo-600 text-white'>
				<div className='max-w-6xl m-auto'>
					<div className='flex flex-col m-auto'>
						<h1 className='m-auto text-5xl'>My Services</h1>
						<h1 className='m-auto'>My services aren't limited to these, and I'm always open to other projects.</h1>
					</div>
					<div>
						<div className='card w-96 hover:bg-contain bg-white shadow-xl text-black'>
							<div>
								<div className='w-20 h-20 rounded-full bg-indigo-600'>
									<img className='m-auto p-4' src={webDevSVG} alt='' />
								</div>
							</div>
							<div className='card-body'>
								<h2 className='card-title'>Card title!</h2>
								<p>If a dog chews shoes whose shoes does he choose?</p>
								<div className='card-actions justify-end'>
									<button className='btn btn-primary'>Buy Now</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
