import React, { Component } from "react";
import { Layout, Menu, Icon, List, Tag } from "antd";
import { connect } from "react-redux";
import { getQuestions } from "Actions/questionActions";
import ListItem from "./ListItem";
import "./Questions.scss";

class Questions extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    return (
      <div>
        {/* <div>Questions</div> */}
        <div>
          <List
            size="large"
            header={<div>Top Questions</div>}
            footer={null}
            bordered
            dataSource={this.props.data.items}
            renderItem={item => <ListItem item={item} />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questionsReducer }) => {
  const { name, isFetching, data } = questionsReducer;
  return { name, isFetching, data };
};

export default connect(
  mapStateToProps,
  { getQuestions }
)(Questions);
