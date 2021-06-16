import {
	Button,
	Center,
	Container,
	Flex,
	Spacer,
	Text,
	Box,
} from '@chakra-ui/react'
import { FaPizzaSlice, FaCocktail } from 'react-icons/fa'
import { GiCakeSlice, GiNoodles, GiFruitBowl } from 'react-icons/gi'
import Card from './Card'
import SearchBar from './SearchBar'
const Category = () => {
	return (
		<Box bg='gray.50' py={10}>
			<Container maxW='container.xl'>
				<Flex justifyContent='center' direction={{ base: 'column', md: 'row' }}>
					<Flex direction={'column'} minW='30%'>
						<Center mb={4}>
							<Box textAlign='center'>
								<Text as='span' fontSize='3xl' fontWeight='bold'>
									<Text as='span' color='#FEBD2E'>
										Recipe
									</Text>{' '}
									Categories
								</Text>
							</Box>
						</Center>
						<Flex
							direction={{ sm: 'row', md: 'column' }}
							justifyContent='center'
						>
							<Center>
								<Box
									as='button'
									my={2}
									mx={{ base: '0.3rem', sm: '1rem' }}
									width={{ sm: '60px', md: '180px' }}
									border={'1px solid #ccc'}
									borderRadius={'30px'}
									_hover={{
										bg: '#FEBD2E',
										borderColor: '#FEBD2E',
									}}
								>
									<Flex alignItems={'center'} p={2}>
										<Box
											color='#242424'
											borderRadius={'50%'}
											p={2}
											bg={'white'}
											flexBasis={3}
										>
											<FaPizzaSlice size='1.5rem' />
										</Box>
										<Box flexBasis={4}></Box>

										<Text
											fontSize={'lg'}
											flexBasis={8}
											fontWeight='bold'
											display={{ base: 'none', md: 'block' }}
										>
											Pizza
										</Text>
									</Flex>
								</Box>
							</Center>
							<Center>
								<Box
									as='button'
									my={2}
									mx={{ base: '0.3rem', sm: '1rem' }}
									width={{ sm: '60px', md: '180px' }}
									border={'1px solid #FEBD2E'}
									bg='#FEBD2E'
									borderRadius={'30px'}
									_hover={{
										borderColor: '#ccc',
									}}
								>
									<Flex alignItems={'center'} p={2}>
										<Box
											color='#242424'
											borderRadius={'50%'}
											p={2}
											bg={'white'}
											flexBasis={3}
										>
											<GiCakeSlice size='1.5rem' />
										</Box>
										<Box flexBasis={4}></Box>

										<Text
											fontSize={'lg'}
											flexBasis={8}
											fontWeight='bold'
											display={{ base: 'none', md: 'block' }}
										>
											Dessert
										</Text>
									</Flex>
								</Box>
							</Center>
							<Center>
								<Box
									as='button'
									my={2}
									mx={{ base: '0.3rem', sm: '1rem' }}
									width={{ sm: '60px', md: '180px' }}
									border={'1px solid #ccc'}
									borderRadius={'30px'}
									_hover={{
										bg: '#FEBD2E',
										borderColor: '#FEBD2E',
									}}
								>
									<Flex alignItems={'center'} p={2}>
										<Box
											color='#242424'
											borderRadius={'50%'}
											p={2}
											bg={'white'}
											flexBasis={3}
										>
											<GiNoodles size='1.5rem' />
										</Box>
										<Box flexBasis={4}></Box>

										<Text
											fontSize={'lg'}
											flexBasis={8}
											fontWeight='bold'
											display={{ base: 'none', md: 'block' }}
										>
											Noodles
										</Text>
									</Flex>
								</Box>
							</Center>
							<Center>
								<Box
									as='button'
									my={2}
									mx={{ base: '0.3rem', sm: '1rem' }}
									width={{ sm: '60px', md: '180px' }}
									border={'1px solid #ccc'}
									borderRadius={'30px'}
									_hover={{
										bg: '#FEBD2E',
										borderColor: '#FEBD2E',
									}}
								>
									<Flex alignItems={'center'} p={2}>
										<Box
											color='#242424'
											borderRadius={'50%'}
											p={2}
											bg={'white'}
											flexBasis={3}
										>
											<FaCocktail size='1.5rem' />
										</Box>
										<Box flexBasis={4}></Box>

										<Text
											fontSize={'lg'}
											flexBasis={8}
											fontWeight='bold'
											display={{ base: 'none', md: 'block' }}
										>
											Cocktails
										</Text>
									</Flex>
								</Box>
							</Center>
							<Center>
								<Box
									as='button'
									my={2}
									mx={{ base: '0.3rem', sm: '1rem' }}
									width={{ sm: '60px', md: '180px' }}
									border={'1px solid #ccc'}
									borderRadius={'30px'}
									_hover={{
										bg: '#FEBD2E',
										borderColor: '#FEBD2E',
									}}
								>
									<Flex alignItems={'center'} p={2}>
										<Box
											color='#242424'
											borderRadius={'50%'}
											p={2}
											bg={'white'}
											flexBasis={3}
										>
											<GiFruitBowl size='1.5rem' />
										</Box>
										<Box flexBasis={4}></Box>

										<Text
											fontSize={'lg'}
											flexBasis={8}
											fontWeight='bold'
											display={{ base: 'none', md: 'block' }}
										>
											Salads
										</Text>
									</Flex>
								</Box>
							</Center>
						</Flex>
					</Flex>
					<Flex direction={'column'} width={{ base: '100%', md: '60%' }}>
						<Box
							width={{ base: '100%', md: '60%' }}
							mt={2}
							alignSelf='flex-end'
						>
							<SearchBar />
						</Box>
						<Flex justifyContent='space-between' direction={'column'} my={5}>
							<Card />
							<Card />
							<Box textAlign='right'>
								<a href='#' color='#242424'>
									More Desserts....
								</a>
								<style jsx>{`
									a:hover {
										text-decoration: underline;
									}
								`}</style>
							</Box>
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Category
