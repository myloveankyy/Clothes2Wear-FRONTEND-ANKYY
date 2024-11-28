// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dZbt1US7JmqH4GfLm2r4uE
// Component: z4jI45IOYaM3
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Dialog } from "@plasmicpkgs/radix-ui";
import Button from "../../Button"; // plasmic-import: WchpUmJB60Ft/component
import { SheetContent } from "@plasmicpkgs/radix-ui";
import { DialogTitle } from "@plasmicpkgs/radix-ui";
import { DialogClose } from "@plasmicpkgs/radix-ui";
import { useScreenVariants as useScreenVariantsy0D3Ma4XqRe } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _y0d3MA4xqRe/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: dZbt1US7JmqH4GfLm2r4uE/projectcss
import sty from "./PlasmicDrawer2.module.css"; // plasmic-import: z4jI45IOYaM3/css
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: MkJgUqsQnajD/icon
import CircleUserSolidSvgIcon from "./icons/PlasmicIcon__CircleUserSolidSvg"; // plasmic-import: tw1leLohR_B9/icon
import HeartSolidSvgIcon from "./icons/PlasmicIcon__HeartSolidSvg"; // plasmic-import: fP9zRu2keVnl/icon

createPlasmicElementProxy;

export const PlasmicDrawer2__VariantProps = new Array("noTrigger");

export const PlasmicDrawer2__ArgProps = new Array(
  "open",
  "onOpenChange",
  "children",
  "slot",
  "trigger"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDrawer2__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "dialog.open",
        type: "writable",
        variableType: "boolean",
        valueProp: "open",
        onChangeProp: "onOpenChange"
      },
      {
        path: "noTrigger",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTrigger
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsy0D3Ma4XqRe()
  });
  return (
    <Dialog
      data-plasmic-name={"dialog"}
      data-plasmic-override={overrides.dialog}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.dialog,
        { [sty.dialognoTrigger]: hasVariant($state, "noTrigger", "noTrigger") }
      )}
      defaultOpen={
        hasVariant(globalVariants, "screen", "mobileOnly") ? false : false
      }
      noContain={true}
      onOpenChange={generateStateOnChangeProp($state, ["dialog", "open"])}
      open={generateStateValueProp($state, ["dialog", "open"])}
      overlayClassName={classNames({ [sty["pcls_bHVi1F1HNNUP"]]: true })}
      themeResetClass={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens
      )}
      triggerSlot={
        (hasVariant($state, "noTrigger", "noTrigger") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <Button
                    className={classNames("__wab_instance", sty.button__mx0Mq)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vcwd3
                      )}
                    >
                      {"Show dialog"}
                    </div>
                  </Button>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tTVtU
                    )}
                  >
                    {"Enter some text"}
                  </div>
                </React.Fragment>
              ),

              value: args.trigger
            })
          : null
      }
    >
      <SheetContent
        data-plasmic-name={"drawerContent"}
        data-plasmic-override={overrides.drawerContent}
        className={classNames("__wab_instance", sty.drawerContent, {
          [sty.drawerContentnoTrigger]: hasVariant(
            $state,
            "noTrigger",
            "noTrigger"
          )
        })}
        themeResetClass={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens
        )}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <DialogTitle
            data-plasmic-name={"dialogTitle"}
            data-plasmic-override={overrides.dialogTitle}
            className={classNames("__wab_instance", sty.dialogTitle)}
          >
            {renderPlasmicSlot({
              defaultContents: "CLOTHES2WEAR",
              value: args.children
            })}
          </DialogTitle>
          {renderPlasmicSlot({
            defaultContents: (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hJwaz)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hAa4A
                  )}
                >
                  {""}
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__xviha)}>
                  <CircleUserSolidSvgIcon
                    className={classNames(projectcss.all, sty.svg__szFr4)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wUpR0
                    )}
                  >
                    {"My account"}
                  </div>
                  <Icon2Icon
                    className={classNames(projectcss.all, sty.svg__daJg)}
                    role={"img"}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__hwp7Y)}>
                  <HeartSolidSvgIcon
                    className={classNames(projectcss.all, sty.svg__sZHyH)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aU1MU
                    )}
                  >
                    {"Favourites"}
                  </div>
                  <Icon2Icon
                    className={classNames(projectcss.all, sty.svg__hOdTt)}
                    role={"img"}
                  />
                </div>
              </Stack__>
            ),

            value: args.slot
          })}
        </Stack__>
        <DialogClose
          data-plasmic-name={"dialogClose"}
          data-plasmic-override={overrides.dialogClose}
          className={classNames("__wab_instance", sty.dialogClose)}
        />
      </SheetContent>
    </Dialog>
  );
}

const PlasmicDescendants = {
  dialog: ["dialog", "drawerContent", "freeBox", "dialogTitle", "dialogClose"],
  drawerContent: ["drawerContent", "freeBox", "dialogTitle", "dialogClose"],
  freeBox: ["freeBox", "dialogTitle"],
  dialogTitle: ["dialogTitle"],
  dialogClose: ["dialogClose"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDrawer2__ArgProps,
          internalVariantPropNames: PlasmicDrawer2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDrawer2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dialog") {
    func.displayName = "PlasmicDrawer2";
  } else {
    func.displayName = `PlasmicDrawer2.${nodeName}`;
  }
  return func;
}

export const PlasmicDrawer2 = Object.assign(
  // Top-level PlasmicDrawer2 renders the root element
  makeNodeComponent("dialog"),
  {
    // Helper components rendering sub-elements
    drawerContent: makeNodeComponent("drawerContent"),
    freeBox: makeNodeComponent("freeBox"),
    dialogTitle: makeNodeComponent("dialogTitle"),
    dialogClose: makeNodeComponent("dialogClose"),
    // Metadata about props expected for PlasmicDrawer2
    internalVariantProps: PlasmicDrawer2__VariantProps,
    internalArgProps: PlasmicDrawer2__ArgProps
  }
);

export default PlasmicDrawer2;
/* prettier-ignore-end */