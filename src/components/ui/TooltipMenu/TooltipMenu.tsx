// 'use client';

// import { Tooltip } from 'react-tooltip';

// import { NavEmbeddedLink } from '@/components/ui';

// import { cn } from '@/utils/cn';

// import { TooltipMenuProps } from './types';

// import styles from './TooltipMenu.module.css';

// export const TooltipMenu: React.FC<TooltipMenuProps> = ({
//   children,
//   data,
//   handleClose,
// }) => {
//   return (
//     <>
//       <p
//         id="clickable"
//         className="flex items-center p-[10px] text-lg font-semibold transition-colors hover:text-textAccent focus:text-textAccent"
//       >
//         {children}
//       </p>

//       <Tooltip
//         anchorSelect="#clickable"
//         clickable
//         className={styles.tooltipCustom}
//       >
//         <ul
//           className={cn(
//             'flex flex-col rounded-[24px] bg-bgLight p-4',
//             `${styles.menuWrap}`,
//           )}
//         >
//           <NavEmbeddedLink data={data} handleClose={handleClose} />
//         </ul>
//       </Tooltip>
//     </>
//   );
// };
'use client';

import { NavEmbeddedLink } from '@/components/ui';

import { cn } from '@/utils/cn';

import { TooltipMenuProps } from './types';

import styles from './TooltipMenu.module.css';

export const TooltipMenu: React.FC<TooltipMenuProps> = ({
  children,
  data,
  handleClose,
}) => {
  return (
    <>
      <div className={cn('relative', styles.menuWrap)}>
        <p
          className={cn(
            'flex items-center p-[10px] text-lg/[1.39] font-semibold transition-colors hover:text-textAccent focus:text-textAccent',
            styles.menuBtn,
          )}
        >
          {children}
        </p>

        <ul
          className={cn(
            'absolute flex flex-col rounded-[24px] bg-bgLight p-4',
            styles.menuBox,
          )}
        >
          <NavEmbeddedLink data={data} handleClose={handleClose} />
        </ul>
      </div>
    </>
  );
};
