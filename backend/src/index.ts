import { Hono } from "hono";
import {sign,verify} from "hono/jwt";
import {PrismaClient} from "@prisma/client/edge";
import {withAccelerate} from "@prisma/extension-accelerate";


const app = new Hono();

app.use("/api/v1/blog/*",async(c,next) => {

	//get the header
	//verify the header
	//if the header is correct ,we can process
	//if not we return the user a 403 status code
	const header = c.req.header("authorization") || "";

	const response = await verify(header,c.env.JWT_SECRET); 
	if(reponse.id){
		next();
	} else{

		c.status(403);
		await next();
	}
});

app.post("/api/v1/signup", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();

	const user = await prisma.user.create({
		data:{
			email:body.email,
			password:body.password
		},
	});

	const token = sign({id:user.id},"secret");
	return c.json({
		jwt:token
	});
});

app.post("/api/v1/signin",async (c) => {

	const prisma = new PrismaClient({
		datasourceUrl:c.env?.DATABASE_URL,
	}).$extends(withAccelerate()) ;

	const body = await c.req.json();
	const user = await prisma.user.findUnique({
		where:{
			email:body.email,
			password:body.password
		}
	});

	if(!user){
		c.status(403);
		return c.json({error:"User not found"});
	}

	const jwt = await sign({id:user,id},"secret");
	return c.json({jwt});

	return c.text("Hello Hono");
});

app.post("api/v1/blog",(c)=>{
	return c.text("Hello Hono");
});

app.put("api/v1/blog",(c)=>{
	return c.text("Hello Hono");
});

app.get("api/v1/blog/:id",(c)=>{
	return c.text("Hello Hono");
});


export default app;
