class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a,b)=>a-b);
    return args[0];
  }
}
//Another Sol
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
