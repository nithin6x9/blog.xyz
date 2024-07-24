import {Hono} from "hono";
import {sign} from "hono/jwt";
import {PrismaClient} from "@prisma/client/edge";
import {withAccelerate} from "@prisma/extension-accelerate";

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>();

userRouter.post("/signup", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();

	try{
		const user = await prisma.user.create({
			data:{
				email:body.email,
				password:body.password
			},
		});
		const jwt = await sign({
			id:user.id
		},c.env.JWT_SECRET);

		return c.text(jwt);
	}catch(e){
		console.log(e);
		c.status(411);
		return c.text("USer already exist");
	}
});
userRouter.post("/signin", async(c) => {
	const body = await c.req.json();
	const prisma = new PrismaClient({
		datasourceUrl:c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	try{
		const user = await prisma.user.findFirst({
			where:{
				email:body.email,
				password:body.password
			}
		});
		if(!user){
			c.status(403);//403 unauthorized status code
			//return c.text("Invalid credentials");
			return c.json({
				message:"Incorrect credentials"
			});
		}
		const jwt = await sign({
			id:user.id
		},c.env.JWT_SECRET);

		return c.text(jwt);
	}catch(e){
		console.log(e);
		c.status(411);
		return c.text("Invalid");

	}
});
