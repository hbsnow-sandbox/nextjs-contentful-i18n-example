import type { ReactNode } from "react";

// eslint-disable-next-line import-access/jsdoc
import NextLink, { type LinkProps } from "next/link";

import { cn } from "@/utils/cn";

type Props<T> = {
  className?: string;
  children: ReactNode;
} & LinkProps<T>;

/**
 * リンク
 */
export function Link<T extends string>({
  className,
  children,
  ...rest
}: Props<T>) {
  return (
    <NextLink
      className={cn("text-slate-600 hover:text-slate-900", className)}
      {...rest}
    >
      {children}
    </NextLink>
  );
}
