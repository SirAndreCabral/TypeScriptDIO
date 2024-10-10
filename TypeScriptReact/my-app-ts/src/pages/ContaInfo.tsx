import { Center, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const ContaInfo = () => {
    return (
        <>
            <Layout>
                <Center>
                    <Link to='/conta/1'>
                        <Text color="white" fontSize='x-large' >
                            Informações da Conta
                        </Text>
                    </Link>
                </Center>
            </Layout>
        </>
    );
}

export default ContaInfo;