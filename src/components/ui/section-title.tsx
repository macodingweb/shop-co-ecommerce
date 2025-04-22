export function SectionTitle({ text } : { text: string }) {
  return (
    <h1 className="title text-center font-extrabold py-10 text-[38px] max-md:text-[26px] max-md:py-6">{text}</h1>
  )
}