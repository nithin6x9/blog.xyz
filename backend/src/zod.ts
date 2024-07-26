import {z} from "zod";


export const singupInput z.object({
	email:z.string().email(),
	password:z.string().min(6),
	name:z.string().optional()
})


export type SingupInput = z.infer<typeof signupInput>