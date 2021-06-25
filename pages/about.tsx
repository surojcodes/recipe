import {
	Box,
	Stack,
	Text,
	Flex,
	Heading,
	Container,
	Center,
	Button,
	Avatar,
	Badge,
	Link,
	VisuallyHidden,
	chakra,
	StackDivider,
	Icon,
} from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { ReactNode, ReactElement } from 'react'
import {
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
} from 'react-icons/fa'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'

interface FeatureProps {
	text: string
	iconBg: string
	icon?: ReactElement
}
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
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
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
const Feature = ({ text, icon, iconBg }: FeatureProps) => {
	return (
		<Stack direction={'row'} align={'center'}>
			<Flex
				w={8}
				h={8}
				align={'center'}
				justify={'center'}
				rounded={'full'}
				bg={iconBg}
			>
				{icon}
			</Flex>
			<Text fontWeight={600}>{text}</Text>
		</Stack>
	)
}

const Testimonial = ({ children }: { children: ReactNode }) => {
	return <Box>{children}</Box>
}

const TestimonialContent = ({ children }: { children: ReactNode }) => {
	return (
		<Stack
			bg={useColorModeValue('white', 'gray.800')}
			boxShadow={'lg'}
			p={8}
			rounded={'xl'}
			align={'center'}
			pos={'relative'}
			_after={{
				content: `""`,
				w: 0,
				h: 0,
				borderLeft: 'solid transparent',
				borderLeftWidth: 16,
				borderRight: 'solid transparent',
				borderRightWidth: 16,
				borderTop: 'solid',
				borderTopWidth: 16,
				borderTopColor: useColorModeValue('white', 'gray.800'),
				pos: 'absolute',
				bottom: '-16px',
				left: '50%',
				transform: 'translateX(-50%)',
			}}
		>
			{children}
		</Stack>
	)
}

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
	return (
		<Heading as={'h3'} fontSize={'xl'}>
			{children}
		</Heading>
	)
}

const TestimonialText = ({ children }: { children: ReactNode }) => {
	return (
		<Text
			textAlign={'center'}
			color={useColorModeValue('gray.600', 'gray.400')}
			fontSize={'sm'}
		>
			{children}
		</Text>
	)
}

const TestimonialAvatar = ({
	src,
	name,
	title,
}: {
	src: string
	name: string
	title: string
}) => {
	return (
		<Flex align={'center'} mt={8} direction={'column'}>
			<Avatar src={src} alt={name} mb={2} />
			<Stack spacing={-1} align={'center'}>
				<Text fontWeight={600}>{name}</Text>
				<Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
					{title}
				</Text>
			</Stack>
		</Flex>
	)
}

const About = () => {
	return (
		<Container maxWidth={'6xl'} my={'3rem'}>
			<Flex direction={{ base: 'column', md: 'row' }}>
				<Box flexBasis={{ base: '90%', md: '60%' }} mt={'3rem'} mx={5}>
					<Heading fontSize={'4xl'}>
						{' '}
						<Text as='span' color='#FEBD2E'>
							Recipe{' '}
						</Text>
						Book
					</Heading>
					<Text my={'2rem'} color={'gray.500'} fontSize={'lg'}>
						Recipe book is a web application that lets you search and view
						recipes of different items. We have categorized recipies into
						several categories so that you can view only the type of food you
						want to make. Accompanying step by step text based guidelines, we
						provide you with video materials as well.
					</Text>
					<Stack
						spacing={4}
						divider={
							<StackDivider
								borderColor={useColorModeValue('gray.100', 'gray.700')}
							/>
						}
					>
						<Feature
							icon={
								<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
							}
							iconBg={useColorModeValue('yellow.100', 'yellow.900')}
							text={'Personal Growth'}
						/>
						<Feature
							icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
							iconBg={useColorModeValue('green.100', 'green.900')}
							text={'Get a job with your new skills'}
						/>
						<Feature
							icon={
								<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
							}
							iconBg={useColorModeValue('purple.100', 'purple.900')}
							text={'Improve yourself, search for more recipes'}
						/>
					</Stack>
				</Box>

				<Box flexBasis={{ base: '90%', md: '40%' }} mt={'3rem'}>
					<Center py={6}>
						<Box
							w={'80%'}
							bg={useColorModeValue('white', 'gray.900')}
							boxShadow={'2xl'}
							rounded={'lg'}
							p={6}
							textAlign={'center'}
						>
							<Avatar
								size={'xl'}
								src={
									'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
								}
								alt={'Avatar Alt'}
								mb={4}
								pos={'relative'}
								_after={{
									content: '""',
									w: 4,
									h: 4,
									bg: 'green.300',
									border: '2px solid white',
									rounded: 'full',
									pos: 'absolute',
									bottom: 0,
									right: 3,
								}}
							/>
							<Heading fontSize={'2xl'} fontFamily={'body'}>
								Lindsey James
							</Heading>
							<Text fontWeight={600} color={'gray.500'} mb={4}>
								CEO, Recipe Book
							</Text>
							<Text
								textAlign={'center'}
								color={useColorModeValue('gray.700', 'gray.400')}
								px={3}
							>
								I created this website to help those who do not know cooking but
								want to try.
							</Text>
							<Stack direction={'row'} spacing={6} mt={'2rem'} justify='center'>
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
					</Center>
				</Box>
			</Flex>

			<Box
				bg={useColorModeValue('gray.100', 'gray.700')}
				mt={'6rem'}
				mb={'3rem'}
			>
				<Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
					<Stack spacing={0} align={'center'}>
						<Heading fontSize={'4xl'}>
							Recipe Book
							<Text as='span' color='#FEBD2E'>
								Team{' '}
							</Text>
						</Heading>
						<Text>We have wonderful people working for recipe book. </Text>
					</Stack>
					<Stack
						direction={{ base: 'column', md: 'row' }}
						spacing={{ base: 10, md: 4, lg: 10 }}
					>
						<Testimonial>
							<TestimonialContent>
								<TestimonialText>
									I am always thinking of new recipies and conveying it in easy
									to understand language.
								</TestimonialText>
							</TestimonialContent>
							<TestimonialAvatar
								src={
									'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
								}
								name={'Jane Cooper'}
								title={'Head Chef'}
							/>
						</Testimonial>
						<Testimonial>
							<TestimonialContent>
								<TestimonialText>
									I capture the whole teaching process through my lens in
									several angles for you.
								</TestimonialText>
							</TestimonialContent>
							<TestimonialAvatar
								src={
									'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
								}
								name={'John Doe'}
								title={'VideoGrapher'}
							/>
						</Testimonial>
						<Testimonial>
							<TestimonialContent>
								<TestimonialText>
									I write instructions for recipies consulting with the head
									chef and editor.
								</TestimonialText>
							</TestimonialContent>
							<TestimonialAvatar
								src={
									'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
								}
								name={'Pooja Mdr'}
								title={'Content Writer'}
							/>
						</Testimonial>
						<Testimonial>
							<TestimonialContent>
								<TestimonialText>
									I make sure there are no mistakes and you find our guidelines
									easy to follow
								</TestimonialText>
							</TestimonialContent>
							<TestimonialAvatar
								src={
									'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
								}
								name={'Mary Smith'}
								title={'Editor'}
							/>
						</Testimonial>
					</Stack>
				</Container>
			</Box>
		</Container>
	)
}

export default About
