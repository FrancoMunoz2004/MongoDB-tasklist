import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

export default function AgregarTareas({handleSubmit, isOpen,onClose,handleOnchangue,msgError}) {
  return (
<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Agregar tarea</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <form onSubmit={handleSubmit}>
                  <Box
                    display={"flex"}
                    flexDirection="column"
                    justifyContent="center"
                    gap="10px"
                  >
                    <Box>
                      <label>
                        <Text>Nombre:</Text>
                      </label>
                      <Input
                        type="text"
                        name="tarea"
                        onChange={handleOnchangue}
                      />
                      {msgError ? (
                        <span style={{ color: "red" }}>
                          El nombre de la tarea debe tener mas de 3 caracteres
                        </span>
                      ) : null}
                    </Box>
                    <Box>
                      <label>
                        <Text>Descripcion:</Text>
                      </label>
                      <Textarea
                        name="descripcion"
                        placeholder="Here is a sample placeholder"
                        onChange={handleOnchangue}
                      />
                    </Box>
                    <Box display={"flex"} justifyContent="flex-end">
                      <Button colorScheme="facebook" type="submit">
                        Agregar
                      </Button>
                    </Box>
                  </Box>
                </form>
              </ModalBody>
            </ModalContent>
          </Modal>
  )
}
