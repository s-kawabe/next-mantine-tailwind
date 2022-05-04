import 'nprogress/nprogress.css'
import '@/styles/global.css'

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app'
import nprogress from 'nprogress'
import { useEffect } from 'react'

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (process.browser) {
    nprogress.start()
  }

  useEffect(() => {
    nprogress.done()
  })

  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp
