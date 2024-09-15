import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary/Summary";
import ExpenseView from "../expense-view/ExpenseView";



export default function Main(){

  const {isOpen, onOpen, onClose} = useDisclosure();

  return <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
    <Flex textAlign={'center'} justifyContent={'space-between'} mt={'12'} mb={'3'}>
      <Heading color={'blue.400'} display={['none', 'block', 'block', 'block', 'block']}>
        Expense Tracker
      </Heading>
      <Flex alignItems={'center'}>
        <Button onClick={onOpen} bg={'blue.300'} color={'black'} ml={'4'}>
          Add new transaction
        </Button>
      </Flex>
    </Flex>
    <Summary isOpen={isOpen} onClose={onClose}/>

    <Flex w={'full'} alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column','column','column','row', 'row']} >
      <ExpenseView/>
      <ExpenseView/>
    </Flex>
  </Flex>
}