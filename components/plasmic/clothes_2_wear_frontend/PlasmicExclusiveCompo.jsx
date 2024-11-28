// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dZbt1US7JmqH4GfLm2r4uE
// Component: 1vSXOXH4_klA
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: dZbt1US7JmqH4GfLm2r4uE/projectcss
import sty from "./PlasmicExclusiveCompo.module.css"; // plasmic-import: 1vSXOXH4_klA/css
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: MkJgUqsQnajD/icon

createPlasmicElementProxy;

export const PlasmicExclusiveCompo__VariantProps = new Array();

export const PlasmicExclusiveCompo__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicExclusiveCompo__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Fetcher
        data-plasmic-name={"dataFetcher"}
        data-plasmic-override={overrides.dataFetcher}
        className={classNames("__wab_instance", sty.dataFetcher)}
        dataOp={{
          sourceId: "dYjrnE7kgSENFfU7cKYETx",
          opId: "55b133fc-856a-455a-99ce-95df6e480e78",
          userArgs: {},
          cacheKey: `plasmic.$.S8mswwNSs0e5.$.55b133fc-856a-455a-99ce-95df6e480e78.$.`,
          invalidatedKeys: null,
          roleId: null
        }}
        queries={{}}
      >
        {$queries => (
          <div className={classNames(projectcss.all, sty.freeBox___95Qdf)}>
            <div className={classNames(projectcss.all, sty.freeBox___0ZkJ)}>
              <div className={classNames(projectcss.all, sty.freeBox__ac5MG)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__haypn)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={(() => {
                    try {
                      return $queries.data.data.response.exclusiveCollections[0]
                        .imageUrl;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                />

                <div className={classNames(projectcss.all, sty.freeBox__bDbAp)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__f5Nue
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return undefined;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Category Name -";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5HkqN
                    )}
                  >
                    {"Denim Saree with Anarkali Disco HD Lehenga Chunni "}
                  </div>
                </div>
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__oqif)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__bE1Yv)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={(() => {
                    try {
                      return $queries.data.data.response.exclusiveCollections[1]
                        .imageUrl;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                />

                <div className={classNames(projectcss.all, sty.freeBox__rG2Bj)}>
                  <Icon2Icon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />
                </div>
              </Stack__>
            </div>
          </div>
        )}
      </Fetcher>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "dataFetcher", "svg"],
  dataFetcher: ["dataFetcher", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicExclusiveCompo__ArgProps,
          internalVariantPropNames: PlasmicExclusiveCompo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicExclusiveCompo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicExclusiveCompo";
  } else {
    func.displayName = `PlasmicExclusiveCompo.${nodeName}`;
  }
  return func;
}

export const PlasmicExclusiveCompo = Object.assign(
  // Top-level PlasmicExclusiveCompo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    dataFetcher: makeNodeComponent("dataFetcher"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicExclusiveCompo
    internalVariantProps: PlasmicExclusiveCompo__VariantProps,
    internalArgProps: PlasmicExclusiveCompo__ArgProps
  }
);

export default PlasmicExclusiveCompo;
/* prettier-ignore-end */
