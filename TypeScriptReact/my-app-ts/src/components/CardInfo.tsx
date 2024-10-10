import { Box, Center, Text } from "@chakra-ui/react";

interface ICardInfo {
    salution?: string
    balanceWallet?: string
    dateTime?: string
}

const CardInfo = ({ salution, balanceWallet, dateTime }: ICardInfo) => {

    return (
            <Box
                backgroundColor="#FFF"
                minHeight="120px"
                borderRadius="25px"
                padding="15px"
            >
                <Center>
                    <Text fontSize='2x1' fontWeight='bold'>{ salution }</Text>
                </Center>
                <Center>
                    <Text fontSize='x1'>{ balanceWallet }</Text>
                </Center>
                <Center>
                    <p>{ dateTime }</p>
                </Center>
            </Box>
    );
}

export default CardInfo;