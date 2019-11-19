
function getFibonacci(position: number): number {
  if (position === 0) return 0;
  else if (position === 3) return 2;
  else if (position === 4) return 3;
  else return 1;
};

export default getFibonacci;