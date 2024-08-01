import {Avatar} from "./blogCard";
import {Link} from "react-router-dom";


export const Appbar = ()=>{
	return <div className = "border-b flex justify-between px-10 py-4">
		<Link to={'/blogs'} className="flex flex-col justify-center">
			Blog.xyz
		</Link>
		<div>
			<Avatar size = {"big"} name="Nithin"/>
		</div>
		</div>
}