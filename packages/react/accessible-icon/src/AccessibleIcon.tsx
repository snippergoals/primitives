import * as React from 'react';
import { getPartDataAttrObj } from '@interop-ui/utils';
import { forwardRefWithAs } from '@interop-ui/react-polymorphic';
import { VisuallyHidden } from '@interop-ui/react-visually-hidden';

const NAME = 'AccessibleIcon';
const DEFAULT_TAG = 'span';

type AccessibleIconDOMProps = React.ComponentPropsWithoutRef<typeof DEFAULT_TAG>;
type AccessibleIconOwnProps = { label: string };
type AccessibleIconProps = AccessibleIconDOMProps & AccessibleIconOwnProps;

const AccessibleIcon = forwardRefWithAs<HTMLSpanElement, AccessibleIconProps>(
  (props, forwardedRef) => {
    const { as: Comp = DEFAULT_TAG, children, label, ...iconProps } = props;
    const child = React.Children.only(children);

    return (
      <Comp {...getPartDataAttrObj(NAME)} ref={forwardedRef} {...iconProps}>
        {React.cloneElement(child as React.ReactElement, {
          // accessibility
          'aria-hidden': true,
          focusable: 'false', // See: https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable
        })}
        <VisuallyHidden>{label}</VisuallyHidden>
      </Comp>
    );
  }
);

AccessibleIcon.displayName = NAME;

export { AccessibleIcon };
export type { AccessibleIconProps };
