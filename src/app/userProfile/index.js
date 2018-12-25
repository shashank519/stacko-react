import React, { Component } from "react";
import { Card, Layout, Menu, Icon, List, Tag, Table, Divider } from "antd";
import { connect } from "react-redux";
import * as moment from "moment";
import {
  getUsersInfo,
  getUsersTopTags,
  getQuestionOnUsers
} from "Actions/usersActions";

const { Meta } = Card;
const columns = [
  {
    key: "score",
    dataIndex: "score",
    render: score => {
      return (
        <span>
          <Tag color="blue">{score}</Tag>
        </span>
      );
    },
    width: 30
  },
  {
    title: "Question",
    dataIndex: "title",
    key: "title",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Date",
    dataIndex: "creation_date",
    key: "creation_date",
    width: 150,
    render: date => <span>{moment(date).format("MMM Do YY")}</span>
  }
];

class UserProfile extends Component {
  componentDidMount() {
    const {
      match: {
        params: { display_name, user_id }
      }
    } = this.props;

    this.props.getUsersInfo(user_id);
    this.props.getUsersTopTags(user_id);
    this.props.getQuestionOnUsers(user_id);
  }

  render() {
    const gridStyle = {
      width: "50%",
      textAlign: "center"
    };
    const usersData = this.props.data.items ? this.props.data.items[0] : {};

    return (
      <div>
        <div style={{ display: "flex" }}>
          <span style={{ padding: "15px" }}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="Loading Image" src={usersData.profile_image} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </span>
          <span style={{ padding: "15px" }}>
            <h1>{usersData.display_name}</h1>
          </span>
        </div>
        <Card>
          {this.props.tags.items &&
            this.props.tags.items.map((tag, i) => {
              return (
                <Card.Grid key={i} style={gridStyle}>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "30%", textAlign: "left" }}>
                      <Tag color="#f50">{tag.name}</Tag>
                    </div>
                    <div style={{ textAlign: "right", marginLeft: "20px" }}>
                      <span style={{ margin: "0 30px" }}>Score: 20</span>
                      <span style={{ margin: "0 30px" }}>Posts: 20 </span>
                    </div>
                  </div>
                </Card.Grid>
              );
            })}
        </Card>
        <div style={{ marginTop: "20px" }}>
          <Table
            columns={columns}
            dataSource={this.props.qouData.items}
            rowKey={record => record.question_id}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => {
  const { name, isFetching, data, tags, qouData } = usersReducer;
  return { name, isFetching, data, tags, qouData };
};

export default connect(
  mapStateToProps,
  { getUsersInfo, getUsersTopTags, getQuestionOnUsers }
)(UserProfile);
