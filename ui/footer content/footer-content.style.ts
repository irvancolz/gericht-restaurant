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