import { Center, Container, Flex, Text, Box } from '@chakra-ui/react'
import { FaPizzaSlice, FaCocktail } from 'react-icons/fa'
import { GiCakeSlice, GiNoodles, GiFruitBowl } from 'react-icons/gi'
import SearchBar from './SearchBar'
import Card from './Card'
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
										Popular
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
									as='a'
									href='/category/pizza'
									my={2}
									mx={{ base: '0.3rem', sm: '1rem' }}
									width={{ sm: '60px', md: '180px' }}
									border={'1px solid #dee'}
									borderRadius={'30px'}
									boxShadow={'xl'}
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
											boxShadow={'2xl'}
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
									as='a'
									href='/category/dessert'
									my={2}
									mx={{ base: '0.3rem', sm: '1rem' }}
									width={{ sm: '60px', md: '180px' }}
									border={'1px solid #FEBD2E'}
									bg='#FEBD2E'
									boxShadow={'xl'}
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
									as='a'
									href='/category/noodles'
									my={2}
									mx={{ base: '0.3rem', sm: '1rem' }}
									width={{ sm: '60px', md: '180px' }}
									border={'1px solid #dee'}
									boxShadow={'xl'}
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
									as='a'
									href='/category/cocktails'
									my={2}
									mx={{ base: '0.3rem', sm: '1rem' }}
									width={{ sm: '60px', md: '180px' }}
									border={'1px solid #dee'}
									boxShadow={'xl'}
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
									as='a'
									href='/category/salad'
									my={2}
									mx={{ base: '0.3rem', sm: '1rem' }}
									width={{ sm: '60px', md: '180px' }}
									border={'1px solid #dee'}
									boxShadow={'xl'}
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
					<Flex direction={'column'} width={{ base: '100%' }}>
						<Box
							width={{ base: '100%', md: '60%' }}
							mt={2}
							alignSelf='flex-end'
						>
							<SearchBar />
						</Box>
						<Flex
							justifyContent='space-evenly'
							direction={'row'}
							my={5}
							wrap={'wrap'}
						>
							{/* <Card
								title='Chicken Soup'
								excerpt='The healthiest and tastiest soup you will ever try.'
								time='2 hr 10min'
								serving='3'
								image='https://images.unsplash.com/photo-1604152135912-04a022e23696?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
								slug='chicken-soup'
							/>
							<Card
								title='Oreo Shake'
								excerpt='Enjoy your summer with a chilled oreo shake. Sweet and tasty'
								time='40min'
								serving='1'
								image='https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80'
								slug='oreo-shake'
							/> */}
							<Card />
							<Card />
							<Card />
							<Card />
						</Flex>
						<Box textAlign='right'>
							<a href='/category/dessert' color='#242424'>
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
			</Container>
		</Box>
	)
}

export default Category
