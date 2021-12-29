import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    StackDivider,
    useMediaQuery
  } from '@chakra-ui/react';
  import { VStack, Stack, Flex, Spacer } from "@chakra-ui/layout";


export default function SearchEmployees(){
    //state for input query
    const [query, setQuery] = useState('');
    //state for employees
    const [employees, setEmployees] = useState({});

    let employee = Object.values(employees);

    console.log(employee)

    const searchEmployee = async (e) => {
        e.preventDefault();
  
        //const query = 'torrenegra' <EmployeeCard employee={employee} key={employee[0].id} />

        const url = `https://boiling-escarpment-68489.herokuapp.com/https://torre.bio/api/bios/${query}`;

            try{
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
                setEmployees(employee = data);
            }catch(err){
                console.error(err);
            }        
    }

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return(
        <>
            <form onSubmit={searchEmployee}>
                <FormControl
                    margin=' 0 auto' 
                    display='flex' 
                    flexDirection='column' 
                    justifyItems='center' 
                    alignItems='center' 
                    width='50%'
                    mt='30'
                    isRequired
                >
                    <FormLabel htmlFor='query'>Type Employee Username</FormLabel>
                    <Input 
                        type='text' 
                        placeholder='e.g torrenegra' 
                        name='query' 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        required
                    />
                    <Button 
                        my='5' 
                        type='submit' 
                        bg={'gray.900'} 
                        color={'white'}
                        _hover={{
                            bg: 'lime',
                            color: 'black',
                          }}
                    >
                        Search
                    </Button>
                </FormControl>
            </form>
            <Box>
                {
                    employee.map((employeeVal, index) => (
                        index === 0 && <EmployeeCard employeeVal={employeeVal} key={index} />
                    ))
                }
                {
                    employee.map((employeeStrengths, index) => (
                        index === 2 && 
                        <Stack
                            divider={<StackDivider borderColor='gray.200' />}
                            spacing={4}
                            align={isNotSmallerScreen ? "center" : "stretch"}
                            justify="center"
                            m="auto"
                            width={isNotSmallerScreen ? "600px" : "90%"}
                        >
                            <Text fontWeight={600}>Skills</Text>
                            <Flex
                                direction={isNotSmallerScreen ? 'row' : "column"}
                                justify="center"
                                align='center'
                                wrap='wrap'
                            >
                            {employeeStrengths.slice(0,10).map((strength, index) => (
                                <Box 
                                    p='2' 
                                    m='2'
                                    bg='gray.900' 
                                    color='white' 
                                    borderRadius='8'
                                    _hover={{
                                        transform: 'translateX(-2px)',
                                        boxShadow: 'lg',
                                      }}
                                      key={index}
                                >
                                    {strength.name}
                                </Box>
                                ))}
                                </Flex>
                        </Stack>
                    ))
                }
            </Box>
        </>
    )
}