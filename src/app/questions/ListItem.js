import React, { Component } from "react";
import { List, Tag } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ListItem extends Component {
  getUserProfile = ({ owner: { user_id, display_name } }) => {
    console.log(user_id, display_name);
    this.props.history.push(`/users/${user_id}/${display_name}`);
  };

  render() {
    const { item } = this.props;
    return (
      <List.Item>
        <div>
          <div style={{ display: "flex" }}>
            <div>
              <span style={{ padding: "5px" }}>Votes: 0</span>
              <span style={{ padding: "5px" }}>
                Answers: {item.answer_count}
              </span>
              <span style={{ padding: "5px" }}>Views: {item.view_count}</span>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <div style={{ marginBottom: "5px" }}>{item.title}</div>
              <div style={{ marginBottom: "5px" }}>
                {item.tags.length &&
                  item.tags.map((tag, ind) => (
                    <Tag color="#108ee9" key={ind}>
                      {tag}
                    </Tag>
                  ))}
              </div>
              <span>
                <Tag onClick={() => this.getUserProfile(item)}>
                  {item.owner.display_name}
                </Tag>
              </span>
            </div>
          </div>
        </div>
      </List.Item>
    );
  }
}

const mapStateToProps = ({ questionsReducer }) => {
  const { name, isFetching, data } = questionsReducer;
  return { name, isFetching, data };
};

export default withRouter(connect(mapStateToProps)(ListItem));
