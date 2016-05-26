import _ from 'lodash';

function getInitials(name) {
  if(!name) return false;
  const nameParts = name.split(' ');
  let initials = '';

  if(_.size(nameParts) > 1){
    const firstName = _.first(nameParts);
    const lastName = _.last(nameParts);
    initials = firstName[0] + lastName[0];
  } else if (_.size(nameParts) > 0){
    const firstName = _.first(nameParts);
    initials = firstName[0] + firstName[1];
  }

  return initials.toUpperCase();
};

function getFirstName(fullName) {
  const nameParts = fullName.split(' ');
  return _.first(nameParts);
};

function getFirstAndLastName(fullName) {
  if(!fullName) return false;
  const nameParts = fullName.split(' ');
  if(_.size(nameParts) < 2) return _.first(nameParts);
  return _.first(nameParts) + ' ' + _.last(nameParts);
};

export default {
  getInitials,
  getFirstName,
  getFirstAndLastName
};
