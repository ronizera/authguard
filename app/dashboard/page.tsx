"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type User = {
    id: string
    name: string
    email: string
    createdAt: string
}

export default function DashboardPage(){
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function loadUser(){
            const res = await fetch("/api/auth/me");

            if(!res.ok){
                router.push("/login")
                return
            }

            const data = await res.json()
            setUser(data.user)
            setLoading(false)
        }

        loadUser();
    }, [])



    if (loading) {
        return <p className="p-6">Carregando...</p>
    }

    return(
        <main className="min-h-screen bg-neutral-50 px-6 py-10 text-black">
    
    <header className="max-w-4xl mx-auto flex justify-between items-center mb-10">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">
          Bem-vindo de volta, {user?.name}!
        </h1>
        <p className="text-neutral-600">
          É ótimo te ver por aqui. Tudo está pronto para você começar.
        </p>
      </div>

      <button
        onClick={async () => {
          await fetch("/api/auth/logout", { method: "POST" })
          router.push("/login")
        }}
        className="border px-4 py-2 rounded-lg hover:bg-neutral-100 transition cursor-pointer"
      >
        Sair
      </button>
    </header>

   
    <section className="max-w-4xl mx-auto space-y-6">
     
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Suas Informações</h2>

        <div className="space-y-3">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <p className="text-sm text-neutral-500">Nome</p>
            <p className="font-medium">{user?.name}</p>
          </div>

          <div className="bg-neutral-50 p-4 rounded-lg">
            <p className="text-sm text-neutral-500">E-mail</p>
            <p className="font-medium">{user?.email}</p>
          </div>

        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">Próximos Passos</h3>
          <p className="text-neutral-600 text-sm">
            Explore os recursos disponíveis e personalize sua experiência.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">Precisa de Ajuda?</h3>
          <p className="text-neutral-600 text-sm">
            Acesse nossa central de suporte para tirar dúvidas.
          </p>
        </div>
      </div>
    </section>
  </main>
    )
}