import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'

export default function ConfirmarEliminar({isOpen, onClose, tasks, deleteTaks, indexConfirmEstado, updateEstado, onClick}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {indexConfirmEstado === 1 ?(<><ModalHeader>Editar estado de la tarea</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>¿Estas seguro de querer editar el estado?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button colorScheme={"facebook"} onClick={()=>{
               updateEstado(tasks._id, tasks.estado === false); 
                onClose();
                
            }}>Si</Button>
          </ModalFooter></>):
          indexConfirmEstado === 2 ?(<><ModalHeader>Eliminar tarea</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>¿Estas seguro de eliminar esta tarea?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button colorScheme={"red"} onClick={()=>{
                deleteTaks(tasks._id);
                onClose();
                
            }}>Si</Button>
          </ModalFooter></>):indexConfirmEstado === 3 ? (<><ModalHeader>Cerrar sesion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>¿Estas seguro de querer cerrar sesion?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button colorScheme={"red"} onClick={()=>{
                onClick()
                onClose();
                
            }}>Si</Button>
          </ModalFooter></>):null
          }
          
        </ModalContent>
      </Modal>
  )
}
