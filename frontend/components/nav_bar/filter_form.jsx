import React from 'react';

class FilterForm extends React.Component {

  // componentDidUpdate() {
  //   // this.props.changeFilter("guests", 1);
    // const guestBtn = document.getElementsByClassName("filter-btn");
    // guestBtn[0].classList.remove("add-blue");
  // }

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
