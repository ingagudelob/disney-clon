import React from "react";
import {
  Link,
  List,
  Box,
  ListItem,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import {
  Twitter,
  Instagram,
  Facebook,
  Phone,
  LocationOn,
  Mail,
} from "@mui/icons-material";
import logo from "../../assets/images/logo.svg";
import styled from "styled-components";

const Footer = () => {
  // const [height, setHeight] = useState(0);
  // const ref = useRef(null);

  // useEffect(() => {
  //     setHeight(ref.current.offsetHeight)
  // }, []);
  // console.log(height);

  return (
    <Container>
      <Grid container direction="row" justifyContent="space-around">
        <Grid item sx={{ mt: 2 }}>
          <Box
            component="span"
            sx={{ display: "flex", justifyContent: "center", my: 2 }}
          >
            <img src={logo} alt="logo" height={50}></img>
          </Box>
          <Wrap>
            <Link
              href="https://twitter.com/disney"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <Twitter />
            </Link>
            <Link
              href="https://instagram.com/disney"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <Instagram />
            </Link>
            <Link
              href="https://facebook.com/disney"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <Facebook />
            </Link>
          </Wrap>

          <List>
            <BoxCenter
              variant="caption"
              color="inherit"
              sx={{ textDecoration: "none", fontSize: 12 }}
            >
              © 2022 Disney y su familia de compañías afiliadas. Todos los
              derechos reservados.
            </BoxCenter>

            <ListItem sx={{ px: 0, py: 0.5 }}>
              <BoxCenter
                variant="caption"
                color="inherit"
                sx={{ textDecoration: "none", fontSize: 12 }}
              >
                Disney+ es un servicio por suscripción de pago, su contenido
                está sujeto a disponibilidad. El servicio Disney+ es
                comercializado por The Walt Disney Company Colombia S.A, Carrera
                50 No. 17 – 77 Bogotá D.C. y número de NIT es 800.236.937-1
              </BoxCenter>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

const BoxCenter = styled(Box)`
  text-align: center;
`;

const Container = styled.div`
  margin-top: 25px;
  padding: 30px 0 30px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(1, minmax(0, 1fr));
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  Facebook {
    border: 1px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 60%) 0px 26px 30px -10px,
      rgb(0 0 0 / 75%) 0px 16px 10px -10px;
    transition: all 300ms cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;

    &:hover {
      border: 1px solid rgba(249, 249, 249, 0.9);
    }
  }
`;
