import {Avatar} from "./blogCard";

export const Appbar = ()=>{
	return <div className = "border-b flex justify-between px-10 py-4">
		<div className="flex flex-col justify-center">
			Medium
		</div>
		<div>
			<Avatar size = {6} name="Nithin"/>
		</div>
		</div>
}