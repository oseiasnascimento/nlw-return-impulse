import { LogoRocketseat } from "./LogoRocketseat";

export function Footer(){
  return(
    <footer className="w-full p-5 flex items-center justify-between border-top bg-zinc-800 border-b border-zinc-700">
      <div className="flex items-center justify-between gap-5">
        <LogoRocketseat />
        <p className="text-gray-300">
          Rocketseat - Todos os direitos reservados
        </p>
      </div>
      <div>
        <p className="text-gray-300">
          Políticas de privacidade
        </p>
      </div>
    </footer>
  )
}