import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import amaLogo from '../assets/ama-logo.svg'

export function CreateRoom() {
  const navigate = useNavigate()

  function handleCreateRoom(data: FormData) {
    const theme = data.get('theme')?.toString()

    console.log({ theme })

    navigate('/room/asdfkhasd')
  }

  return (
    <main className="flex h-screen items-center justify-center px-4">
      <div className="flex max-w-[450px] flex-col gap-6">
        <img src={amaLogo} alt="AMA" className="h-40" />

        <p className="text-center leading-relaxed text-zinc-300">
          Crie uma sala pública de AMA (ask my anything) e priorize as perguntas
          mais importantes para a comunidade
        </p>

        <form
          className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 p-2 transition-colors focus-within:ring-1 focus-within:ring-orange-400 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950"
          action={handleCreateRoom}
        >
          <input
            type="text"
            name="theme"
            placeholder="Nome da sala"
            autoComplete="off"
            className="mx-2 flex-1 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
          />

          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-lg bg-orange-400 px-3 py-1.5 text-sm font-medium text-orange-950 transition-colors hover:bg-orange-500"
          >
            Criar sala
            <ArrowRight className="size-4" />
          </button>
        </form>
      </div>
    </main>
  )
}
