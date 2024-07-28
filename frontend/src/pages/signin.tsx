import {Auth} from "../components/auth";
import {Quote} from '../components/quotes';

export const Signin = ()=>{
	return (
		<div>
			<div className = "grid grid-cols-2">
			<div>
				<Auth type="sigin"/>
			</div>
			<div className = "invisible  lg:visible">
				<Quote/>
			</div>
			</div>
		</div>
	)
}