// 名前付きエクスポート
import { hello, User } from "./module.js";
// デフォルトエクスポートは好きな名前で受け取れる{}をつけない
import functionB from "./module.js";

functionB();

hello();
const user = new User("Mike");
user.hello();


