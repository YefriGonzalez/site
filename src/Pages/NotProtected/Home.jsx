import { Contact, Experience, Footer, Header } from "@components";
import { paddingLateral } from "@global";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Header paddingLateral={paddingLateral} />
      <Experience paddingLateral={paddingLateral} />
      <Contact paddingLateral={paddingLateral} />
      <Footer paddingLateral={paddingLateral} />
    </Box>
  );
};

export default Home;
