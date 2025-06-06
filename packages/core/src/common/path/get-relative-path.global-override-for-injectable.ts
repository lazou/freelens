/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import path from "path";
import { getGlobalOverride } from "@freelensapp/test-utils";
import getRelativePathInjectable from "./get-relative-path.injectable";

export default getGlobalOverride(getRelativePathInjectable, () => path.posix.relative);
