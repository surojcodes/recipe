import { Container, Box, Text, Flex, Heading, Stack } from '@chakra-ui/layout'
import {
	chakra,
	VisuallyHidden,
	useColorModeValue,
	Input,
	Button,
	Textarea,
} from '@chakra-ui/react'
import { whiten } from '@chakra-ui/theme-tools'
import { ReactNode } from 'react'
import {
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
} from 'react-icons/fa'

const SocialButton = ({
	children,
	label,
	href,
}: {
	children: ReactNode
	label: string
	href: string
}) => {
	return (
		<chakra.button
			bg='#FEBD2E'
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	)
}

const contact = () => {
	return (
		<Container maxW={'6xl'} my={'2rem'}>
			<Box minH={'65vh'} py={4}>
				<Flex
					justifyContent='space-around'
					wrap='wrap'
					// alignItems='center'
					direction={{ base: 'column-reverse', md: 'row' }}
					mx={'2rem'}
				>
					<Box flexBasis='40%' color='#242424' my={'7vh'}>
						<Heading fontSize={'4xl'}>
							{' '}
							<Text as='span' color='#FEBD2E'>
								Get{' '}
							</Text>
							in Touch
						</Heading>
						<Text>
							Fill up the form and our Team will get back to you within 24 hours
						</Text>
						<Box mt={'3rem'}>
							<Stack
								direction={'row'}
								spacing={6}
								alignItems='center'
								p={4}
								border='2px solid #242424'
								borderRadius={5}
								my={3}
								fontWeight='bold'
								_hover={{
									boxShadow: '2px 2px 6px #242424',
								}}
							>
								<FaPhone />
								<Text>+977-9809987678</Text>
							</Stack>
							<Stack
								direction={'row'}
								spacing={6}
								alignItems='center'
								p={4}
								border='2px solid #242424'
								borderRadius={5}
								fontWeight='bold'
								my={3}
								_hover={{
									boxShadow: '2px 2px 10px #242424',
								}}
							>
								<FaEnvelope />
								<Text>hamrorecipe@gmail.com</Text>
							</Stack>
							<Stack
								direction={'row'}
								spacing={6}
								alignItems='center'
								p={4}
								border='2px solid #242424'
								borderRadius={5}
								fontWeight='bold'
								my={3}
								_hover={{
									boxShadow: '2px 2px 10px #242424',
								}}
							>
								<FaMapMarkerAlt />
								<Text>125 Street 264 Ktm</Text>
							</Stack>
						</Box>
						<Stack direction={'row'} spacing={6} mt={'3rem'}>
							<SocialButton label={'Twitter'} href={'#'}>
								<FaTwitter />
							</SocialButton>
							<SocialButton label={'YouTube'} href={'#'}>
								<FaYoutube />
							</SocialButton>
							<SocialButton label={'Instagram'} href={'#'}>
								<FaInstagram />
							</SocialButton>
						</Stack>
					</Box>
					<Box
						flexBasis={{ sm: '90%', md: '50%', lg: '40%' }}
						my={{ base: '2vh', md: '7vh' }}
						boxShadow={'xl'}
						rounded={'lg'}
					>
						<Stack
							bg={'#FEBD2E'}
							rounded={'xl'}
							p={{ base: 4, sm: 6, md: 8 }}
							spacing={{ base: 8 }}
							minH='51vh'
							width='100%'
						>
							<Stack spacing={4}>
								<Heading
									color={'gray.800'}
									lineHeight={1.1}
									fontSize={{ base: 'xl', sm: '2xl', md: '3 xl' }}
								>
									Send us a message !
								</Heading>
							</Stack>
							<Box as={'form'} mt={10}>
								<Stack spacing={4}>
									<Input
										placeholder='Full Name'
										color={'gray.500'}
										border={0}
										bg='white'
										_placeholder={{
											color: 'gray.500',
										}}
									/>
									<Input
										placeholder='Email Address'
										color={'gray.500'}
										bg='white'
										border={0}
										_placeholder={{
											color: 'gray.500',
										}}
									/>
									<Input
										placeholder='Phone Number'
										color={'gray.500'}
										bg='white'
										border={0}
										_placeholder={{
											color: 'gray.500',
										}}
									/>

									<Textarea
										placeholder='Write your message'
										bg='white'
										rows={5}
									/>
								</Stack>
								<Button
									fontFamily={'heading'}
									mt={8}
									w={'full'}
									bg='#242424'
									color='white'
									_hover={{
										boxShadow: 'xl',
									}}
								>
									Send Message
								</Button>
							</Box>
						</Stack>
					</Box>
				</Flex>
			</Box>
		</Container>
	)
}

export default contact
