import {BlogCard} from "../components/blogCard";
import {Appbar} from "../components/appbar";
import {useBlogs} from '../hooks/index.ts';



export const Blogs = () => {

	const {loading,blogs} = useBlogs();

	if(loading){
		return <div>
				loading.....
			</div>
	}


	return	<div>
			<Appbar />
				<div  className="flex justify-center">
				<div>
					{blogs.map(blog => <BlogCard
						id={blo1g.id}
						authorName = {blog.author.name || "Nithin"  }
						title = {blog.title}
						content = {blog.content}
						publishedDate = {"Dec3,2023"}
					/>
)}

				</div>
			</div>
		</div>
}