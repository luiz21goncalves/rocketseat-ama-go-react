import { ArrowUp } from 'lucide-react'
import { useState } from 'react'

type MessageProps = {
  text: string
  amountOfReactions: number
  answered?: boolean
}

export function Message({
  amountOfReactions,
  text,
  answered = false,
}: MessageProps) {
  const [hasReacted, setHasReacted] = useState(false)

  function handleToggleReatcion() {
    setHasReacted((prevState) => !prevState)
  }

  return (
    <li
      data-answered={answered}
      className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:pointer-events-none data-[answered=true]:opacity-50"
    >
      {text}
      {hasReacted ? (
        <button
          type="button"
          onClick={handleToggleReatcion}
          className="mt-3 flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-500"
        >
          <ArrowUp className="size-4" />
          Curtir pergunta ({amountOfReactions})
        </button>
      ) : (
        <button
          type="button"
          onClick={handleToggleReatcion}
          className="mt-3 flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-300"
        >
          <ArrowUp className="size-4" />
          Curtir pergunta ({amountOfReactions})
        </button>
      )}
    </li>
  )
}
