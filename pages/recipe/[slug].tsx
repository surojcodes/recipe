import {
	Flex,
	Box,
	Text,
	Heading,
	HStack,
	Container,
	SimpleGrid,
	Icon,
	chakra,
	Stack,
	Tag,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Card from '../../components/Card'
import { CheckIcon } from '@chakra-ui/icons'
import { StarIcon } from '@chakra-ui/icons'
import { RiTimerFill } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'

const SingleRecipe = () => {
	const router = useRouter()
	const { slug } = router.query

	return (
		<Container maxW={'90vw'} my={'5rem'}>
			<Flex>
				<Box flexBasis={{ base: '100%', md: '70%' }} px={5} mr={5}>
					<Heading
						as={'span'}
						position={'relative'}
						_after={{
							content: "''",
							width: 'full',
							height: '30%',
							position: 'absolute',
							bottom: 1,
							left: 0,
							bg: '#FEBD2E',
							zIndex: -1,
						}}
					>
						Indian Fish Curry
					</Heading>
					<HStack marginTop='2' spacing='2' display='flex' alignItems='center'>
						<Text fontWeight='medium'>Jane Doe</Text>
						<Text>—</Text>
						<Text>30 March, 2021</Text>
					</HStack>
					<Flex mt={3} alignItems='center'>
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
								<Text> 1 hr 20 min</Text>
							</Stack>
						</Box>
					</Flex>
					<Text my={'5'} textAlign='justify'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
						quod unde asperiores fugiat quo, suscipit minus doloribus recusandae
						ab quasi sed totam provident! Exercitationem iste quod hic sunt, ad
						commodi similique tenetur aliquid at enim dolore placeat id aperiam
						accusantium quibusdam voluptas impedit et fuga quo voluptatem
						asperiores ipsam. Deleniti, maxime repudiandae recusandae natus
						iusto veniam voluptatibus rem, consequatur aspernatur nemo voluptas
						magnam beatae! Optio rerum iure atque ratione officia molestiae
						recusandae veritatis, neque nemo maiores eveniet? Sint iusto eveniet
						quidem nam quis necessitatibus molestias suscipit harum id
						repellendus doloremque tempore unde deserunt temporibus, esse
						ducimus sapiente. Vitae, fuga quam!
					</Text>
					<Text textAlign='justify'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
						inventore ex in et veritatis culpasectetur adipisicing elit. Eveniet
						inventore ex in et veritatis culpasectetur adipisicing elit. Eveniet
						inventore ex in et veritatis culpa quo cupisectetur adipisicing
						elit. Eveniet inventore ex in et veritatis culpaditate adipisci
						dolore tempore.
					</Text>
					<Heading size='md' my={5}>
						Ingredients :
					</Heading>
					<SimpleGrid columns={{ base: 2, lg: 4 }} spacing={5}>
						<HStack align={'top'}>
							<Box color='#FEBD2E' px={2}>
								<Icon as={CheckIcon} />
							</Box>
							<Text fontWeight={600}>Ingredient 1</Text>
						</HStack>
						<HStack align={'top'}>
							<Box color='#FEBD2E' px={2}>
								<Icon as={CheckIcon} />
							</Box>
							<Text fontWeight={600}>Ingredient 2</Text>
						</HStack>
						<HStack align={'top'}>
							<Box color='#FEBD2E' px={2}>
								<Icon as={CheckIcon} />
							</Box>
							<Text fontWeight={600}>Ingredient 3</Text>
						</HStack>
						<HStack align={'top'}>
							<Box color='#FEBD2E' px={2}>
								<Icon as={CheckIcon} />
							</Box>
							<Text fontWeight={600}>Ingredient 4</Text>
						</HStack>
						<HStack align={'top'}>
							<Box color='#FEBD2E' px={2}>
								<Icon as={CheckIcon} />
							</Box>
							<Text fontWeight={600}>Ingredient 5</Text>
						</HStack>
						<HStack align={'top'}>
							<Box color='#FEBD2E' px={2}>
								<Icon as={CheckIcon} />
							</Box>
							<Text fontWeight={600}>Ingredient 6</Text>
						</HStack>
						<HStack align={'top'}>
							<Box color='#FEBD2E' px={2}>
								<Icon as={CheckIcon} />
							</Box>
							<Text fontWeight={600}>Ingredient 7</Text>
						</HStack>
					</SimpleGrid>
					<Heading size='md' my={5}>
						Recipe Tags :
					</Heading>
					<Tag mr={2} bg={'#FEBD2E'}>
						fish
					</Tag>
					<Tag mr={2} bg={'#FEBD2E'}>
						spicy
					</Tag>
					<Tag mr={2} bg={'#FEBD2E'}>
						seafood
					</Tag>
					<Tag mr={2} bg={'#FEBD2E'}>
						curry
					</Tag>
					<Tag mr={2} bg={'#FEBD2E'}>
						indian
					</Tag>
					<HStack>
						<Heading size='md' my={5}>
							Rating :
						</Heading>
						<HStack
							spacing={1}
							display='flex'
							alignItems='center'
							mt={2}
							as='span'
						>
							<StarIcon color={'#FEBD2E'} />
							<StarIcon color={'#FEBD2E'} />
							<StarIcon color={'#FEBD2E'} />
							<StarIcon color='gray.500' />
							<StarIcon color='gray.500' />
							<Text as='span'> &nbsp;(4,532 ratings)</Text>
						</HStack>
					</HStack>
				</Box>
				<Box
					flexBasis={{ base: '100%', md: '30%' }}
					display={{ base: 'none', xl: 'block' }}
				>
					<Heading size={'lg'} my={4} pb={5}>
						{' '}
						<Text as='span' color={'#FEBD2E'}>
							Latest
						</Text>{' '}
						Recipes
					</Heading>
					<Flex w='full' alignItems='center'>
						<Flex direction='column'>
							<Card />
							<Card />
							<Card />
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</Container>
	)
}

export default SingleRecipe
