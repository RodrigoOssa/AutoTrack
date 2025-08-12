"use client"
import { useState } from "react";
import { useRef, useEffect } from "react";


export function UserProfileMenu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);


    return (
        <div className="relative flex flex-col items-center" ref={menuRef}>
            <button
                onClick={() => setOpen((v) => !v)}
                className="focus:outline-none transition-shadow ring-0 hover:ring-2 ring-primary-500 rounded-full"
                aria-haspopup="true"
                aria-expanded={open}
            >
                <img
                    src="https://ui-avatars.com/api/?name=Admin"
                    alt="Perfil"
                    className="w-11 h-11 rounded-full border-2 border-primary-500 shadow-md hover:scale-105 transition-transform"
                />
            </button>
            {open && (
                <div className="absolute left-1/2 -translate-x-6/7 top-full mt-3 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-20 animate-fade-in">
                    <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
                        <img
                            src="https://ui-avatars.com/api/?name=Admin"
                            alt="Perfil"
                            className="w-10 h-10 rounded-full border border-gray-300"
                        />
                        <div>
                            <div className="font-semibold text-gray-900 dark:text-white">Admin</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">admin@email.com</div>
                        </div>
                    </div>
                    <button className="w-full text-left px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900 transition rounded-t-none rounded-b-none">
                        Perfil
                    </button>
                    <button className="w-full text-left px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900 transition">
                        Tema Oscuro
                    </button>
                    <button className="w-full text-left px-5 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900 transition rounded-b-xl">
                        Cerrar Sesión
                    </button>
                </div>
            )}
        </div>
    );
}