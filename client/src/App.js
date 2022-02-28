import "./App.css";
import PostMessage from "./components/PostMessage";
import { Provider } from "react-redux";
import { store } from "./actions/store";
import { Container, AppBar, Typography, Box, withStyles } from "@mui/material";

const style = (theme) => ({
  AppBar: {
    marginButtom: theme.spacing(3),
    padding: theme.spacing(2),
  },
});
function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 3 }}>
          <AppBar position="static" color="primary">
            <Typography
              variant="h2"
              align="center"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              SIMPLE CRUD OPERATION USING MERN STACK TECHNOLOGIES
            </Typography>
          </AppBar>
        </Box>
        <PostMessage />
      </Container>
    </Provider>
  );
}

export default App;
