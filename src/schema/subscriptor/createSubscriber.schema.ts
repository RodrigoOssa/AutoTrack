import { z } from 'zod';

export const createSubscriber = z.object({
    email: z.string().email({ message: "Formato de email inválido." }),
    username: z.string().min(3, { message: "El nombre de usuario debe tener al menos 3 caracteres." }),
    name: z.string().optional(),
    surname: z.string().optional(),
    phone_number: z.string().optional(),
    password: z.string()/* .min(6, { message: "La contraseña debe tener al menos 6 caracteres." }) */,
}).strict();

export type createSubscriber = z.infer<typeof createSubscriber>;
