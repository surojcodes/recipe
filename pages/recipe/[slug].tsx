import {
	Flex,
	Box,
	Text,
	Heading,
	Stack,
	Container,
	HStack,
	useColorModeValue,
	chakra,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import SingleLatestCard from '../../components/SingleLatestCard'
const SingleRecipe = () => {
	const router = useRouter()
	const { slug } = router.query

	return (
		<Container maxW={'90vw'} my={'5rem'}>
			<Flex>
				<Box flexBasis={{ base: '100%', md: '60%' }}>
					<Heading>{slug}</Heading>
					<Stack></Stack>
				</Box>
				<Box
					flexBasis={{ base: '100%', md: '40%' }}
					display={{ base: 'none', md: 'block' }}
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
							<SingleLatestCard />
							<SingleLatestCard />
							<SingleLatestCard />
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</Container>
	)
}

export default SingleRecipe
