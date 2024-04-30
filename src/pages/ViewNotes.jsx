import { Box, List, ListItem, ListIcon, Heading } from '@chakra-ui/react';
import { FaRegStickyNote } from 'react-icons/fa';

const ViewNotes = () => {
  // Dummy data for notes
  const notes = [
    { id: 1, title: 'First Note', content: 'This is the first note' },
    { id: 2, title: 'Second Note', content: 'This is the second note' }
  ];

  return (
    <Box p={4}>
      <Heading mb={4}>All Notes</Heading>
      <List spacing={3}>
        {notes.map(note => (
          <ListItem key={note.id}>
            <ListIcon as={FaRegStickyNote} color="green.500" />
            {note.title}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ViewNotes;