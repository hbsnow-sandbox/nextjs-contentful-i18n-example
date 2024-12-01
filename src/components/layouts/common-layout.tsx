import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

/**
 * 共通のレイアウト
 *
 * @public
 */
export const CommonLayout = ({ children, title }: Props) => {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold">{title}</h1>

      <main className="mt-4">{children}</main>
    </main>
  );
};
