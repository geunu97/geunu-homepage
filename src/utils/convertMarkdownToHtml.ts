import { Octokit } from "Octokit";

const convertMarkdownToHtml = async (content: string) => {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  return await octokit.request("POST /markdown", {
    text: content,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
};

export default convertMarkdownToHtml;
