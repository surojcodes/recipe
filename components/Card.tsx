import {
	Flex,
	Box,
	chakra,
	useColorModeValue,
	HStack,
	Text,
	Stack,
	LinkBox,
	LinkOverlay,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { RiTimerFill } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'

const SingleLatestCard = () => {
	return (
		<LinkBox>
			<Flex
				maxW='md'
				mx='auto'
				bg={useColorModeValue('white', 'gray.800')}
				shadow='lg'
				rounded='lg'
				overflow='hidden'
				my={3}
			>
				<Box
					w={1 / 3}
					bgSize='cover'
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80')",
					}}
				></Box>

				<Box w={2 / 3} p={{ base: 4, md: 4 }}>
					<chakra.h1
						fontSize='2xl'
						fontWeight='bold'
						color={useColorModeValue('gray.800', 'white')}
					>
						<LinkOverlay
							href={`/recipe/fish-curry`}
							_hover={{ color: '#FEBD2E' }}
						>
							Fish Curry
						</LinkOverlay>
					</chakra.h1>

					<chakra.p
						mt={2}
						fontSize='sm'
						color={useColorModeValue('gray.600', 'gray.400')}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
					</chakra.p>

					<HStack spacing={1} display='flex' alignItems='center' mt={2}>
						<StarIcon color={'#FEBD2E'} />
						<StarIcon color={'#FEBD2E'} />
						<StarIcon color={'#FEBD2E'} />
						<StarIcon color='gray.500' />
						<StarIcon color='gray.500' />
					</HStack>

					<Flex mt={3} alignItems='center' justifyContent='space-between'>
						<chakra.h1 fontWeight='bold'>
							<Stack direction='row' alignItems='center' alignContent='center'>
								<Text as='span' color='#FEBD2E'>
									<FaUser />
								</Text>
								<Box> 3 </Box>
							</Stack>
						</chakra.h1>
						<Box
							px={2}
							py={1}
							bg='white'
							fontSize='xs'
							color='gray.900'
							fontWeight='bold'
							rounded='lg'
						>
							<Stack
								direction='row'
								alignItems='center'
								alignContent='center'
								justifySelf='flex-end'
							>
								<Text as='span' color='#FEBD2E'>
									<RiTimerFill />
								</Text>{' '}
								<Text as='span'> 1 hr 20 min</Text>
							</Stack>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</LinkBox>
	)
}

export default SingleLatestCard
