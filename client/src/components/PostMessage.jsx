import { Grid, Paper } from "@mui/material";
import { withStyles } from "@mui/material/styles";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage";
import PostMessageForm from "./PostMessageForm";
import PostMessageList from "./PostMessageList";

const styles = (theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
});

const PostMessage = ({ classes, ...props }) => {
  useEffect(() => {
    props.fetchAllPostMessages();
  }, []); //DidMount
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ bgcolor: "primary.main" }}>
            <PostMessageForm />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <PostMessageList />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});

const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(PostMessage));
