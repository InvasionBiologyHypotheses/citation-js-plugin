/**
 * ## Formats
 *
 * For a full list, check out {@link module:@citation-js/plugin.enkore.formats}.
 *
 *
 * ## Configuration
 *
 * Check out {@link module:@citation-js/plugin-enkore.config}.
 *
 * @module module:@citation-js/plugin-enkore
 */

import { plugins } from "@citation-js/core"

import { ref, formats as input } from "./input/index.js"
// import config from "./config.js"
// import output from "./output/index.js"

plugins.add(ref, { input }) // { input, output, config })
