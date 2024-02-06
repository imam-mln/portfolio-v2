export default function ServiceCard({title, desc, icon}) {
	return (
		<div id='web-dev' className='card w-96 hover:bg-contain bg-white shadow-xl text-black max-w-xs'>
			<div className='m-auto pt-10'>
				<div className='w-24 h-24 rounded-full bg-indigo-600'>
					<img className='w-40 m-auto p-6' src={icon} alt={title} />
				</div>
			</div>
			<div className='card-body mb-2'>
				<h2 className='card-title text-2xl m-auto font-extrabold'>{title}</h2>
				<h2 className='text-center text-gray-400'>{desc}</h2>
			</div>
		</div>
	)
}
