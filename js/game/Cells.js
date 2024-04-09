function Cell() {
  const value = 0;

  const getValue = () => value;

  const mark = (mark) => (value = mark);

  const resetValue = () => (value = 0);

  return { getValue, mark, resetValue };
}
