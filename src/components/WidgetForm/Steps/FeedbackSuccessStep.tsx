import { CloseButton } from '../../ClosseButton'

export function FeedbackSuccessStep() {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img
          src="../../../assets/success.svg"
          alt="imagem de marcação de correto"
          className="w-6 h-6"
        />
      </div>
    </>
  )
}
