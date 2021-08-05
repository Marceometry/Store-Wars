import style from './style.module.scss'

export function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        Feito com A Força por <a href="https://github.com/Marceometry"
                                 rel="noopener noreferrer nofollow" target="_blank" >
                                 Marcelino Teixeira
                              </a>
      </p>
    </footer>
  )
}