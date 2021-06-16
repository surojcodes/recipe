import {
	Heading,
	Box,
	Image,
	Flex,
	Text,
	Stack,
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
			<Flex
				ml={5}
				direction='column'
				alignContent='center'
				justifyContent='center'
				pl={1}
				pr={3}
				py={2}
			>
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
					display={{ base: 'none', sm: 'block' }}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quam!
				</Text>
				<Flex
					justifyContent='space-between'
					direction={{ base: 'column', sm: 'row' }}
					mt={{ base: '1.5rem', sm: '0.4rem' }}
				>
					<Box mb='0.2rem'>
						{' '}
						<Stack direction='row' color='#FEBD2E'>
							<FaUser /> <FaUser /> <FaUser />
						</Stack>
					</Box>
					<Stack direction='row' alignItems='center' alignContent='center'>
						<Text as='span' color='#FEBD2E'>
							<RiTimerFill />
						</Text>{' '}
						<Text as='span'> 3hr 30 min</Text>
					</Stack>
				</Flex>
			</Flex>
		</Flex>
	)
}
