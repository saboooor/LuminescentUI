import { Button } from './components/elements';

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <div class="bg-red-500">
          <Button>Click Me</Button>
        </div>
      </body>
    </>
  );
};
