
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "black", "paddingX": "16px", "paddingY": "8px", "zIndex": "999"}}>
  <Text sx={{"height": "40px"}}>
  {`gerald`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginY": "32px"}}>
  <VStack>
  <Avatar name={`Gerald Lopez`} size={`xl`}/>
  <Text>
  {`@gjlm87`}
</Text>
  <Text>
  {`HOLA MI NOMBRE ES GERALD LOPEZ`}
</Text>
  <Text>
  {`Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                leap into electronic typesetting, 
                remaining essentially unchanged.`}
</Text>
</VStack>
  <VStack>
  <Link as={NextLink} href={`https://www.youtube.com`} isExternal={true}>
  <Button>
  {`Youtube`}
</Button>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com`} isExternal={true}>
  <Button>
  {`Instagram`}
</Button>
</Link>
  <Link as={NextLink} href={`https://twitter.com`} isExternal={true}>
  <Button>
  {`X`}
</Button>
</Link>
  <Link as={NextLink} href={`https://www.facebook.com?`} isExternal={true}>
  <Button>
  {`Facebook`}
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack>
  <ChakraImage src={`favicon.ico`}/>
  <Link as={NextLink} href={`https://www.facebook.com/?locale=es_LA`} isExternal={true}>
  {`© 2023 Geralddev.`}
</Link>
  <Text>
  {`Todos los derechos reservados`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
