import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'

export default function Register() {
	return (
		<Flex minH={'65vh'} align={'center'} justify={'center'}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Sign up</Heading>
					<Text fontSize={'lg'} color={'gray.600'}>
						to enjoy all of our cool <Link color={'#FEBD2E'}>features</Link> ✌️
					</Text>
				</Stack>
				<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}
				>
					<Stack spacing={4}>
						<FormControl id='email'>
							<FormLabel>Full Name</FormLabel>
							<Input type='text' />
						</FormControl>
						<FormControl id='email'>
							<FormLabel>Email address</FormLabel>
							<Input type='email' />
						</FormControl>
						<FormControl id='password'>
							<FormLabel>Password</FormLabel>
							<Input type='password' />
						</FormControl>
						<FormControl id='password'>
							<FormLabel>Confirm Password</FormLabel>
							<Input type='password' />
						</FormControl>
						<Stack spacing={10}>
							<Stack
								direction={{ base: 'column', sm: 'row' }}
								align={'start'}
								justify={'space-between'}
							>
								<Link>
									By signing up, you agree to our{' '}
									<Text as='span' color={'#FEBD2E'}>
										{' '}
										Terms of service
									</Text>
								</Link>
							</Stack>
							<Button
								bg={'#FEBD2E'}
								color={'white'}
								_hover={{
									bg: '#f1a401',
								}}
							>
								Sign in
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	)
}
