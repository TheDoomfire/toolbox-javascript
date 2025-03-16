export default class StringUtils {
    static find(scope, target) {
      if (target instanceof RegExp) {
        // Ensure the global flag is set
        const flags = target.flags.includes('g') ? target.flags : target.flags + 'g';
        const regex = new RegExp(target.source, flags);
        const results = [];
        let match;
        while ((match = regex.exec(scope)) !== null) {
          results.push({
            fullMatch: match[0],
            capture: match[1], // first capture group; you can expand this as needed
            start: match.index,
            end: match.index + match[0].length,
            groups: match.groups // will be defined if you use named groups
          });
        }
        return results;
      } else {
        // TODO: NOT TESTED!!!
        // fallback if target is a string (e.g., substring search)
        const results = [];
        let index = scope.indexOf(target);
        while (index !== -1) {
          results.push({
            fullMatch: target,
            start: index,
            end: index + target.length
          });
          index = scope.indexOf(target, index + target.length);
        }
        return results;
      }
    }
  }
  