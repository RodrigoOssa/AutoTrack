import { z } from 'zod';

const plansEnum = z.enum(['free', 'basic', 'premium', 'enterprise'] as const);

export const updateSubscriber = z.object({
    email: z.string().email({ message: "Formato de email inválido." }).optional(),
    username: z.string().min(3, { message: "El nombre de usuario debe tener al menos 3 caracteres." }).optional(),
    name: z.string().optional(),
    surname: z.string().optional(),
    phone_number: z.string().optional(),
    plan: z.array(plansEnum).optional(),
}).strict();

export type updateSubscriber = z.infer<typeof updateSubscriber>;
