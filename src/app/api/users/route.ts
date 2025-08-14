import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const { email, username, name, surname, password, relatedToId } = await request.json();

        if (!email || !username || !password) {
            return NextResponse.json({ message: 'Faltan campos obligatorios.' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.employeeUser.create({
            data: {
                email,
                username,
                name,
                surname,
                password: hashedPassword,
                relatedToId,
            },
        });

        return NextResponse.json(newUser, { status: 201 });
    } catch (error: any) {
        if (error.code === 'P2002') {
            return NextResponse.json({ message: 'El email o nombre de usuario ya está registrado.' }, { status: 409 });
        }
        console.error('Error al crear usuario:', error);
        return NextResponse.json({ message: 'Error interno del servidor.' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const users = await prisma.employeeUser.findMany({
            select: {
                id: true,
                email: true,
                username: true,
                name: true,
                surname: true,
                created_at: true,
            },
        });
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return NextResponse.json({ message: 'Error interno del servidor.' }, { status: 500 });
    }
}
