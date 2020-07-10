import * as React from 'react';
import { cssReset } from '@interop-ui/utils';
import { forwardRef } from '@interop-ui/react-utils';

const DEFAULT_TAG = 'span';

type BadgeDOMProps = React.ComponentProps<typeof DEFAULT_TAG>;
type BadgeOwnProps = {};
type BadgeProps = BadgeDOMProps & BadgeOwnProps;

const Badge = forwardRef<typeof DEFAULT_TAG, BadgeProps>(function Badge(props, forwardedRef) {
  const { as: Comp = DEFAULT_TAG, ...badgeProps } = props;
  return <Comp ref={forwardedRef} {...badgeProps} />;
});

Badge.displayName = 'Badge';

const styles = {
  badge: {
    ...cssReset(DEFAULT_TAG),
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'middle',
    lineHeight: '1',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },
};

export { Badge, styles };
export type { BadgeProps };
