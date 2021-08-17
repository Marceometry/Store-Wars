import Router from 'next/router'
import Nprogress from 'nprogress'

export function NprogressConfig() {
    Nprogress.configure({
        showSpinner: false,
        trickleSpeed: 300
    })
    
    Router.events.on('routeChangeStart', () => {
        Nprogress.start()
    })
    
    Router.events.on('routeChangeComplete', () => {
        Nprogress.done()
    })
    
    Router.events.on('routeChangeError', () => {
        Nprogress.done()
    })
}