import {
  initcdnLoader,
  InitOptions,
} from "@cdnapp/loader-gatsby";

export function initcdnLoaderWithRegistrations(cdnOptions: InitOptions) {
  const cdn = initcdnLoader(cdnOptions);

  // You can register any code components that you want to use here; see
  // https://docs.cdn.app/learn/code-components-ref/
  // And configure your cdn project to use the host url pointing at
  // the /cdn-host page of your nextjs app (for example,
  // http://localhost:8000/cdn-host).  See
  // https://docs.cdn.app/learn/app-hosting/#set-a-cdn-project-to-use-your-app-host

  // cdn.registerComponent(...);

  return cdn;
}
