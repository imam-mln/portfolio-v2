export default function ProjectCard({title, desc, img, link}) {
	return (
		<div className='m-auto card card-compact max-w-lg shadow-xl group'>
			{/* IMAGE PROJECT */}
			<figure className='relative h-80'>
				<div className='absolute h-full w-full bg-black bg-opacity-50 invisible group-hover:visible'></div>
				<button className='hidden text-black border-none hover:text-white bg-white btn absolute group-hover:block'>Details</button>
				<img className='max-w-xl' src={img} alt={title} />
			</figure>
			{/* DESCRIPTION PROJECT */}
			<div className='card-body flex-row justify-between text-black max-w-xl gap-10 m-auto'>
				<div className='max-w-xs w-80'>
					<h2 className='card-title'>
						<span className='text-xl truncate '>{title}</span>
					</h2>
					<p className='text-gray-400 truncate '>{desc}</p>
				</div>
				<div className='card-actions'>
					<a href={link} target='_blank'>
						<button className='btn text-white bg-indigo-600 hover:bg-black border-none'>Open</button>
					</a>
				</div>
			</div>
		</div>
	)
}
