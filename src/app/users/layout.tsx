import { SideBar } from "@/ui";
import { Title } from "@/ui/title";

export default function UsersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SideBar />
            <main className="flex flex-col overflow-hidden w-full">
                <Title />
                <div className="p-2 overflow-y-auto">
                    {children}
                </div>
            </main>
        </>
    );
}
