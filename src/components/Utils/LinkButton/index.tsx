import { ReactNode } from "react"
import Link from "next/link"
import style from './style.module.scss'

type StyledLinkProps = {
    href: string
    color?: string
    bgColor: string
    outlined?: boolean
    children: ReactNode
    onClick?: () => void
}

export function StyledLink({
    href,
    color,
    bgColor,
    outlined,
    onClick,
    children,
}: StyledLinkProps) {
    return (
        <Link href={href ?? ''}>
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

type StyledButtonProps = {
    color?: string
    bgColor: string
    outlined?: boolean
    children: ReactNode
    onClick?: () => void
}

export function StyledButton({
    color,
    bgColor,
    outlined,
    onClick,
    children,
}: StyledButtonProps) {
    return (
        <button className={style.linkButton} onClick={onClick} style={{
            color: color,
            border: '1px solid ' + bgColor,
            background: !outlined ? bgColor : ''
        }}>
            {children}
        </button>
    )
}