import { css } from "../../stitches.config";
import { VariantProps } from "@stitches/react";

export const TextStyles = css({
    color: 'inherit',
    variants:{
        // adjust font size
        size:{
            sm :{
                fontSize: '$sm',
            },
            md:{
                fontSize: '$md',
            },
            lg:{
                fontSize: '$lg',
            },
            xl:{
                fontSize: '$xl',
            },
        },
        // adjust font color
        color:{
            gold : {
                color: '$goldCol1',
            },
            normal: {
                color: '$textCol',
            },
            fade :{
                color: '$grayCol1'
            }
        },
        // adjust font variant
        family:{
            cormorant:{
                fontFamily: "$cormorant",
            },
            open:{
                fontFamily: '$openSans',
            },
            source:{
                fontFamily: "$sourceSans",
            },
            lato : {
                fontFamily: '$lato'
            }
        },
    },
});
// use for components parameter
export type TextStylesVariant = VariantProps<typeof TextStyles>;