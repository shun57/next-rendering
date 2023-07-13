import { GetServerSideProps, NextPage } from "next";

export type FetchProps = {
  stars: number;
};

const FetchComponent: NextPage<FetchProps> = (props) => {
  return (
    <div>
      <p>ここにReactのGitHubレポジトリに付いたスターの数を表示してみよう</p>
      <p>{props.stars} stars</p>
    </div>
  );
};

export default FetchComponent;
