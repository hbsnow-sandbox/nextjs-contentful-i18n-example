import { CommonLayout } from "@/components/layouts/common-layout";
import { BlogList } from "@/features/blog-page/components/blog-list";

export default async function Page() {
  return (
    <CommonLayout title="i18n Blog Example">
      <section className="mt-4">
        <h2 className="text-xl font-bold">ブログリスト</h2>

        <div className="mt-2">
          <BlogList />
        </div>
      </section>
    </CommonLayout>
  );
}
