/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";
import { navigateToRouteInjectionToken } from "../../../../navigate-to-route-injection-token";
import statefulsetsRouteInjectable from "./statefulsets-route.injectable";

const navigateToStatefulsetsInjectable = getInjectable({
  id: "navigate-to-statefulsets",

  instantiate: (di) => {
    const navigateToRoute = di.inject(navigateToRouteInjectionToken);
    const route = di.inject(statefulsetsRouteInjectable);

    return () => navigateToRoute(route);
  },
});

export default navigateToStatefulsetsInjectable;
