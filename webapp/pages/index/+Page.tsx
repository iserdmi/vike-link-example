export { Page };
import { getSomething } from "@/shared/src/utils/index.js";

function Page() {
  return (
    <>
      <h1>Usual Without Route 1</h1>
      {getSomething()}
    </>
  );
}
