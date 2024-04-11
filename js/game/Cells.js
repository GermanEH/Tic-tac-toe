function Cell() {
  const value = '';
  const content = '';

  const getValue = () => value;

  const mark = (mark) => (value = mark.value) && (content = mark.cellContent);

  const resetCell = () => {
    value = '';
    content = '';
  };

  return { getValue, mark, resetCell };
}
