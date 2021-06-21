import {
	Heading,
	Box,
	Image,
	Flex,
	Text,
	Stack,
	useColorModeValue,
	LinkOverlay,
	LinkBox,
} from '@chakra-ui/react'
import { RiTimerFill } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'
export default function Card({ title, excerpt, time, serving, image }) {
	return (
		<LinkBox>
			<Flex
				w={'full'}
				bg={useColorModeValue('white', 'gray.800')}
				boxShadow={'2xl'}
				rounded={'lg'}
				overflow={'visible'}
				h={'210px'}
				my={2}
				_hover={{
					bg: '#FdFdFd',
				}}
			>
				<Box>
					<Image h={'full'} minW={'230px'} src={image} objectFit={'cover'} />
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
						<LinkOverlay href='#' _hover={{ color: '#FEBD2E' }}>
							{title}
						</LinkOverlay>
					</Heading>

					<Text
						alignItems='justify'
						mt={2}
						color='#aaa'
						py={3}
						display={{ base: 'none', sm: 'block' }}
					>
						{excerpt}
					</Text>
					<Flex
						direction={{ base: 'column', sm: 'row' }}
						mt={{ base: '1.5rem', sm: '0.4rem' }}
					>
						<Box mb='0.2rem' justifySelf='start' mr={5}>
							{' '}
							<Stack direction='row' alignItems='center' alignContent='center'>
								<Text as='span' color='#FEBD2E'>
									<FaUser />
								</Text>
								<Box> {serving}</Box>
							</Stack>
						</Box>
						<Stack
							direction='row'
							alignItems='center'
							alignContent='center'
							justifySelf='flex-end'
						>
							<Text as='span' color='#FEBD2E'>
								<RiTimerFill />
							</Text>{' '}
							<Text as='span'> {time}</Text>
						</Stack>
					</Flex>
				</Flex>
			</Flex>
		</LinkBox>
	)
}
