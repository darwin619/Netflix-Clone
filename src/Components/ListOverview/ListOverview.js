import React from "react";
import { connect } from "react-redux";
import { selectListItems } from "../../Redux/List/list-selectors";
import "./ListOverview.scss";
import { selectCurrentUser } from "../../Redux/User/user-selectors";
import ListItem from "../ListItem/ListItem";

const ListOverview = ({ listItems, currentUser }) => {
  return (
    <div className="list-overview">
      <h1 className="list-overview__title">
        {currentUser
          ? `${currentUser.displayName}'s List (${listItems.length})`
          : "Sign in to view your list"}
      </h1>
      <div className="list-overview__outer">
        {currentUser ? (
          <div className="list-overview__inner">
            {listItems.map(item => (
              <ListItem key={item.id} item={item} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  listItems: selectListItems(state),
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(ListOverview);
