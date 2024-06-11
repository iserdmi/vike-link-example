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

// git -c core.quotepath=off ls-files --others --cached --stage --unmerged
// git -c core.quotepath=off ls-files --others --cached --no-empty-directory --directory
// git -c core.quotepath=off ls-files --stage --others --cached
// git -c core.quotepath=off ls-files --stage --others --cached | grep "120000"
// git -c core.quotepath=off ls-files --exclude="**/node_modules/**" --exclude="**/*.telefunc.*" --exclude="dist/**" --others --cached
