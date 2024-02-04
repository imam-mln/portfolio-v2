import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// COMPONENTS
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

// PAGES
import Home from "./Pages/Home"
import About from "./Pages/About"
import Project from "./Pages/Project"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound"

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/project' element={<Project />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
