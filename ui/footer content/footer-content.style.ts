import { css } from "../../stitches.config";

export const ContainerStyles = css({
    display: "flex",
    align: "flex-start",
    justify: "space-between",
    gap: "$2",
});

export const ContentStyles = css({
    display: "flex",
    fDir:"column",
    justify: "center",
    align: "center",
    variants: {
        space: {
            sm: {
                gap: "$2",
            },
            md: {
                gap: "$4",
            },
        },
    },
    defaultVariants:{
        space : "sm"
    }
});