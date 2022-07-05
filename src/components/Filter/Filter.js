import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { input, onChange } = this.props;
    return (
      <div>
        <p className={s.text}>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={input}
          onChange={onChange}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
