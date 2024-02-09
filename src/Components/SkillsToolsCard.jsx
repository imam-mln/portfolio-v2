export default function SkillToolsCard({title, lvl, icon}) {
	var el = []
	for (let i = 1; i < 6; i++) {
		i === lvl ? el.push(<input key={`${title}${i}`} type='radio' name={`${title}-skill`} className='mask mask-circle bg-white cursor-default' defaultChecked disabled />) : el.push(<input name={`${title}-skill`} key={`${title}${i}`} type='radio' className='mask mask-circle bg-white cursor-default' disabled />)
	}

	return (
		<div key={title} className='m-auto text-white tracking-wide card flex-row shadow-lg rounded-full border-t-2 bg-indigo-600'>
			<div className='max-w-52 bg-white border-indigo-600 border-4 rounded-full p-5'>{icon}</div>

			<div className='pl-5 pr-11 my-auto'>
				<div className='pb-1 tracking-wide'>
					<h1>{title}</h1>
				</div>
				<div className='rating rating-sm gap-1 bg-ind'>{el}</div>
			</div>
		</div>
	)
}
