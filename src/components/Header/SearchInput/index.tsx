// import { useEffect, useRef } from "react"
import { Search } from "../../../svg/Search"
import styles from "./style.module.scss"

export default function SearchInput() {
  // const inputRef = useRef<HTMLInputElement>(null)
  // const { searchText, setSearchText, setIsInputEmpty, debouncedSearch, setIsLoading } = useSearch()

  // useEffect(() => {
  //   inputRef.current && inputRef.current.focus()
  // }, [])

  // const handleChange = (value: string) => {
    // setSearchText(value)
    // if (value === '') {
    //   setIsInputEmpty(true)
    //   setIsLoading(false)
    //   return
    // }
    // setIsLoading(true)
    // debouncedSearch(value)
  // }

  // function clearInput() {
  //   inputRef.current.value = ''
  //   inputRef.current.focus()
  //   setIsInputEmpty(true)
  //   setSearchText('')
  // }

  return (
    <fieldset className={styles.searchInput}>
      <input
      // ref={inputRef}
        type="text" spellCheck="false" aria-label="Buscar"
        maxLength={80} autoCorrect="off" name="buscar" autoFocus
        placeholder="Buscar produtos..."
        // value={searchText}
        // onChange={() => handleChange(inputRef.current.value)}
      />

      <Search />
    </fieldset>
  )
}