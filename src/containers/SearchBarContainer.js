import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar/index';
import { changeSearchText } from '../actions/index.js';

const mapStateToProps = (state) => {
  return {
    value: state.contactList.searchText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: value => {
      dispatch(changeSearchText(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
