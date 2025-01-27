import { Footer, Header } from "@components";
import { paddingLateral } from "@global";
import { Box, Card, Typography } from "@mui/material";

const Stack = () => {
  const component = () => {
    return (
      <Box sx={{ marginTop: 15 }}>
        <Typography
          variant="h3"
          sx={{ color: "whitePage.main" }}
          fontWeight={"bold"}
        >
          Tecnologias
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "whitePage.main" }}
          fontWeight={"bold"}
        >
          Las herramientas de desarrollo, aplicaciones y juegos que uso.
        </Typography>
      </Box>
    );
  };

  const devs = [
    {
      name: "Angular",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
    },
    {
      name: "React",
      icon: "https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png",
    },
    {
      name: "NestJS",
      icon: "https://nestjs.com/img/logo-small.svg",
    },
    {
      name: "NodeJS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "SQL Server",
      icon: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
    },
    {
      name: "MySQL",
      icon: "https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png",
    },
    {
      name: "Java",
      icon: "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png",
    },
    {
      name: "Firebase",
      icon: "https://brandeps.com/logo-download/F/Firebase-logo-02.png",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp",
    },
    {
      name: "AWS",
      icon: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
    },
    {
      name: "Azure",
      icon: "https://download.logo.wine/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.png",
    },

    {
      name: "TypeScript",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-typescript-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-7-pack-logos-icons-2945272.png?f=webp&w=256",
    },
    {
      name: "Docker",
      icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
    },
    {
      name: "C#",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-csharp-1175240.png?f=webp",
    },
    {
      name: "Robot Framework",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Robot-framework-logo.png",
    },
    {
      name: "Python",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256",
    },
    {
      name: "Ionic",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZDiTwmXBPXiDBrAyqYpb4tW8SWeZwrgJZQ&s",
    },
    {
      name: "PHP",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
    },
    {
      name: "Laravel",
      icon: "https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png",
    },
    {
      name: "Git",
      icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      name: "Ubuntu",
      icon: "https://seeklogo.com/images/U/ubuntu-logo-8B7C9ED4AD-seeklogo.com.png",
    },
    {
      name: "Kali",
      icon: "https://seeklogo.com/images/K/kali-linux-logo-0EB0B3A81B-seeklogo.com.png",
    },
    {
      name: "Boostrap",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png",
    },
  ];

  const apps = [
    {
      name: "Notion",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-notion-logo-icon-download-in-svg-png-gif-file-formats--productivity-application-brand-apps-pack-logos-icons-8630396.png",
    },
    {
      name: "Discord",
      icon: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    },
    {
      name: "Spotify",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png",
    },

    {
      name: "Twitch",
      icon: "https://static.vecteezy.com/system/resources/previews/023/986/581/non_2x/twitch-logo-twitch-logo-transparent-twitch-icon-transparent-free-free-png.png",
    },
    {
      name: "Slack",
      icon: "https://seeklogo.com/images/S/slack-logo-50A32CEFAA-seeklogo.com.png",
    },
    {
      name: "Hevy",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUP4GvS2RephsChihcmdrktucSQNIZ3XwBQ&s",
    },
    {
      name: "ChatGPT",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
    },
    {
      name: "Netflix",
      icon: "https://static.vecteezy.com/system/resources/previews/019/956/195/non_2x/netflix-transparent-netflix-free-free-png.png",
    },
  ];

  const games = [
    {
      name: "Halo ",
      icon: "https://logos-world.net/wp-content/uploads/2020/12/Halo-Logo.png",
    },
    {
      name: "FC 2025",
      icon: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1499,h_843,x_0,y_0/c_fill,w_1200,ar_1:1,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/esports_illustrated/01j1wg531pgeh02nkckz.jpg",
    },
    {
      name: "Minecraft",
      icon: "https://images.seeklogo.com/logo-png/53/2/minecraft-logo-png_seeklogo-534116.png",
    },
    {
      name: "Fall Guys",
      icon: "https://cdn2.steamgriddb.com/logo_thumb/27df6a4f2d57c438e88f3918de84e2f6.png",
    },
    {
      name: "Call of Duty",
      icon: "https://logos-world.net/wp-content/uploads/2021/03/Call-of-Duty-Logo-2019.png",
    },
    {
      name: "Clash Royale",
      icon: "https://www.pngplay.com/wp-content/uploads/10/Clash-Royale-Logo-PNG-HD-Photos.png",
    },
  ];
  return (
    <>
      <Header
        paddingLateral={paddingLateral}
        viewDescription={false}
        Component={component}
      />
      <Box
        sx={{
          paddingLeft: paddingLateral,
          paddingRight: paddingLateral,
          paddingTop: 7,
        }}
      >
        <Box>
          <Typography variant="h4" color="primary" fontWeight={"bold"}>
            Desarrollo
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              flexDirection: {
                sm: "column",
                xs: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
          >
            {devs.map((item) => {
              return (
                <Card
                  sx={{
                    padding: 2,
                    width: {
                      lg: "30%",
                      xl: "30%",
                      md: "48%",
                      sm: "100%",
                      xs: "100%",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <img src={item.icon} height={200} width={200} />
                  <Typography fontWeight={"bold"}>{item.name}</Typography>
                </Card>
              );
            })}
          </Box>
        </Box>
        <br />
        <Box>
          <Typography variant="h4" color="primary" fontWeight={"bold"}>
            Apps
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              flexDirection: {
                sm: "column",
                xs: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
          >
            {apps.map((item) => {
              return (
                <Card
                  sx={{
                    padding: 2,
                    width: {
                      lg: "30%",
                      xl: "30%",
                      md: "48%",
                      sm: "100%",
                      xs: "100%",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <img src={item.icon} height={200} width={200} />
                  <Typography fontWeight={"bold"}>{item.name}</Typography>
                </Card>
              );
            })}
          </Box>
        </Box>
        <br />
        <Box>
          <Typography variant="h4" color="primary" fontWeight={"bold"}>
            Juegos
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              flexDirection: {
                sm: "column",
                xs: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
          >
            {games.map((item) => {
              return (
                <Card
                  sx={{
                    padding: 2,
                    width: {
                      lg: "30%",
                      xl: "30%",
                      md: "48%",
                      sm: "100%",
                      xs: "100%",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <img src={item.icon} height={200} width={200} />
                  <Typography fontWeight={"bold"}>{item.name}</Typography>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Footer paddingLateral={paddingLateral} viewContact={false} />
    </>
  );
};

export default Stack;
