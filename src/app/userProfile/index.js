import React, { Component } from "react";
import { Card, Layout, Menu, Icon, List, Tag } from "antd";
import { connect } from "react-redux";
import { getUsersInfo, getUsersTopTags } from "Actions/usersActions";
// import { getQuestions } from "Actions/questionActions";
// import ListItem from "./ListItem";
// import "./Questions.scss";

// const { Header, Sider, Content } = Layout;
const { Meta } = Card;

class UserProfile extends Component {
  componentDidMount() {
    const {
      match: {
        params: { display_name, user_id }
      }
    } = this.props;

    this.props.getUsersInfo(user_id);
    this.props.getUsersTopTags(user_id);
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
        <div>
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => {
  const { name, isFetching, data, tags } = usersReducer;
  return { name, isFetching, data, tags };
};

export default connect(
  mapStateToProps,
  { getUsersInfo, getUsersTopTags }
)(UserProfile);
