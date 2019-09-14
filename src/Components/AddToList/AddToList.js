import React from "react";
import "./AddToList.scss";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../Redux/List/list-actions";
import { selectListItems } from "../../Redux/List/list-selectors";

const AddToList = ({ addItem, removeItem, item, listItems }) => {
  const existingItem = listItems.filter(listItem => listItem.id === item.id);
  return (
    <div className="addtolist">
      {existingItem.length ? (
        <div className="addtolist__container" onClick={() => removeItem(item)}>
          <FontAwesomeIcon icon={faCheck} className="addtolist--icon" />
          <span>Added to list</span>
        </div>
      ) : (
        <div className="addtolist__container" onClick={() => addItem(item)}>
          <FontAwesomeIcon icon={faPlus} className="addtolist--icon" />
          <span>Add to list</span>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

const mapStateToProps = state => ({
  listItems: selectListItems(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToList);
