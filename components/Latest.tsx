import { Flex, Box, Center, Container, Text } from '@chakra-ui/react'

import HomeLatestCard from './HomeLatestCard'
const Latest = () => {
	return (
		<>
			<Container maxW='container.xl' my={5}>
				<Center my={4}>
					<Box textAlign='center'>
						<Text as='span' fontSize='3xl' fontWeight='bold'>
							<Text as='span' color='#FEBD2E'>
								Latest
							</Text>{' '}
							Recipes
						</Text>
					</Box>
				</Center>

				<Center>
					<hr style={{ border: '3px solid #FEBD2E', width: '5%' }} />
				</Center>
				<Flex
					justifyContent='space-around'
					alignItems='center'
					wrap='wrap'
					mt={4}
				>
					<Box flexBasis={{ base: '90%', md: '40%', lg: '23%' }} my={4}>
						<HomeLatestCard
							category='Dessert'
							title='Honey Pancake'
							time='1 hr 10 min'
							image='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2028&q=80'
							slug='honey-pancake'
						/>
					</Box>
					<Box flexBasis={{ base: '90%', md: '40%', lg: '23%' }} my={4}>
						<HomeLatestCard
							category='Main Course'
							title='Pesto Pasta'
							time='1 hr 30 min'
							image='https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
							slug='pesto-pasta'
						/>
					</Box>
					<Box flexBasis={{ base: '90%', md: '40%', lg: '23%' }} my={4}>
						<HomeLatestCard
							category='Dessert'
							title='Strawberry Cake'
							time='2 hr 30 min'
							image='https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80'
							slug='strawberry-cake'
						/>
					</Box>
					<Box flexBasis={{ base: '90%', md: '40%', lg: '23%' }} my={4}>
						<HomeLatestCard
							category='Fish'
							title='Lemon Salmon'
							time='1 hr 5 mins'
							image='https://images.unsplash.com/photo-1601314002592-b8734bca6604?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80'
							slug='lemon-salmon'
						/>
					</Box>
				</Flex>
			</Container>
		</>
	)
}

export default Latest
