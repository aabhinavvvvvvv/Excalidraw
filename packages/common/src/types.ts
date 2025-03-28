import zod from "zod";

export const CreateUserSchema = zod.object({
    username: zod.string().min(1).max(20),
    password: zod.string().min(3),
    name: zod.string(),
});
export const SignInSchema = zod.object({
    username: zod.string().min(1).max(20),
    password: zod.string().min(3),
});
export const CreateRoomSchema = zod.object({
    name: zod.string().min(3).max(20),
});

export type CreateUser = zod.infer<typeof CreateUserSchema>;
export type SignIn = zod.infer<typeof SignInSchema>;
export type Room = zod.infer<typeof CreateRoomSchema>;

