import Repo from "@/app/components/repo";
import RepoDirs from "@/app/components/repodirs";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link className="btn btn-back" href={"/code/repos"}>
        Back to code
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense >
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
