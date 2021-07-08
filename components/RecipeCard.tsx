import {
	Box,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	LinkBox,
	LinkOverlay,
	HStack,
} from '@chakra-ui/react'
import { RiTimerFill } from 'react-icons/ri'
import { StarIcon } from '@chakra-ui/icons'

export default function LatestCard({ image, title, category, time, slug }) {
	return (
		<LinkBox>
			<Center py={12}>
				<Box
					role={'group'}
					p={6}
					maxW={'330px'}
					w={'full'}
					bg={useColorModeValue('white', 'gray.800')}
					boxShadow={'2xl'}
					rounded={'lg'}
					pos={'relative'}
					zIndex={1}
				>
					<Box
						rounded={'lg'}
						mt={-12}
						pos={'relative'}
						height={'230px'}
						_after={{
							transition: 'all .3s ease',
							content: '""',
							w: 'full',
							h: 'full',
							pos: 'absolute',
							top: 5,
							left: 0,
							backgroundImage: `url(${image})`,
							filter: 'blur(15px)',
							zIndex: -1,
						}}
						_groupHover={{
							_after: {
								filter: 'blur(20px)',
							},
						}}
					>
						<Image
							rounded={'lg'}
							height={230}
							width={282}
							objectFit={'cover'}
							src={image}
						/>
					</Box>
					<Stack pt={10} align={'center'}>
						<Text
							color={'gray.500'}
							fontSize={'sm'}
							textTransform={'uppercase'}
						>
							{category}
						</Text>

						<Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
							<LinkOverlay
								href={`/recipe/${slug}`}
								_hover={{ color: '#FEBD2E' }}
							>
								{title}
							</LinkOverlay>
						</Heading>
						<HStack spacing={1} display='flex' alignItems='center' mt={2}>
							<StarIcon color={'#FEBD2E'} />
							<StarIcon color={'#FEBD2E'} />
							<StarIcon color={'#FEBD2E'} />
							<StarIcon color='gray.500' />
							<StarIcon color='gray.500' />
						</HStack>
						<Stack direction={'row'} align={'center'}>
							<Text as='span' color='#FEBD2E'>
								<RiTimerFill />
							</Text>
							<Text as='span' fontWeight={600}>
								{time}
							</Text>
							{/* <Text textDecoration={'line-through'} color={'gray.600'}>
							$199
						</Text> */}
						</Stack>
					</Stack>
				</Box>
			</Center>
		</LinkBox>
	)
}
