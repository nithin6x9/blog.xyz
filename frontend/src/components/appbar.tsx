import {Avatar} from "./blogCard";
import {Link} from "react-router-dom";


export const Appbar = ()=>{
	return <div className = "border-b flex justify-between px-10 py-4">
		<Link to={'/blogs'} className="flex flex-col justify-center">
			Blog.xyz
		</Link>
		<div>
			<Link to = {`/publish`}>
			<button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 me-2 mb-2">New blog</button>
			</Link>
			<Avatar size = {"big"} name="Nithin"/>
		</div>
		</div>
}