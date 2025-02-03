import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <>
      <h1 className="title__page">Marvel Comics</h1>
      <HeroList publisher={'Marvel Comics'} />
    </>
  )
}
