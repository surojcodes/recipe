import {
	Container,
	Flex,
	Text,
	Heading,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import RecipeCard from '../../components/RecipeCard'
const category = () => {
	const router = useRouter()
	const { slug } = router.query
	return (
		<Container maxW={'6xl'} my={'3rem'}>
			<Heading
				lineHeight={1.1}
				fontWeight={600}
				fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
			>
				<Text
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
					{slug} Recipes
				</Text>
				<br />
				<Text as={'span'} color={'#FEBD2E'} fontSize='xl'></Text>
			</Heading>
			<Box textAlign='right'>
				<Breadcrumb fontWeight='medium' fontSize='sm'>
					<BreadcrumbItem>
						<BreadcrumbLink href='#'>Home</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href='#'>Category</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href='#'>{slug}</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</Box>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				wrap='wrap'
				mt={4}
			>
				<Box flexBasis={{ base: '90%', md: '40%', lg: '23%' }} my={4}>
					<RecipeCard
						category='Dessert'
						title='Honey Pancake'
						time='1 hr 10 min'
						image='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2028&q=80'
					/>
				</Box>
				<Box flexBasis={{ base: '90%', md: '40%', lg: '23%' }} my={4}>
					<RecipeCard
						category='Main Course'
						title='Pesto Pasta'
						time='1 hr 30 min'
						image='https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
					/>
				</Box>
				<Box flexBasis={{ base: '90%', md: '40%', lg: '23%' }} my={4}>
					<RecipeCard
						category='Dessert'
						title='Strawberry Cake'
						time='2 hr 30 min'
						image='https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80'
					/>
				</Box>
				<Box flexBasis={{ base: '90%', md: '40%', lg: '23%' }} my={4}>
					<RecipeCard
						category='Fish'
						title='Lemon Salmon'
						time='1 hr 5 mins'
						image='https://images.unsplash.com/photo-1601314002592-b8734bca6604?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80'
					/>
				</Box>
				<Box flexBasis={{ base: '90%', md: '40%', lg: '23%' }} my={4}>
					<RecipeCard
						category='Salad'
						title='Egg Salad'
						time='1 hr'
						image='https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80'
					/>
				</Box>
				<Box flexBasis={{ base: '90%', md: '40%', lg: '23%' }} my={4}>
					<RecipeCard
						category='Ramen'
						title='Soupy Ramen'
						time='3 hr 50 mins'
						image='https://images.unsplash.com/photo-1547928578-bca3e9c5a0ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHJlY2lwZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
					/>
				</Box>
				<Box flexBasis={{ base: '90%', md: '40%', lg: '23%' }} my={4}>
					<RecipeCard
						category='Kebeb'
						title='Pork Kebab'
						time='2 hr 9 mins'
						image='https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80'
					/>
				</Box>
				<Box flexBasis={{ base: '90%', md: '40%', lg: '23%' }} my={4}>
					<RecipeCard
						category='Dessert'
						title='Chocolate Bread'
						time='3 hr 5 mins'
						image='https://images.unsplash.com/photo-1606101205927-c0fed0edc7fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
					/>
				</Box>
			</Flex>
			<Box textAlign='right'>
				<Button
					fontWeight={'normal'}
					px={6}
					colorScheme={'red'}
					bg={'#FEBD2E'}
					boxShadow={'2xl'}
					_hover={{ bg: '#f1a401' }}
				>
					<Text as='span'>Next</Text>
				</Button>
			</Box>
		</Container>
	)
}

export default category
