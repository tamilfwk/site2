import * as React from "react"
import {
  cdnCanvasHost, InitOptions
} from "@cdnapp/loader-gatsby"
import { graphql } from "gatsby"
import { initcdnLoaderWithRegistrations } from "../cdn-init"

export const query = graphql`
  query {
    cdnOptions
  }
`

interface HostProps {
  data: {
    cdnOptions: InitOptions;
  }
}

export default function Host({ data }: HostProps) {
  const { cdnOptions } = data
  initcdnLoaderWithRegistrations(cdnOptions)
  return <cdnCanvasHost />
}
