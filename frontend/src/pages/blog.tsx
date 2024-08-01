import {useBlog} from "../hooks/index.ts"
import {useParams} from 'react-router-dom'
import {FullBlog} from '../components/fullblog';
import {Spinner} from '../components/spinner';
import {Appbar} from '../components/appbar';
//import {Skelton} from '../components/blogskelton';



export const Blog = ()=>{
	const {id} = useParams();
	const {loading,blog} = useBlog({
		id:id || ""
	});

	if(loading || !blog){
		return <div>
				<Appbar />
				<div className= "h-screen flex flex-col justify-center">
						<div className = "flex justify-center">
							<Spinner />
						</div>
					</div>
				</div>
	}


	return (
		<div>
			<FullBlog blog={blog} />

		</div>
	)
}