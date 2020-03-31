const displayStatus = key => {
  if (key.touched && key.error) {
    return 'error';
  }
  if (!key.touched) {
    return '';
  }
  return 'success';
};

export default displayStatus;
