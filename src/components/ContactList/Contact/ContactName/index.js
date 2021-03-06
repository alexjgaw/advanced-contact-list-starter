import React, { PropTypes } from 'react';

const ContactName = (props) => {

  const highlightHits = (origString, searchValue) => {
    // Create an array with string slices and spans enclosing search hits.

    let noHit;
    let hit;
    let startIndex = 0;
    let hitIndex = 0;
    let keyNum = props.id + 4000;
    const term = searchValue.toLowerCase();
    const name = origString.toLowerCase();


    const element = [];

    while ((name.indexOf(term, startIndex) >= 0) && (searchValue.length > 0)) {
      hitIndex = name.indexOf(term, startIndex);
      noHit = origString.slice(startIndex, hitIndex);
      hit = origString.slice(hitIndex, hitIndex + term.length);
      element.push(noHit, <span className="highlight" key={keyNum}>{hit}</span>);
      startIndex = hitIndex + term.length;
      keyNum++;
    }

    // If there were hits, add whatever's left starting from startIndex.
    // If there were no hits, startIndex is 0, so add entire string.
    element.push(origString.slice(startIndex));
    return element;
  };

  return (
    <h2>
      {props.searchValue ? highlightHits(props.name, props.searchValue) : props.name}
    </h2>
  );
};

export default ContactName;

ContactName.propTypes = {
  name: PropTypes.string.isRequired,
  searchValue: PropTypes.string,
  id: PropTypes.string.isRequired
};
