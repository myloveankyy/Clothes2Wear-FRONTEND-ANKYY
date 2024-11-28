// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dZbt1US7JmqH4GfLm2r4uE
// Component: wu93WXG_4h4a
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useTrigger
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import { useScreenVariants as useScreenVariantsy0D3Ma4XqRe } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _y0d3MA4xqRe/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: dZbt1US7JmqH4GfLm2r4uE/projectcss
import sty from "./PlasmicProductSlideHover.module.css"; // plasmic-import: wu93WXG_4h4a/css
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: fHrBi3K8e_fs/icon

createPlasmicElementProxy;

export const PlasmicProductSlideHover__VariantProps = new Array();

export const PlasmicProductSlideHover__ArgProps = new Array("currentItem");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProductSlideHover__RenderFunc(props) {
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
  const [isProductFullStckHover, triggerProductFullStckHoverProps] = useTrigger(
    "useHover",
    {}
  );
  const triggers = {
    hover_productFullStck: isProductFullStckHover
  };
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsy0D3Ma4XqRe()
  });
  return (
    <div
      data-plasmic-name={"productFullStck"}
      data-plasmic-override={overrides.productFullStck}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.productFullStck
      )}
      data-plasmic-trigger-props={[triggerProductFullStckHoverProps]}
    >
      <Reveal
        className={classNames("__wab_instance", sty.reveal___4W9Ym)}
        direction={triggers.hover_productFullStck ? "vertical" : undefined}
        effect={"flip"}
        triggerOnce={true}
      >
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "130px"
              : "296px"
          }
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "132px"
              : "221px"
          }
          loading={"lazy"}
          src={(() => {
            try {
              return $props.currentItem.imageUrl;
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
      </Reveal>
      <div className={classNames(projectcss.all, sty.freeBox___8L6Gp)} />
      <div className={classNames(projectcss.all, sty.freeBox__wYtz9)} />
      <Reveal
        className={classNames("__wab_instance", sty.reveal__ue31)}
        effect={"jackinthebox"}
        triggerOnce={true}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__nglgO)}
        >
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__zGmeb
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.currentItem.title;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Alia Bhatt Suit Anarkali Lehenga with Western Style Blouse";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </h1>
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.currentItem.description;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Buy ultimate lehenga saree of alia bhatt with designer aniket pradhan. The world best designer holding more than 500 bn assets compounding interest.";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__b2Ol
            )}
          >
            {"\u20b910,00,000"}
          </h1>
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__dkZd5
            )}
          >
            {"\u20b910,00,000"}
          </h1>
          <div className={classNames(projectcss.all, sty.freeBox__nRpIg)}>
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1___9Iiql
              )}
            >
              {"Buy now"}
            </h1>
            <Icon10Icon
              className={classNames(projectcss.all, sty.svg__m5Nfi)}
              role={"img"}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___3QdJq)}>
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__bs3Md
              )}
            >
              {"Add to cart"}
            </h1>
            <Icon10Icon
              className={classNames(projectcss.all, sty.svg__mpHb5)}
              role={"img"}
            />
          </div>
        </Stack__>
      </Reveal>
    </div>
  );
}

const PlasmicDescendants = {
  productFullStck: ["productFullStck", "img", "text"],
  img: ["img"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProductSlideHover__ArgProps,
          internalVariantPropNames: PlasmicProductSlideHover__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductSlideHover__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "productFullStck") {
    func.displayName = "PlasmicProductSlideHover";
  } else {
    func.displayName = `PlasmicProductSlideHover.${nodeName}`;
  }
  return func;
}

export const PlasmicProductSlideHover = Object.assign(
  // Top-level PlasmicProductSlideHover renders the root element
  makeNodeComponent("productFullStck"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicProductSlideHover
    internalVariantProps: PlasmicProductSlideHover__VariantProps,
    internalArgProps: PlasmicProductSlideHover__ArgProps
  }
);

export default PlasmicProductSlideHover;
/* prettier-ignore-end */
