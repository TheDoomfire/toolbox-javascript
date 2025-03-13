class n {
  static find(c, s) {
    const l = [];
    function i(o, e = []) {
      if (!(typeof o != "object" || o === null)) {
        typeof s == "object" && s !== null ? o === s && l.push({
          path: e,
          value: o,
          object: o
        }) : o.hasOwnProperty(s) && l.push({
          path: e.concat(s),
          value: o[s],
          object: o
        });
        for (const [p, f] of Object.entries(o))
          typeof f == "object" && f !== null && i(f, e.concat(p));
      }
    }
    return i(c), l;
  }
}
export {
  n as default
};
