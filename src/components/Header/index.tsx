import { ShoppingCart } from '../../svg/ShoppingCart'
import { ToggleThemeButton } from './ToggleThemeButton'
import SearchInput from '../Search/SearchInput'
import style from './style.module.scss'
import Link from 'next/link'

export function Header() {
    return (
        <header className={style.header}>
            <div>
                <Link href="/">
                    <a>
                        <img src="/images/logo.png" alt="Store Wars" />
                    </a>
                </Link>

                <SearchInput />
            </div>

            <div>
                <ToggleThemeButton />

                <Link href="/cart">
                <a>
                    <ShoppingCart />
                </a>
                </Link>
            </div>
        </header>
    )
}