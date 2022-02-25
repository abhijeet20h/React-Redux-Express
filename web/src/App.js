import axios from "axios"
import React, { useState , useEffect} from "react"
import "./Components/Login.css"
import Login from './Components/Login'
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Logout from './Components/Logout'
function App(props) {
	const [ name, setName ] = useState("")
	const [ home, setHome ] = useState("")

	useEffect(() => {
		axios.get("http://localhost:4000/home").then(function(response) {
			setHome(response.data)
		})
	}, []) 

	// async function postName(e) {
	// 	e.preventDefault()

	// 	try {
	// 		await axios.post("http://localhost:4000/post_name", {
	// 			name,
	// 		})
	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }
		async function postName(e) {
		e.preventDefault()
		try {
			await axios.post("http://localhost:4000/post_name", {
				name
			})
		} catch (error) {
			console.error(error)
			
		}
	}
	console.log("your name is ", props.name)
	const user= useSelector(selectUser)
	return (
		<>
		
			<div>  { user ? <Logout/> : <Login/>  }</div>
			<div className="login ">
			<form onSubmit={postName} className=" login__form">
				<input type="text" placeholder="Enter Your Message" value={name} onChange={(e) => setName(e.target.value)} />
				<button type="submit" className="submit__btn" >Send Name</button>
			</form>
			{home}</div>
		</>
	)
}






 export default App