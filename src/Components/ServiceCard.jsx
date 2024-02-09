export default function ServiceCard({title, desc, icon}) {
	return (
		<div className='card w-full bg-white shadow-xl text-black max-w-xs'>
			<div className='m-auto pt-10'>
				<div className='m-auto p-5 rounded-full bg-indigo-600'>{icon}</div>
			</div>
			<div className='card-body mb-2'>
				<h2 className='card-title text-xl m-auto font-extrabold'>{title}</h2>
				<h2 className='text-center text-gray-400 text-sm'>{desc}</h2>
			</div>
		</div>
	)
}
