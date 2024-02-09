import {Helmet, HelmetProvider} from "react-helmet-async"
import {useEffect} from "react"

import oviderBot from "../assets/oviderBot.jpeg"
import handgunDetection from "../assets/handgun-detection.jpeg"
import handGestureRemoteControl from "../assets/hand-gesture-remote-control.jpeg"
import grabToDodolans from "../assets/grab-to-dodolans.jpeg"
import asco from "../assets/automated-stock-control.jpg"

import ProjectCard from "../Components/ProjectCard"

export default function Portfolio() {
	// useEffect(() => {
	// 	window.scrollTo(0, 0)
	// }, [])
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>IMM-MLN - Portfolio</title>
				</Helmet>
			</HelmetProvider>
			{/* MY PROJECTS */}
			<section>
				<div className='max-w-6xl m-auto'>
					{/* HEADER MY PROJECTS */}
					<div>
						<div className='flex flex-col m-auto pt-10 pb-16'>
							<h1 className='m-auto text-5xl font-extrabold pb-5  text-black'>My Projects</h1>
							<h1 className='m-auto text-xl text-gray-400 font-medium text-center'>
								<span>These are some of the services I provide for clients,</span>
								<br />
								<span>and surely I'm always open to other projects.</span>
							</h1>
						</div>
					</div>
					{/* MY PROJECTS */}
					<div className='max-w-6xl grid grid-cols-3 gap-y-10'>
						<ProjectCard title='Ovider Bot' desc='One Video Downloader (Ovider) is telegram bot which can download video from many platform' img={oviderBot} link='https://t.me/ovider_bot' />
						<ProjectCard title='Handgun Detection' desc='One Video Downloader (Ovider) is telegram bot which can download video from many platform' img={handgunDetection} link='https://universe.roboflow.com/imam-maulana-b4xet/handgun-detection-jtvaj/model/9' />
						<ProjectCard title='Remote Control Car Using Hand Gestures' desc='One Video Downloader (Ovider) is telegram bot which can download video from many platform' img={handGestureRemoteControl} link='https://youtu.be/p1pCyFHBK9c' />
						<ProjectCard title="Grab Merchant's Web Scraper" desc='One Video Downloader (Ovider) is telegram bot which can download video from many platform' img={grabToDodolans} link='https://github.com/imam-mln/grab-scraper-dodolans' />
						<ProjectCard title='Automated Stock Control (ASCO)' desc='One Video Downloader (Ovider) is telegram bot which can download video from many platform' img={asco} link='https://youtu.be/ITJhbdym_10' />
					</div>
					<div className='divider'></div>
				</div>
			</section>

			{/* GRAPHIC DESIGN */}
			<section>
				<div className='max-w-6xl m-auto'>
					{/* HEADER GRAPHIC DESIGN */}
					<div>
						<div className='flex flex-col m-auto pt-20 pb-16'>
							<h1 className='m-auto text-5xl font-extrabold pb-5  text-black'>Graphic Design</h1>
							<h1 className='m-auto text-xl text-gray-400 font-medium text-center'>
								<span>These are some of the services I provide for clients,</span>
								<br />
								<span>and surely I'm always open to other projects.</span>
							</h1>
						</div>
					</div>
					{/* MY PROJECTS */}
					<div className='max-w-6xl grid grid-cols-3'>
						<ProjectCard title='Ovider Bot' desc='One Video Downloader (Ovider) is telegram bot which can download video from many platform' img={oviderBot} link='https://t.me/ovider_bot' />
						<ProjectCard title='Handgun Detection' desc='One Video Downloader (Ovider) is telegram bot which can download video from many platform' img={handgunDetection} link='https://universe.roboflow.com/imam-maulana-b4xet/handgun-detection-jtvaj/model/9' />
						<ProjectCard title='Remote Control Car Using Hand Gestures' desc='One Video Downloader (Ovider) is telegram bot which can download video from many platform' img={handGestureRemoteControl} link='https://youtu.be/p1pCyFHBK9c' />
					</div>
					<div className='divider'></div>
				</div>
			</section>

			{/* SERTIFICATE */}
			<section>
				<div className='max-w-6xl m-auto'>
					{/* HEADER SERTIFICATES */}
					<div>
						<div className='flex flex-col m-auto pt-20 pb-16'>
							<h1 className='m-auto text-5xl font-extrabold pb-5  text-black'>Sertificates</h1>
							<h1 className='m-auto text-xl text-gray-400 font-medium text-center'>
								<span>These are some of the services I provide for clients,</span>
								<br />
								<span>and surely I'm always open to other projects.</span>
							</h1>
						</div>
					</div>
					{/* SERTIFICATES */}
					<div className='max-w-6xl grid grid-cols-3'>
						<ProjectCard title='Ovider Bot' desc='One Video Downloader (Ovider) is telegram bot which can download video from many platform' img={oviderBot} link='https://t.me/ovider_bot' />
						<ProjectCard title='Handgun Detection' desc='One Video Downloader (Ovider) is telegram bot which can download video from many platform' img={handgunDetection} link='https://universe.roboflow.com/imam-maulana-b4xet/handgun-detection-jtvaj/model/9' />
						<ProjectCard title='Remote Control Car Using Hand Gestures' desc='One Video Downloader (Ovider) is telegram bot which can download video from many platform' img={handGestureRemoteControl} link='https://youtu.be/p1pCyFHBK9c' />
					</div>
					<div className='divider'></div>
				</div>
			</section>
		</>
	)
}
