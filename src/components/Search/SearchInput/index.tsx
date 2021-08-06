import { useEffect, useRef, useState } from "react"
import { Close } from "../../../svg/Close"
import { Search } from "../../../svg/Search"
import styles from "./style.module.scss"

export default function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  // const { searchText, setSearchText, setIsInputEmpty, debouncedSearch, setIsLoading } = useSearch()

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  const handleChange = (value: string) => {
    setValue(value)
    // if (value === '') {
      // setIsInputEmpty(true)
      // setIsLoading(false)
    //   return
    // }
    // setIsLoading(true)
    // debouncedSearch(value)
  }

  function clearInput() {
    inputRef.current?.focus()
    // setIsInputEmpty(true)
    setValue('')
  }

  return (
    <fieldset className={styles.searchInput}>
      <input ref={inputRef} value={value} autoFocus
        type="text" spellCheck="false" aria-label="Buscar"
        maxLength={80} autoCorrect="off" name="buscar"
        placeholder="Buscar produtos..."
        onChange={e => handleChange(e.target.value)}
      />

      {!value ? <Search /> : (
        <button onClick={clearInput} aria-label="Limpar pesquisa">
          <Close />
        </button>
      )}
    </fieldset>
  )
}