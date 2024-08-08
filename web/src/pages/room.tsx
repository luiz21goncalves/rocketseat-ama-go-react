import { ArrowRight, Share2 } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

import amaLogo from '../assets/ama-logo.svg'
import { Message } from '../components/message'

export function Room() {
  const { roomId } = useParams()

  function handleShareRoom() {
    const url = window.location.href

    if (window.navigator.share !== undefined && window.navigator.canShare()) {
      window.navigator.share({ url })
    } else {
      window.navigator.clipboard.writeText(url)

      toast.info('A URL da sala for copiada para sua área de transferência!')
    }
  }

  return (
    <div className="mx-auto flex max-w-[640px] flex-col gap-6 px-4 py-10">
      <div className="flex items-center gap-3 px-3">
        <img src={amaLogo} alt="AMA" className="size-5" />

        <span className="truncate text-sm text-zinc-500">
          Código da sala: <span className="text-zinc-300">{roomId}</span>
        </span>

        <button
          type="button"
          onClick={handleShareRoom}
          className="ml-auto flex items-center gap-1.5 rounded-lg bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-700"
        >
          compartilhar
          <Share2 className="size-4" />
        </button>
      </div>

      <div className="h-px w-full bg-zinc-900" />

      <form
        className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 p-2 transition-colors focus-within:ring-1 focus-within:ring-orange-400 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950"
        // action={handleCreateRoom}
      >
        <input
          type="text"
          name="theme"
          placeholder="Qual a sua pergunta?"
          autoComplete="off"
          className="mx-2 flex-1 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
        />

        <button
          type="submit"
          className="flex items-center gap-1.5 rounded-lg bg-orange-400 px-3 py-1.5 text-sm font-medium text-orange-950 transition-colors hover:bg-orange-500"
        >
          Criar pergunta
          <ArrowRight className="size-4" />
        </button>
      </form>

      <ol className="list-outside list-decimal space-y-8 px-3">
        <Message
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore rem sit dolore nam. Illo facilis, harum quae, dolor reprehenderit a minus laudantium ratione temporibus perferendis, quaerat odit provident enim."
          amountOfReactions={10}
          answered
        />
        <Message
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis aspernatur incidunt repudiandae asperiores modi velit officiis et eius, corrupti quos hic obcaecati vel provident facere voluptatibus animi expedita omnis."
          amountOfReactions={100}
        />
        <Message
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, saepe porro ut amet laboriosam iusto vitae tempore tenetur. Voluptatum soluta iure atque, fuga ea iste facilis id ad sint voluptatem."
          amountOfReactions={80}
        />
        <Message
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam cumque ab molestiae a ea laudantium vel quia provident. Hic qui sunt nulla incidunt repellendus placeat aperiam explicabo saepe et."
          amountOfReactions={0}
        />
        <Message
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, amet velit veniam maiores facilis voluptas officiis vel nisi corrupti modi quo, dolore iste impedit natus magnam. Temporibus nostrum harum laborum."
          amountOfReactions={50}
        />
      </ol>
    </div>
  )
}
