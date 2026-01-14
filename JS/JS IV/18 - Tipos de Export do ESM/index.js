import { inline } from "./inline.js"; // pode ser renomeado com "as" .. ex: {inline as i}
import defaultInLine from "./inline.js"; //só pode haver um default por arquivo!
import exportDefault, { group, a, b, c, d, e } from "./non-inline.js";

inline();
defaultInLine();

group();
exportDefault();
