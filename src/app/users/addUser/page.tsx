"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddUser() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, username, name, surname, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Usuario creado exitosamente.');
                setEmail('');
                setUsername('');
                setName('');
                setSurname('');
                setPassword('');
                setConfirmPassword('');
                router.push('/users'); // Redirigir a la lista de usuarios
            } else {
                setError(data.message || 'Error al crear el usuario.');
            }
        } catch (err) {
            setError('Error de conexión. Inténtalo de nuevo.');
        }
    };

    return (
        <main className="flex flex-col overflow-auto w-full h-full">
            <div className="flex border-b border-gray-200 bg-white w-full">
                <Link
                    href="/users"
                    className="px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-200 bg-white focus:outline-none transition-colors"
                >
                    Usuarios
                </Link>
                <Link
                    href="/users/addUser"
                    className="px-4 py-2 text-sm font-medium border-b-2 border-blue-600 text-blue-600 bg-white focus:outline-none transition-colors"
                >
                    Agregar Usuario
                </Link>
            </div>
            <div className="p-2 sm:p-8 w-full flex justify-center">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6 w-full max-w-3xl">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-4">Agregar Nuevo Usuario</h3>
                    <p className="text-gray-500 mb-4">Completa el formulario para añadir un nuevo usuario al sistema.</p>

                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Nombre de Usuario
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
                                Apellido
                            </label>
                            <input
                                type="text"
                                id="surname"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirmar Contraseña
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        {success && <p className="text-green-500 text-sm">{success}</p>}

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Crear Usuario
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}