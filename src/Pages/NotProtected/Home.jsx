import { Contact, Experience, Footer, Header } from "@components";
import { paddingLateral } from "@global";
import { Box } from "@mui/material";
import { init } from "@services";
import { useEffect } from "react";

const Home = () => {

  useEffect(()=>{
    const infoBrowser = {
      userAgent: navigator.userAgent,
      language: navigator.language,     
      platform: navigator.platform,     
      vendor: navigator.vendor,        
      hardwareConcurrency: navigator.hardwareConcurrency, 
      deviceMemory: navigator.deviceMemory, 
      screenResolution: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, 
    };
    init(infoBrowser).then(()=>{})
  });
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
