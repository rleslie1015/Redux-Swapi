import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchChars } from "../actions";
class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {
      return (<span>...loading</span>)
      // return something here to indicate that you are fetching data
    }
    if (this.props.error) {
      return (<span>{this.props.error}</span>)
    }
     return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchChars
  }
)(CharacterListView);
