import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup } from "@chakra-ui/react";


export default function TransactionForm({ onClose, isOpen }){

  return <Modal isOpen={isOpen} onClose={onClose} >
    <form>
      <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton/>
            <ModalBody>
              <FormControl>
                <FormLabel>Enter Description</FormLabel>
                <Input placeholder="Enter Transaction Description" name="description" type="text"/>
              </FormControl>
              <FormControl mt={'10px'}>
                <FormLabel>Enter Ampunt</FormLabel>
                <Input placeholder="Enter Transaction Amount" name="amount" type="number"/>
              </FormControl>
              <RadioGroup mt={'5'}>
                <Radio value="income" colorScheme="blue" name="type" mr={'30px'}>Income</Radio>
                <Radio value="expense" colorScheme="red" name="type">Expense</Radio>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} mr={'4'}>Cancel</Button>
              <Button>Add</Button>
            </ModalFooter>
          
        </ModalContent>
      
    </form>
  </Modal>
}