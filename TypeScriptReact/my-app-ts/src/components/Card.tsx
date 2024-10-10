import { Box, Center, Input } from "@chakra-ui/react";
import DButton from "./DButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Card = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    return (
        <Box backgroundColor='#FFF' borderRadius="25px" padding="15px">
            <Center>
                <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <Input placeholder="senha" />
            <Center>
                <DButton
                    onClick={() => navigate('/conta')}
                />
            </Center>
        </Box>
    );
}

export default Card;