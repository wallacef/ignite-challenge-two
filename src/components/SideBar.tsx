import { Button } from "./Button";

type SideBarProps = {
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>
  genres: GenreResponseProps[]
  selectedGenreId: number
}

export function SideBar(props: SideBarProps) {
  const {
    genres,
    setSelectedGenreId,
    selectedGenreId
  } = props

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}