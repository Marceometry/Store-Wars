import { useEffect, useRef, useState } from "react"
import { useSearch } from "../../../contexts/SearchContext"
import { Close } from "../../../svg/Close"
import { Search } from "../../../svg/Search"
import styles from "./style.module.scss"

export default function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const { debouncedSearch, setIsLoading, searchText, setSearchText } = useSearch()

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  useEffect(() => {
    setIsLoading(true)
    debouncedSearch(searchText)
  }, [searchText])

  function handleSearch(value: string) {
    setSearchText(value)
  }

  function clearInput() {
    inputRef.current?.focus()
    setSearchText('')
  }

  return (
    <fieldset className={styles.searchInput}>
      <input ref={inputRef} value={searchText} autoFocus
        type="text" spellCheck="false" aria-label="Buscar"
        maxLength={80} autoCorrect="off" name="buscar"
        placeholder="Buscar produtos..."
        onChange={e => handleSearch(e.target.value)}
      />

      {!searchText ? <Search /> : (
        <button onClick={clearInput} aria-label="Limpar pesquisa">
          <Close />
        </button>
      )}
    </fieldset>
  )
}