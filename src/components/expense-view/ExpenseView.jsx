import { Box, Flex, Heading, Text } from "@chakra-ui/react";



export default function ExpenseView({type, data}){

  return <Box flex={1} w={'full'} bg={'white'} mt={'10'} p={'5'} pb={'4'} border={'1px solid'} borderColor={'grey.100'} borderRadius={'12'}>

    <Flex justifyContent={'space-between'} alignItems={'center'} >
      <Heading size={'md'} color={'blue.700'}>
        {type === 'expense' ? 'Expense' : 'Income'}
      </Heading>
    </Flex>

    {
      data.map(item => <>
        <Flex bg={type === 'expense' ? 'red.50' : 'blue.50'} mt={'4'} justifyContent={'space-between'} alignItems={'center'} border={'1px solid'} borderColor={type === 'expense' ? 'red.100' : 'blue.100'} p={'4'} borderRadius={'8'} >
          
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Text ml={'3'} fontWeight={'bold'} color={'grey.600'}>{item.description}</Text>
          </Flex>

          <Text>{item.amount}$</Text>
        </Flex>
      </>)
    }
  </Box>
}