export function MapToArray() {
    return function (strMap, addKey) {
        let obj = Object.create(null);
        if (strMap && strMap.size > 0) {
            for (let [k,v] of strMap) {
                obj[k] = v;
            }
            // console.log(obj);
        }
        if (addKey === false) {
            return Object.values(obj);
            // return obj;
        } else {
            return Object.keys(obj).map(function (key) {
                return Object.defineProperty(obj[key], '$key', {enumerable: false, value: key});
            });
        }
    };
}
