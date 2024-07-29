import {Auth} from "../components/auth";
import {Quote} from '../components/quotes';

export const Signup = ()=>{
	return (
		<div>
			<div className = "grid grid-cols-1 lg:grid-cols-2">
			<div>
				<Auth type="signup"/>
			</div>
			<div className = "hiddenlg:block">
				<Quote/>
			</div>
			</div>
		</div>
	)
}