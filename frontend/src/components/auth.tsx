import {Link} from "react-router-dom";
import {ChangeEvent,useState} from 'react';
import {SignupInput} from "@nithin0.9/medium-clone";

export const Auth = ({type}:{type:"signup" | "singin"})=>{
	const [postInputs,setPostInputs] = useState<SignupInput>({
		name:"",
		email:"",
		password:""
	});

	return (
		<div className = "bg-slate-100 h-screen flex justify-center flex-col">
			{/*{JSON.stringify(postInputs)}*/}
			<div className = "flex justify-center flex-col" >
				<div className="flex justify-center flex-col pb-9">
					<div className="text-3xl font-extrabold">
						Create an Account
					</div>
					<div className = "text-slate-600">
						Already have an acoount?
						<Link className="pl-1 underline" to={"/signin"}>Login </Link>
					</div>
				</div>

				<div classname="flex justify-center my-6 m-10">
					<div className = "text-l font-semibold">Username</div>
					<LabelledInput title="Name" placeholder="Enter your name" onChange={(e)=>{
						setPostInputs ({
							...postInputs,
							name:e.target.value
						})
					}}/>
					<div className = "text-l font-semibold">Email</div>
					<LabelledInput title="Email" placeholder="xyz@example.com" onChange={(e)=>{
						setPostInputs ({
							...postInputs,
							email:e.target.value
						})
					}}/>
					<div className = "text-l font-semibold">Password</div>
					<LabelledInput title="Password" type={"password"}  onChange={(e)=>{
						setPostInputs ({
							...postInputs,
							pasword:e.target.value
						})
					}}/>
				</div>

			</div>
		</div>
	)
}
interface LabelledInputType{
	label:string;
	placeholder:string;
	onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
	type?:string;

}

function LabelledInput({label,placeholder,onChange,type}:LabelledInputType){
	return <div>
	<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
	<input onChange = {onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
	 focus:border-blue-500 block w-48 p-2.5 dark:bg-#f1f5f9 dark:border-#4b5563 dark:placeholder-#030712 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
</div>

}

