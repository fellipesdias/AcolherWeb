import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardHeader,
  Divider,
  Avatar,
} from "@material-ui/core";

import ParticipanteIcon from "@material-ui/icons/Person";
import RelatorioIcon from "@material-ui/icons/Description";
import DoacoesIcon from "@material-ui/icons/Payment";
import AtividadesIcon from "@material-ui/icons/SportsHandball";
import FederadosIcon from "@material-ui/icons/EmojiEvents";
import ProjetosIcon from "@material-ui/icons/Edit";
import SegurancaIcon from "@material-ui/icons/Lock";
import CustomLink from "./CustomLink";

const Main = () => {
  const handleLogout = () => {
    alert("Logout");
  };

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const toggleMenu = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={toggleMenu}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Projeto Acolher
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerVisible} onClose={toggleMenu}>
        <CardHeader avatar={<Avatar />} title={"Filipinho"} />
        <Divider />
        <List>
          <CustomLink to="/list">
            <ListItem button>
              <ListItemIcon>
                <ParticipanteIcon />
              </ListItemIcon>
              <ListItemText primary="Participantes" />
            </ListItem>
          </CustomLink>

          <ListItem button>
            <ListItemIcon>
              <FederadosIcon />
            </ListItemIcon>
            <ListItemText primary="Federados" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AtividadesIcon />
            </ListItemIcon>
            <ListItemText primary="Atividades" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ProjetosIcon />
            </ListItemIcon>
            <ListItemText primary="Projetos" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DoacoesIcon />
            </ListItemIcon>
            <ListItemText primary="Doações" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <RelatorioIcon />
            </ListItemIcon>
            <ListItemText primary="Relatórios" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SegurancaIcon />
            </ListItemIcon>
            <ListItemText primary="Segurança e Acesso" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default Main;
