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
  
  export default function EmployeeCard({employeeVal}) {
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
            src={employeeVal && employeeVal.picture ? employeeVal.picture : "https://i.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o"}
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={employeeVal && employeeVal.picture ? employeeVal.picture : "https://i.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o"}
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {employeeVal.name}
              </Heading>
              <Text color={'gray.500'}>{employeeVal.professionalHeadline}</Text>
            </Stack>
  
            <Stack direction={'column'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>Summary</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                   {}
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