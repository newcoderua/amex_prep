// write Function.prototype.myBind.
Function.prototype.myBind = function (context, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  };
};
