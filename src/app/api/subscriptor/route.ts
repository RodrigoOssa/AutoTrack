import { NextResponse } from 'next/server';
import { createSubscriber } from '@/schema';
import { subscriberService } from '@/services/subscriptor.service';
import z from 'zod';

export async function POST(req: Request) {

    try {
        const reqBody = await req.json();
        const validateInputs = createSubscriber.safeParse(reqBody);

        if (!validateInputs.success) {
            return NextResponse.json({
                error: validateInputs.error.issues
            }, { status: 400 }
            );
        }

        const response = await subscriberService.createSubs(reqBody)

        return NextResponse.json(response, { status: 201 });
    } catch (error: any) {
        if (error.code === 'P2002') {
            return NextResponse.json({
                message: 'El email o nombre de usuario ya está registrado.'
            }, {
                status: 409
            }
            );
        }

        if (error instanceof z.ZodError) {
            return NextResponse.json({
                message: 'Error de validación.',
                issues: error.issues
            }, {
                status: 400,
            });
        }

        return NextResponse.json({
            message: 'Error interno del servidor.'
        }, {
            status: 500
        }
        );
    }
}

export async function GET() {

    try {
        const subscribers = await subscriberService.getAll();
        return NextResponse.json(subscribers, { status: 200 });
    } catch (error) {
        console.error('Error al obtener suscriptores:', error);
        return NextResponse.json({ message: 'Error interno del servidor.' }, { status: 500 });
    }
}
