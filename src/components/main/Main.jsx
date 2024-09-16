import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary/Summary";
import ExpenseView from "../expense-view/ExpenseView";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";



export default function Main(){

  const {isOpen, onOpen, onClose} = useDisclosure();
  const { totalExpense, setTotalExpense, totalIncome, setTotalIncome, allTransactions} = useContext(GlobalContext);

  useEffect(()=>{

    let income = 0;
    let expense = 0;

    allTransactions.forEach(item => {
      item.type === 'income' ? income = income + parseFloat(item.amount) : expense = expense + parseFloat(item.amount);

      setTotalExpense(expense);
      setTotalIncome(income);
      console.log(income);
      
    });

  }, [allTransactions])

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
    <Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} onClose={onClose}/>

    <Flex w={'full'} alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column','column','column','row', 'row']} >
      <ExpenseView data={allTransactions.filter(item => item.type ==='expense')}  type={'expense'} />
      <ExpenseView data={allTransactions.filter(item => item.type ==='income')}  type={'income'}/>
    </Flex>
  </Flex>
}