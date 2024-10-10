import { Box } from "@chakra-ui/react";
import Header from "./Header";

const Layout = ({ children }: any) => {
    return (
        <Box backgroundColor="#003" height="100vh">
        <Header />
            { children } 
        </Box>
    );
}

export default Layout;