import { prerender } from "react-dom/static"

const Index = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>hi</title>
      </head>
      <body>
        hi
      </body>
    </html>
  )
}


if (import.meta.main) {
  const { prelude } = await prerender(Index());
  await prelude.pipeTo(Deno.stdout.writable);
  Deno.exit(0)
}
