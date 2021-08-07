import Link from "next/link"
import { ReactNode } from "react"
import style from './style.module.scss'

type LinkButtonProps = {
    href: string
    color?: string
    bgColor: string
    outlined?: boolean
    onClick?: () => void
    children: ReactNode
}

export function LinkButton({
    href,
    color,
    bgColor,
    outlined,
    onClick,
    children,
}: LinkButtonProps) {
    return (
        <Link href={href}>
        <a className={style.linkButton} onClick={onClick} style={{
            color: color,
            border: '1px solid ' + bgColor,
            background: !outlined ? bgColor : ''
        }}>
            {children}
        </a>
        </Link>
    )
}