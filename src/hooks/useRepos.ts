import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import api from "../api/github";
import { Repository } from "./types";

async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, githubUser] = ctx.queryKey;
  const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`);
  return data;
}

export function useFetchRepositories(githubUser: string) {
  return useQuery(["repos", githubUser], fetchRepos);
}
