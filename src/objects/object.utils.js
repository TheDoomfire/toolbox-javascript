export default class ObjectUtils {
    static find(obj, target) {
      const results = [];
  
      function recurse(currentObj, path = []) {
        if (typeof currentObj !== 'object' || currentObj === null) return;
  
        // Determine search type based on target
        if (typeof target === 'object' && target !== null) {
          // Object search: Check if current object is the target
          if (currentObj === target) {
            results.push({
              path: path,
              value: currentObj,
              object: currentObj,
            });
          }
        } else {
          // Key search: Check if current object has the target key
          if (currentObj.hasOwnProperty(target)) {
            results.push({
              path: path.concat(target),
              value: currentObj[target],
              object: currentObj,
            });
          }
        }
  
        // Recurse into nested objects
        for (const [key, value] of Object.entries(currentObj)) {
          if (typeof value === 'object' && value !== null) {
            recurse(value, path.concat(key));
          }
        }
      }
  
      recurse(obj);
      return results;
    }
}