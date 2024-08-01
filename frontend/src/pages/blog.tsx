import {useBlog} from "../hooks/index.ts"
import {useParams} from 'react-router-dom'
import {FullBlog} from '../components/fullblog';


export const Blog = ()=>{
	const {id} = useParams();
	const {loading,blog} = useBlog({
		id:id || ""
	});

	if(loading){
		return <div>
			loading....
			</div>
	}


	return (
		<div>
			<FullBlog blog={blog} />

		</div>
	)
}