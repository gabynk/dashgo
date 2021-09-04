import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Gabriele Nakassima</Text>
                    <Text color="gray.300" fontSize="small">gaby.naka@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Gabriele Nakassima" src="https://github.com/gabynk.png" />
        </Flex>
    )
}