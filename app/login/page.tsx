"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";
import Link from "next/link";

export default function LoginPage(){
    const router = useRouter();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setError("")

        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({email, password})
        })

        if(!res.ok) {
            const data = await res.json()
            setError(data.error || "Erro ao fazer login");
            return
        }

        router.push("/dashboard");
    }

    return(
        <main className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-md shadow">

                <h1 className="text-2xl font-bold mb-4 text-black">Login</h1>

                {error && (
                    <p className="text-red text-sm mb-3">{error}</p>
                )}

                <input type="email" placeholder="email" className="w-full border p-2 mb-3 rounded text-black"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />

                <input type="password" placeholder="Senha" className="w-full border p-2 mb-4 rounded text-black" 
                 value={email}
                 onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="w-full bg-black text-white p-2 rounded hover:opacity-90">Entrar</button>
                
                <p className="text-sm mt-4 text-center">
                    Não tem conta?{" "}
                    <Link href="/register" className="underline">Criar Conta
                    </Link>
                </p>


            </form>

        </main>
    )
}