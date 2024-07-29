import {Auth} from "../components/auth";
import {Quote} from '../components/quotes';

export const Signin = ()=>{
	return (
		<div>
			<div className = "grid grid-cols-1 lg:grid-cols-2">
			<div>
				<Auth type="sigin"/>
			</div>
			<div className = "hidden lg:block">
				<Quote/>
			</div>
			</div>
		</div>
	)
}