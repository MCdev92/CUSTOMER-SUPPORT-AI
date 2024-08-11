
import { Box, Stack } from '@mui/material';

import ChatLog from './ChatLog';
function ChatPage() {

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f0f0f0"
    >
      <Stack
        direction="column"
        width="600px"
        height="700px"
        border="1px solid black"
        p={2}
        spacing={3}
        bgcolor="white"
        borderRadius={10}
        boxShadow={3}
      >
      
          <ChatLog />
        
      </Stack>
    </Box>
  );
}
export default ChatPage