import {BlogCard} from "../components/blogCard";
import {Appbar} from "../components/appbar";
import {useBlogs} from '../hooks/index.ts';
import {BlogSkelton} from '../components/blogskelton';


export const Blogs = () => {

	const {loading,blogs} = useBlogs();

	if(loading){
		return (
			<div>
				<Appbar />
				<div className = "flex justify-center">
					<div>
						<BlogSkelton />
						<BlogSkelton />
						<BlogSkelton />
						<BlogSkelton />
						<BlogSkelton />
						<BlogSkelton />
						<BlogSkelton />
						<BlogSkelton />

					</div>
				</div>
			</div>
	)}


	return	<div>
			<Appbar />
				<div  className="flex justify-center">
				<div>
					{blogs.map(blog => <BlogCard
						id={blog.id}
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