import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button
  } from '@chakra-ui/react';


export default function SearchEmployees(){
    //state for input query
    const [query, setQuery] = useState('');
    //state for employees
    const [employees, setEmployees] = useState({});

    const [isLoading, setIsLoading] = useState(false);


    const searchEmployee = async (e) => {
        e.preventDefault();
  
        //const query = 'torrenegra'

        const url = `https://boiling-escarpment-68489.herokuapp.com/https://torre.bio/api/bios/${query}`;

            try{
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
                setEmployees(data);
                setIsLoading(false);
            }catch(err){
                console.error(err);
            }
        
    }

    let employee = Object.keys(employees).map(key => {
        return employees[key];
    })

    console.log(employee)

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
                {employee[0].name}
                {<img src={'https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_bd307a3ec329e10a2cff8fb87480823da114f8f4.jpg'} />}
                {}
            </Box>
        </>
    )
}