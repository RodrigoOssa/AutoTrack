import { UserProfileMenu } from "@/components";

export function Title() {
    return (
        <header className="flex items-center justify-between p-4 bg-white ">
            <h2
                className="text-2xl font-semibold text-gray-800">
                Dashboard Operacional
            </h2>
            <div
                className="flex items-center">
                <span
                    className="text-gray-600 mr-4">
                    Hola, Admin
                </span>


                <UserProfileMenu />
            </div>
        </header>
    )
}