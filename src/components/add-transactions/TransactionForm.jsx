import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, useStatStyles } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";


export default function TransactionForm({ onClose, isOpen }){

  const [inputError, setInputError] = useState(false);

  const {formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext);

  function handleFormChange(e){

    const regex = /.+/;
    if (regex.test(e.value)) {
      setInputError(false)
      // console.log("Input contains at least one character!");
    } else {
      setInputError(true)
      // console.log("Input is empty.");
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    handleFormSubmit(formData)
  }

  return <Modal isOpen={isOpen} onClose={onClose} >
    <form onSubmit={handleSubmit}>
      <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton/>
            <ModalBody>
              <FormControl>
                <FormLabel>Enter Description</FormLabel>
                <Input placeholder="Enter Transaction Description" name="description" type="text" onChange={(e)=>handleFormChange(e)}/>
              </FormControl>
              <FormControl mt={'10px'}>
                <FormLabel>Enter Ampunt</FormLabel>
                <Input placeholder="Enter Transaction Amount" name="amount" type="number" onChange={(e)=>handleFormChange(e)}/>
              </FormControl>
              <RadioGroup mt={'5'} value={value} onChange={setValue} >
                <Radio checked={formData.type === 'income'} value='income'colorScheme="blue" name="type" mr={'30px'} onChange={handleFormChange} >Income</Radio>
                <Radio checked={formData.type === 'expense'} value='expense' colorScheme="red" name="type" onChange={handleFormChange}>Expense</Radio>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} mr={'4'}>Cancel</Button>
              <Button onClick={onClose} type="submit" disabled={inputError} >Add</Button>
            </ModalFooter>
          
        </ModalContent>
      
    </form>
  </Modal>
}