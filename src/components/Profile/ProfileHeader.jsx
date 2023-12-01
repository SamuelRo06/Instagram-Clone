import {Avatar, AvatarGroup, Flex, VStack, Text, Button} from '@chakra-ui/react';

const ProfileHeader = () => {
  return (
        <Flex gap={{base:4, sm:10}} py={10} direction={{base:'column', sm:'row'}}>
            <AvatarGroup
                size={{base:'xl', md:'2xl'}}
                justifySelf={'center'}
                alignSelf={'flex-start'}
                mx={'auto'}
            >
                <Avatar name='Samuel Rodriguez' src='/profilepic.png' alt='profile picture'/> 
            </AvatarGroup>
        <VStack alignItems={'start'} gap={2} mx='auto' flex={1}>
            <Flex gap={4} direction={{base:'column', sm:'row'}} 
            justifyContent={{base:'center', sm:'flex-start'}}
            alignItems={'center'}
            w='full'
            >
                <Text fontSize={{base:'sm', md:'lg'}}>
                    samuel_rove
                </Text>

            <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
                <Button bg={'white'} color='black' _hover={{bg:'whiteAlpha.800'}} size={{base:'xs', md:'sm'}}>
                    Edit Profile
                </Button>
            </Flex>
         </Flex>

        <Flex alignItems={'center'} gap={{base:2, sm:4}}>
            <Text fontSize={{base:'xs', md:'sm'}}>
                <Text as={'span'} fontWeight={'bold'} mr={1}>4</Text>
                Posts
            </Text>
            <Text fontSize={{base:'xs', md:'sm'}}>
                <Text as={'span'} fontWeight={'bold'} mr={1}>149</Text>
                Followers
            </Text>
            <Text fontSize={{base:'xs', md:'sm'}}>
                <Text as={'span'} fontWeight={'bold'} mr={1}>175</Text>
                Following
            </Text>        
        </Flex>
            <Flex alignItems={'center'} gap={4}>
                <Text fontSize={'sm'} fontWeight={'bold'}>Samuel Rodriguez</Text>
            </Flex>
            <Text fontSize={'sm'}>Full Stack Developer</Text>
        </VStack>
        </Flex>
    )
}

export default ProfileHeader