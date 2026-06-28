# Tool Map

Choose the upstream tool from the requested source and target format.

| Input | Output | Node.js upstream | Java upstream |
| --- | --- | --- | --- |
| `.xlsx` | Markdown | `miku-xlsx2md` | `miku-xlsx2md-java` |
| `.docx` | Markdown | `miku-docx2md` | `miku-docx2md-java` |
| `.pptx` | Markdown | `miku-pptx2md` | `miku-pptx2md-java` |
| Markdown | `.xlsx` | `miku-md2xlsx` | `miku-md2xlsx-java` |
| Markdown | `.docx` | `miku-md2docx` | `miku-md2docx-java` |
| Markdown | `.pptx` | `miku-md2pptx` | `miku-md2pptx-java` |

## Selection Rules

1. Use the exact requested direction. Do not assume round-trip equivalence.
2. Prefer the Node.js upstream when the user asks for browser, Node.js, or
   JavaScript behavior.
3. Prefer the Java upstream when the user asks for Java, jar, Maven, or a
   Java-only environment.
4. If the user does not specify a backend and both are available, follow
   `runtime-policy.md` for the selected converter's CLI-capable artifact.
5. If no runtime artifact is present, produce a handoff with the selected
   upstream repository and the required input/output paths.

## Ambiguous Requests

Ask a brief clarification when the request does not identify both direction and
format. For example, "convert this Office file" is insufficient unless the file
extension is available from the path.
