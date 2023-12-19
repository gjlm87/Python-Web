
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Button, HStack, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <VStack>
  <HStack sx={{"position": "sticky", "bg": "black", "paddingX": "16px", "paddingY": "8px", "zIndex": "999"}}>
  <Text sx={{"height": "40px"}}>
  {`gerald`}
</Text>
</HStack>
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
  <Button>
  {`Click Me!`}
</Button>
</VStack>
</VStack>
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
