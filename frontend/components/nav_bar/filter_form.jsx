import React from 'react';

class FilterForm extends React.Component {

  componentDidMount() {
    this.guestBtn = document.getElementsByClassName("filter-btn")[0];
    if (this.props.guests) {
      this.guestBtn.className += " add-blue";
      this.html = "guests";
      if (this.props.guests === 1) this.html = "guest";
      this.guestBtn.innerHTML = `${this.props.guests} ${this.html}`;
    }
  }

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
      </form>
    );}

}

export default FilterForm;

// <button className="filter-btn" onClick={(e) => this.handleClick(e, "price")}>Price</button>
