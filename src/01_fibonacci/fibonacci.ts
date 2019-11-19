
function getFibonacci(position: number): number {
  if (position === 0) return 0;
  else if (position === 1) return 1;
  else return getFibonacci(position - 1) + getFibonacci(position - 2);
};

export default getFibonacci;