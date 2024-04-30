import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel htmlFor='note-title'>Title</FormLabel>
          <Input id='note-title' placeholder='Enter note title' value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='note-content'>Content</FormLabel>
          <Textarea id='note-content' placeholder='Enter note content' value={content} onChange={(e) => setContent(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" onClick={() => console.log({ title, content })}>Create Note</Button>
      </VStack>
    </Box>
  );
};

export default CreateNote;