import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo";
import { useEffect, useState } from "react";
import { api } from "../api";
import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";

interface UserData {
    id: string,
    email: string,
    password: string,
    name: string,
    balance: string,
}

const Conta = () => {
    const [userData, setUserData ] = useState<null | UserData>()
    const actualDate = new Date();
    const { id } = useParams();
    const navigate = useNavigate();
    

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData  = await api
            setUserData(data)
        }

        getData()
    }, []);


    if (userData && id !== userData.id) {
        navigate('/');
    }

    return (
        <Layout>
            <Center>
                <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                    {
                        userData === null || userData === undefined ? 
                        ( <Center><Spinner thickness='4px' speed='0.65s' emptyColor='white' color='blue.500' size='x-large' /></Center>)
                            : 
                        (
                        <>
                                <CardInfo salution={`Bem vindo ao App ${userData?.name}`} dateTime={`${actualDate.toDateString()}`}/>
                                <CardInfo salution={`Saldo`} balanceWallet={`R$${userData?.balance}`} />
                        </>
                        )

                    }
                </SimpleGrid>
            </Center>
        </Layout>
    );
}

export default Conta;