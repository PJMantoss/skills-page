import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    Text
  } from '@chakra-ui/react';


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
                    <Button my='5' type='submit'>Search</Button>
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
                        <VStack>
                            <Text fontWeight={600}>Skills</Text>
                            {employeeStrengths.slice(0,8).map(strength => (
                                <Box 
                                    p='2' 
                                    bg='gray.900' 
                                    color='white' 
                                    borderRadius='8'
                                    _hover={{
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg',
                                      }}
                                >
                                    {strength.name}
                                </Box>
                                ))}
                        </VStack>
                    ))
                }
            </Box>
        </>
    )
}