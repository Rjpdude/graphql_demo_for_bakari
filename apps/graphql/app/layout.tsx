'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, Flex } from '@chakra-ui/react'

function Document({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <Document>
      <CacheProvider>
        <ChakraProvider resetCSS={true}>
          <Flex as="section" flex="1">
            <Flex
              width="100%"
              height="100%"
              overflow="auto"
              overflow-x= "auto"
              direction="row"
            >
              {children}
            </Flex>
          </Flex>
        </ChakraProvider>
      </CacheProvider>
    </Document>
  )
}

export default RootLayout;
