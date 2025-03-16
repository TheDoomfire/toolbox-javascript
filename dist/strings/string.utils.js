class f {
  static find(u, s) {
    if (s instanceof RegExp) {
      const e = s.flags.includes("g") ? s.flags : s.flags + "g", l = new RegExp(s.source, e), i = [];
      let n;
      for (; (n = l.exec(u)) !== null; )
        i.push({
          fullMatch: n[0],
          capture: n[1],
          // first capture group; you can expand this as needed
          start: n.index,
          end: n.index + n[0].length,
          groups: n.groups
          // will be defined if you use named groups
        });
      return i;
    } else {
      const e = [];
      let l = u.indexOf(s);
      for (; l !== -1; )
        e.push({
          fullMatch: s,
          start: l,
          end: l + s.length
        }), l = u.indexOf(s, l + s.length);
      return e;
    }
  }
}
export {
  f as default
};
