import { subscriberService } from "@/services/subscriptor.service";
import { NextResponse } from "next/server";
import z from "zod";


export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const valdiateId = z.object({ id: z.string().uuid() }).safeParse({ id });
        if (!valdiateId.success) {
            return NextResponse.json({
                message: 'Id de suscriptor inválido.'
            }, {
                status: 400,
            });
        }
        const response = await subscriberService.getById(id);
        if (!response) {
            return NextResponse.json({
                message: 'Suscriptor no encontrado.'
            }, {
                status: 404,
            })
        }

        return NextResponse.json({
            ...response
        }, {
            status: 200,
        });

    } catch (error) {
        if ((error as any).code === 'P1001') {
            return NextResponse.json({
                code: (error as any).code,
                message: (error as any).name ? (error as any).name : 'Error de conexión a la base de datos.'
            }, {
                status: 500,
            });
        }
        return NextResponse.json({
            message: 'Error interno del servidor.',
            error: (error instanceof Error) ? error.message : error
        }, {
            status: 500,
        });
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const validateId = z.object({ id: z.string().uuid() }).safeParse({ id });
        if (!validateId.success) {
            return NextResponse.json({
                message: 'Id de suscriptor inválido.'
            }, {
                status: 400,
            });
        }

        const body = await req.json();
        const response = await subscriberService.updateSubs(id, body);
        console.log(response)
        if (!response) {
            return NextResponse.json({
                message: 'Suscriptor no encontrado.'
            }, {
                status: 404,
            });
        }

        return NextResponse.json({
            ...response
        }, {
            status: 200,
        });

    } catch (error) {
        if ((error as any).code === 'P1001') {
            return NextResponse.json({
                code: (error as any).code,
                message: (error as any).name ? (error as any).name : 'Error de conexión a la base de datos.'
            }, {
                status: 500,
            });
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
            message: 'Error interno del servidor.',
            error: (error instanceof Error) ? error.message : error
        }, {
            status: 500,
        });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const validateId = z.object({ id: z.string().uuid() }).safeParse({ id });
        if (!validateId.success) {
            return NextResponse.json({
                message: 'Id de suscriptor inválido.'
            }, {
                status: 400,
            });
        }
        const response = await subscriberService.deleteSubs(id);
        if (!response) {
            return NextResponse.json({
                message: 'Suscriptor no encontrado.'
            }, {
                status: 404,
            });
        }

        return NextResponse.json({
            message: 'Suscriptor eliminado correctamente.'
        }, {
            status: 200,
        });

    } catch (error) {
        if ((error as any).code === 'P1001') {
            return NextResponse.json({
                code: (error as any).code,
                message: (error as any).name ? (error as any).name : 'Error de conexión a la base de datos.'
            }, {
                status: 500,
            });
        }
        return NextResponse.json({
            message: 'Error interno del servidor.',
            error: (error instanceof Error) ? error.message : error
        }, {
            status: 500,
        });
    }
}