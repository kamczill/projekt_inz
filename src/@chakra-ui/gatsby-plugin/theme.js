import { extendTheme } from '@chakra-ui/react'

import '@fontsource/kaushan-script/400.css'
import '@fontsource/mulish/700.css'
import '@fontsource/spartan/700.css'

const theme = {
    fonts: {
        logo: `'Kaushan Script', sans-serif`,
        head: `'Spartan', sans-serif`,
        paragraph: `'Mulish', sans-serif`
      },
    colors: {
        pink: '#F551FF',
        ocean: '#00E6CA',
        blue: '#2820FC'
      }
}

export default extendTheme(theme)