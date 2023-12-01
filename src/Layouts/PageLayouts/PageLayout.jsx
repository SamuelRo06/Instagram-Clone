import {Flex, Box} from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar/Sidebar';
import {useLocation} from 'react-router-dom';

const PageLayout = ({children}) => {
    const {pathname} = useLocation()
  return (
    <Flex>
        {/* sidebar on the left */}
        {pathname !== '/auth' ? (
            <Box w={{base:'70px', md:'240px'}}>
              <Sidebar />
            </Box>
        ) : null}
        {/* page content on the right */}
        <Box flex={{base:'calc(100%-70px)',md:'calc(100%-240px)'}}>
            {children}
        </Box>
    </Flex>
    )
}

export default PageLayout