import {
	Heading,
	Avatar,
	Box,
	Center,
	Image,
	Flex,
	Text,
	Stack,
	Button,
	Spacer,
	useColorModeValue,
} from '@chakra-ui/react'
import { RiTimerFill } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'
export default function Card() {
	return (
		<Flex
			w={'full'}
			bg={useColorModeValue('white', 'gray.800')}
			boxShadow={'xl'}
			rounded={'md'}
			overflow={'visible'}
			h={'210px'}
			my={2}
			_hover={{
				bg: '#FdFdFd',
			}}
		>
			<Box basis='30%'>
				<Image
					h={'full'}
					minW={'180px'}
					src='/images/desserts.jpg'
					objectFit={'cover'}
				/>
			</Box>
			<Flex ml={5} py={2} direction='column' alignContent='flex-end' p={5}>
				<Heading fontSize={'2xl'}>
					<Text
						as='a'
						href='#'
						_hover={{
							color: '#FEBD2E',
						}}
					>
						Chocolate Cupcakes
					</Text>
				</Heading>

				<Text
					alignItems='justify'
					mt={2}
					color='#aaa'
					py={3}
					display={{ sm: 'block', md: 'none', lg: 'block' }}
				>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
					quo quae inventore nobis quia officiis nesciunt est similique impedit
					blanditiis.
				</Text>
				<Flex
					justifyContent='space-between'
					direction={{ sm: 'row', md: 'column', lg: 'row' }}
					mt={{ sm: '0.4rem', md: '2rem', lg: '0.4rem' }}
				>
					<Text mb={{ sm: '0.4rem', md: '1rem', lg: '0.4rem' }}>
						{' '}
						<Stack direction='row' color='#FEBD2E'>
							<FaUser /> <FaUser /> <FaUser />
						</Stack>
					</Text>
					<Text>
						{' '}
						<Stack direction='row' alignItems='center' alignContent='center'>
							<Text as='span' color='#FEBD2E'>
								<RiTimerFill />
							</Text>{' '}
							<Text> 3hr 30 min</Text>
						</Stack>
					</Text>
				</Flex>
			</Flex>
		</Flex>
	)
}
