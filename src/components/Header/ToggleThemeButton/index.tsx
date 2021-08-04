import { DarkSide } from '../../../svg/DarkSide'
import { useTheme } from '../../../theme/ThemeContext'
import { LightSide } from '../../../svg/LightSide'
import style from './style.module.scss'

export function ToggleThemeButton() {
    const { currentTheme, toggleTheme } = useTheme()
    
    return (
        <button
            onClick={toggleTheme}
            name="Alterar tema"
            aria-label="Alterar tema"
            className={`${style.toggleThemeButton} ${style[currentTheme]}`}
        >
            <div className={style.buttonBG}>
                <div className={style.animateToggle} />
                {currentTheme === 'dark' ? <DarkSide /> : <LightSide />}
            </div>
        </button>
    )
}