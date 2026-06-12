import { createSdkMcpServer, query } from "@anthropic-ai/claude-agent-sdk";
import { ClaudeProvider } from "@corsair-dev/mcp";
import { corsair } from "./corsair.ts";

async function main() {
  const provider = new ClaudeProvider();
  const tools = await provider.build({ corsair });
  const server = createSdkMcpServer({ name: "corsair", tools });

  const stream = query({
    prompt: "Use Corsair to list my GitHub repos with the most open issues.",
    options: {
      model: "claude-opus-4-6",
      mcpServers: { corsair: server },
      allowedTools: [
        "mcp__corsair__corsair_setup",
        "mcp__corsair__list_operations",
        "mcp__corsair__get_schema",
        "mcp__corsair__run_script",
      ],
    },
  });

  for await (const event of stream) {
    if ("result" in event) process.stdout.write(event.result);
  }
}

main().catch(console.error);
