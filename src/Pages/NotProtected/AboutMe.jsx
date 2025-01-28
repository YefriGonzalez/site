import { Footer, Header } from "@components";
import { paddingLateral } from "@global";
import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  const component = () => {
    return (
      <>
        <Box sx={{ marginTop: 15 }}>
          <Typography sx={{ color: "whitePage.main" }} variant="h2" fontWeight={"bold"}>
            Un poco sobre mi
          </Typography>
          <Typography color="primary" variant="h6" fontWeight={"bold"}>
            Quién soy y qué hago.
          </Typography>
        </Box>
      </>
    );
  };
  return (
    <>
      <Box>
        <Header
          viewDescription={false}
          paddingLateral={paddingLateral}
          Component={component}
        />
        <Box
          sx={{
            paddingLeft: paddingLateral,
            paddingRight: paddingLateral,
            marginTop: 10,
          }}
        >
          <Typography color="primary">Quien soy</Typography>

          <Typography color="primary" fontWeight={"bold"}>
            Soy Yefri, estudiante de Ingeniería en Ciencias y Sistemas, en un
            principio quise estudiar Ingeniería por qué me gustaban las
            matemáticas y la electrónica, pero terminé decidiéndome por
            Sistemas, y aquí estoy. 🇬🇹
          </Typography>

          <Typography color="primary" sx={{ marginTop: 7 }}>
            Lo que hago
          </Typography>
          <Typography color="primary" fontWeight={"bold"}>
            Actualmente sin empleo, decidí darme algún tiempo para descansar y
            en su momento poder enfocarme mas en la Universidad, ya que he
            logrado avanzar en la Universidad estoy en busca de un empleo remoto
            donde puede desarrollar mis habilidades. Cuando tengo tiempo libre
            me gusta ejecutar la Guitarra, batería y piano, me encanta viajar y
            poder conocer otras culturas.
          </Typography>

          <Typography color="primary" sx={{ marginTop: 7 }}>
            Lo que hice
          </Typography>
          <Typography color="primary" fontWeight={"bold"}>
            Trabaje en una empresa como Programador Fullstack, en esta empresa
            pude desarrollar muchas habilidades, entre ellas el UI/UX donde pude
            aprender un poco más sobre diseño, me encanto el tema financiero, ya
            que de la mano de la tecnología se pueden hacer cosas muy grandes y
            pude ser partícipe de muchas cosas grandes en esta empresa.
            <br />
            También por estudiar Ciberseguridad en la OEA (Organización de los
            Estados Americanos) termine conociendo algunos lugares y
            participando en algunas competencias entre ellas el OEA Cyber
            Challenge Chile 2023 en la UChile, una ciudad muy bonita que
            me encanto por lo diversa que es y su historia de independencia. En
            2022 participé en el OEA Cyber Challenge Ciudad de México 2022 en el
            Tecnológico de Monterrey Santa Fé, donde me sorprendió la magnitud
            de la ciudad y la importancia que se le da a la Ciberseguridad, tengo
            como anécdota que durante mi estadía en México pude ver la grabación
            de una Serie.
          </Typography>

          <Typography color="primary" fontWeight={"bold"} sx={{ marginTop: 7 }}>
            No dudes en comunicarte por correo electrónico. ¿Quieres ver dónde
            he trabajado? Consulta mi currículum o conéctate conmigo en
            LinkedIn.
          </Typography>
          <img src="/site/firma2.png" style={{width:'20rem',height:'12rem'}} />
        </Box>

       
      </Box>
      <Footer paddingLateral={25} />
    </>
  );
};

export default AboutMe;
