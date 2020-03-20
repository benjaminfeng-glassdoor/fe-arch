import Layout from "../components/Layout";
import Link from "next/link";
import { NextPage } from "next";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";

const QUERY = gql`
  {
    hello
  }
`;

const Index: NextPage = () => {
  const { loading, data } = useQuery(QUERY);
  return (
    <Layout>
      <h1>My Blog &mdash; {loading ? "loading" : data.hello}</h1>
      <ul>
        {["hello", "learn", "deploy"].map(id => (
          <li key={id}>
            <Link href="/post/[id]">
              <a>{id}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default withApollo(Index);
