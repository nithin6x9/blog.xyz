import {Appbar} from './appbar';
import {Blog} from '../hooks/index.ts';
import {Avatar} from "../components/blogCard";

export const FullBlog = ({ blog }: {blog: Blog}) => {
	return <div>
			<Appbar />
				<div className = "flex justify-center">
					<div className = "grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
						<div className = "col-span-8">
							<div className = "text-3xl font-extrabold">
								{blog.title}
							</div>
							<div className = "text-slate-500 pt-2">Post on 6th April 2003</div>
							<div className = "pt-4">
								{blog.content}
							</div>
						</div>
						<div className = "col-span-4">
						<div className = "text-slate-500 text-lg">Author</div>
						<div className = "flex w-full">
							<div className = "pr-4 flex flex-col justify-center">
							<Avatar size="big" name = {blog.author.name || "Anonymous"}/>
							</div>
							<div>
								<div className= "text-lg font-bold">{blog.author.name || "Ntihin Krishna"}</div>
								<div className="pt-2 text-slate-500"> Random catch phrase about the author's ablity to grab user's attention</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
}