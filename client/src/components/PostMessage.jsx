import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage";

const PostMessage = ({ classes, ...props }) => {
  useEffect(() => {
    props.fetchAllPostMessages();
  }, []); //DidMount
  return <div>PostMessage</div>;
};
const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});

const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
};
export default connect(mapStateToProps, mapActionToProps)(PostMessage);
