import { css } from "../../stitches.config";

export const ContainerStyles = css({
    mt: "$7",
    mb: "$6",
    display: "flex",
    align: "flex-start",
    justify: "space-between",
    gap: "$2",

    "@bp2" :{
        fDir: "column",
    },
});

export const ContentStyles = css({
    display: "flex",
    fDir:"column",
    justify: "center",
    align: "center",

    "&:nth-child(2)" :{
        fBase: "100%",
    },

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

export const TextStyles = css({
    mb: '$1',
});

export const ImageLinkStyles = css({
    display: "flex",
    gap: "$2",
})