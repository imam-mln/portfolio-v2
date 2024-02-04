import {Helmet, HelmetProvider} from "react-helmet-async"

export default function Project() {
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>Portfolio - Project</title>
				</Helmet>
			</HelmetProvider>
			<section>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iure eveniet, quos consequuntur ipsa eaque, earum cupiditate nemo sapiente et quis inventore, illum excepturi laudantium? Ipsum eos possimus alias veniam.</p>
			</section>
		</>
	)
}
