"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type User = {
    id: string
    name: string
    email: string
}

export default function DashboardPage(){
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function fetchMe(){
            const res = await fetch("/api/auth/me");

            if(!res.ok){
                router.push("/login")
                return
            }

            const data = await res.json()
            setUser(data)
            setLoading(false)
        }

        fetchMe();
    }, [router])

    async function handleLogout(){
        await fetch("/api/auth/logout", {method: "POST"})
        router.push("login")
    }

    if (loading) {
        return <p className="p-6">Carregando...</p>
    }

    return(
        <main className="p-6">

            <h1 className="text-2xl font-bold mb-4">
                Olá, {user?.name}
            </h1>

            <p className="mb-6">{user?.email}</p>

            <button onClick={handleLogout} className="bg-black text-white px-4 py-2 rounded">Logout</button>

        </main>
    )
}