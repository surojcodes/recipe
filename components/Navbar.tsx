import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react'
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from '@chakra-ui/icons'

export default function NavBar() {
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Box>
			<Flex
				bg='white'
				color='#242424'
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor='gray.200'
				align={'center'}
			>
				<Flex
					flex={{ base: 1, md: 'auto' }}
					ml={{ base: -2 }}
					display={{ base: 'flex', md: 'none' }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Text
						textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
						fontFamily={'heading'}
						color='#FEBD2E'
						fontWeight='bold'
						fontSize='1.2rem'
					>
						Recipe Book
					</Text>

					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack
					flex={{ base: 1, md: 0 }}
					justify={'flex-end'}
					direction={'row'}
					spacing={6}
				>
					<Button
						as={'a'}
						fontSize={'sm'}
						fontWeight={400}
						variant={'link'}
						href={'/login'}
						color='#242424'
					>
						Sign In
					</Button>
					<Button
						display={{ base: 'none', md: 'inline-flex' }}
						fontSize={'sm'}
						fontWeight={600}
						color={'white'}
						bg='#FEBD2E'
						href={'#'}
						boxShadow={'xl'}
						_hover={{
							bg: '#242424',
						}}
					>
						Sign Up
					</Button>
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	)
}

const DesktopNav = () => {
	return (
		<Stack direction={'row'} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? '#'}
								fontSize={'sm'}
								fontWeight={500}
								color='#242424'
								_hover={{
									textDecoration: 'none',
									color: useColorModeValue('gray.800', 'white'),
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={'xl'}
								bg={useColorModeValue('white', 'gray.800')}
								p={4}
								rounded={'xl'}
								minW={'sm'}
							>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	)
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
	return (
		<Link
			href={href}
			role={'group'}
			display={'block'}
			p={2}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('#FEBD2E', 'gray.900') }}
		>
			<Stack direction={'row'} align={'center'}>
				<Box>
					<Text
						transition={'all .3s ease'}
						_groupHover={{ color: '#242424' }}
						fontWeight={500}
					>
						{label}
					</Text>
					<Text fontSize={'sm'}>{subLabel}</Text>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}
				>
					<Icon color={'#242424'} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	)
}

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue('white', 'gray.800')}
			p={4}
			display={{ md: 'none' }}
		>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	)
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}
			>
				<Text
					fontWeight={600}
					color={useColorModeValue('#242424', 'gray.200')}
					_hover={{
						color: '#FEBD2E',
					}}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={'all .25s ease-in-out'}
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={6}
						h={6}
						color='#242424'
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={'solid'}
					borderColor={useColorModeValue('#242424', 'gray.700')}
					align={'start'}
				>
					{children &&
						children.map((child) => (
							<Link
								key={child.label}
								py={2}
								href={child.href}
								_hover={{
									textDecoration: 'none',
									fontWeight: 'bold',
								}}
							>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	)
}

interface NavItem {
	label: string
	subLabel?: string
	children?: Array<NavItem>
	href?: string
}

const NAV_ITEMS: Array<NavItem> = [
	// {
	// 	label: 'Shop',
	// 	children: [
	// 		{
	// 			label: 'Bakery',
	// 			subLabel: 'Get fluffy goodness',
	// 			href: '#',
	// 		},
	// 		{
	// 			label: 'Lunch',
	// 			subLabel: 'Homemade lunch for you',
	// 			href: '#',
	// 		},
	// 	],
	// },
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Categories',
		children: [
			{
				label: 'Dessert',
				subLabel: 'Sweet and soft joy',
				href: '#',
			},
			{
				label: 'Pizzas',
				subLabel: 'Extra cheesy, crusty godness',
				href: '#',
			},
		],
	},
	{
		label: 'Contact',
		href: '/contact',
	},
	{
		label: 'About',
		href: '/about',
	},
]
