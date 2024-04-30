import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react';

const CreateNote = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel htmlFor='note-title'>Title</FormLabel>
          <Input id='note-title' placeholder='Enter note title' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='note-content'>Content</FormLabel>
          <Textarea id='note-content' placeholder='Enter note content' />
        </FormControl>
        <Button colorScheme="blue">Create Note</Button>
      </VStack>
    </Box>
  );
};

export default CreateNote;