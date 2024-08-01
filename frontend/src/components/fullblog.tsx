import {Appbar} from './appbar';
import {Blog} from '../hooks/index.ts';


export const FullBlog = ({ blog }: {blog: Blog}) => {
	return <div>
			<Appbar />
				<div className = "grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
					<div className = "col-span-8">
						<div className = "text-3xl font-extrabold">
							{blog.title}
						</div>
						<div className = "">
							{blog.content}
						</div>
					</div>
					<div className = "col-span-4">Hello
					</div>
				</div>
			</div>
}