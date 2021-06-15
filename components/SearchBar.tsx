import { Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
const SearchBar = () => {
	return (
		<InputGroup size='md'>
			<Input pr='4.5rem' type='text' placeholder='Search recipies...' />
			<InputRightElement width='4.5rem'>
				<Button
					fontWeight={'normal'}
					px={6}
					colorScheme={'red'}
					bg={'#FEBD2E'}
					_hover={{ bg: '#f1a401' }}
					leftIcon={<SearchIcon h={4} w={5} color={'white'} />}
				></Button>
			</InputRightElement>
			<style jsx>{`
				Input {
					background-color: 'black';
				}
			`}</style>
		</InputGroup>
	)
}

export default SearchBar
