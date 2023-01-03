import React, {useRef, useLayoutEffect} from 'react'
import { Flex, Box, VStack, Circle, Text, Heading, Button } from '@chakra-ui/react'
import { RiLineChartFill } from 'react-icons/ri'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const icons = {
    icon: <RiLineChartFill/>
}

const Feature = ({ icon, title, desc, href }) => {

    return(
        <VStack spacing={3}>
            <Circle size='90' bg='pink' color='white'>
                <Text fontSize='4xl'>{icon}</Text>
            </Circle>
            <Heading>
                {title}
            </Heading>
            <Text textAlign='center' maxW='380px'>
                {desc}
            </Text>
            <a href='https://delante.pl/seo-zalety/'><Box as='button' bg='blue' color='white' px='5' py='' >Przejdź do źródła</Box></a>
        </VStack>
    )
}

const Features = () => {
    const featureRef = useRef()

    useLayoutEffect(() => {

        const features = featureRef.current.children[0].children

        let mm = gsap.matchMedia();

        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)
            gsap.fromTo([features], {x: -300, opacity: 0}, {scrollTrigger: { trigger: featureRef.current.children, start: 'top 70%' }, x: 0, opacity: 1, duration: .5, stagger: 0.2})
            

            Object.values(features).forEach((feature) => {

                const hover = gsap.to(feature, {scale:1.00, duration: .5})
                hover.pause()

                feature.addEventListener('mouseenter', () => hover.play())
                feature.addEventListener('mouseleave', () => hover.reverse())
            })

        }, featureRef)

        return () => ctx.revert()

    }, [])

  return (
    <Flex direction="column" ref={featureRef}>
    <Flex mt='20' direction={['column', 'column', 'column', 'row']} gap='20' align={['center', 'center', 'start']} justify='center' >
        <Feature
            icon={icons.icon}
            title='Wiarygodność'
            desc='Mówiąc prosto – im większa Twoja precenzja w sieci, tym większa wiarygodność. A jak osiągnąć lepszą widoczność? Poprzez zwiększenie autorytetu strony.'
        />
        <Feature
            icon={icons.icon}
            title="Poprawa UX'u strony"
            desc='SXO to pojęcie, które łączy w sobie SEO, UX i CRO. Stanowi kompleksową strategię optymalizacji strony z myślą zarówno o pozycjonowaniu i UX.'
        />
        <Feature
            icon={icons.icon}
            title='Długookresowe wyniki'
            desc='SEO generuje wyniki dla Twojej firmy w określonym przedziale czasowym, także w dłuższej perspektywie, jeśli optymalizujesz stronę z wymogami Google.'
        />
        </Flex>
    </Flex>
  )
}

export default Features