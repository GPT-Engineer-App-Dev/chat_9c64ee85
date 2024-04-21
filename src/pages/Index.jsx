import { Box, Flex, Input, Button, Text, VStack, HStack, Avatar, IconButton } from "@chakra-ui/react";
import { FaSearch, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const messages = [
    { id: 1, name: "John Doe", lastMessage: "Hey, how are you?", time: "15:30", avatar: "https://placehold.co/600x400" },
    { id: 2, name: "Jane Smith", lastMessage: "Let's meet tomorrow!", time: "14:22", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTM3MTE2ODB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Alice Johnson", lastMessage: "Did you send the files?", time: "13:08", avatar: "https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTM3MTE2ODB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 4, name: "Bob Brown", lastMessage: "Thank you!", time: "12:09", avatar: "https://placehold.co/600x400" },
  ];

  return (
    <Flex h="100vh">
      <VStack w="300px" p="4" borderRight="1px" borderColor="gray.200" spacing="4">
        <Input placeholder="Search" size="md" />
        <VStack divider={<Box borderBottom="1px" borderColor="gray.200" />} spacing="4" overflowY="auto" flex="1">
          {messages.map((message) => (
            <HStack key={message.id} w="100%" p="2" spacing="4" align="center">
              <Avatar name={message.name} src={message.avatar} />
              <VStack align="start" spacing="0">
                <Text fontWeight="bold">{message.name}</Text>
                <Text fontSize="sm">{message.lastMessage}</Text>
              </VStack>
              <Text ml="auto" fontSize="xs">
                {message.time}
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
      <VStack flex="1" p="4">
        <Text fontSize="2xl" fontWeight="bold" pb="4">
          Chat
        </Text>
        <VStack flex="1" w="100%" bg="gray.50" p="4" borderRadius="lg" spacing="4" overflowY="auto">
          {/* Messages will be dynamically loaded here */}
          <Text align="self-start">Hello!</Text>
          <Text align="self-end" bg="blue.100" p="2" borderRadius="lg">
            Hi there!
          </Text>
        </VStack>
        <HStack w="100%">
          <Input placeholder="Type a message" />
          <IconButton aria-label="Send message" icon={<FaPaperPlane />} />
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Index;
