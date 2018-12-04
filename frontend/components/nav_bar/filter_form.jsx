import React from 'react';

class FilterForm extends React.Component {

  handleClick(e, type) {
    const modal = document.getElementsByClassName("filter-form");
    modal[0].className += " remove-border";
    e.preventDefault();
    const { openModal } = this.props;
    openModal(type);
  }

  render() {
    return(
      <form className="filter-form">
        <button className="filter-btn" onClick={(e) => this.handleClick(e, "guests")}>Guests</button>
        <button className="filter-btn" onClick={(e) => this.handleClick(e, "price")}>Price</button>
      </form>
    );}

}

export default FilterForm;
