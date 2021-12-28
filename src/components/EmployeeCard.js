import React from 'react';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function EmployeeCard({employee}) {
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_bd307a3ec329e10a2cff8fb87480823da114f8f4.jpg'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_bd307a3ec329e10a2cff8fb87480823da114f8f4.jpg'
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {employee[0].name}
              </Heading>
              <Text color={'gray.500'}>{employee[0].professionalHeadline}</Text>
            </Stack>
  
            <Stack direction={'column'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>Summary</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                   {employee[0].summaryOfBio}
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>Skills</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                   {employee[2].slice(0, 5)}
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Learn More
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }