import { ShoppingCart } from '../../svg/ShoppingCart'
import { ToggleThemeButton } from './ToggleThemeButton'
import SearchInput from './SearchInput'
import style from './style.module.scss'

export function Header() {
    return (
        <header className={style.header}>
            <div>
                <img src="/images/logo.png" alt="Store Wars" />

                <SearchInput />
            </div>

            <div>
                <ToggleThemeButton />

                <ShoppingCart />
            </div>
        </header>
    )
}